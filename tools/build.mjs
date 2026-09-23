/**
 * Generates checklist.json and README.md from the canonical TypeScript source.
 *
 * The source of record is content/research/checklist.ts in the tobb-world site
 * repository. This repository is generated from it and is never hand-edited, so
 * the published standard cannot drift from the one the site serves.
 *
 * Only the exported RULES, LIMITS and CHECKLIST data are read. The source file's
 * header comment is deliberately not carried across: it names internal paths.
 *
 * Usage: node tools/build.mjs [path-to-checklist.ts]
 */
import { readFile, writeFile, unlink } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const VERSION = "1.0.0";
const UPDATED = "2026-09-23";
const CANONICAL = "https://tobb.world/research/verifiers-checklist";
const TOOL = "https://tobb.world/check";
const LICENSE_NAME = "CC BY 4.0";
const LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/";

const src = process.argv[2] ?? path.join("tools", "checklist.source.ts");
const raw = await readFile(src, "utf8");

// Strip the type layer so the data can be imported as plain ESM. Interfaces are
// removed whole; the two exported consts lose their type annotations.
const js = raw
  .replace(/export interface [\s\S]*?\n}\n/g, "")
  .replace(/export const RULES: ChecklistRule\[\] =/, "export const RULES =")
  .replace(/export const CHECKLIST: ChecklistItem\[\] =/, "export const CHECKLIST =")
  .replace(/export const LIMITS: string\[\] =/, "export const LIMITS =");

// Anything still carrying a type annotation is an export this script does not
// know about. Fail rather than silently publish an incomplete standard.
const leftover = js.match(/export const (\w+)\s*:/);
if (leftover) {
  console.error(`BUILD FAILED: unhandled export "${leftover[1]}" in the source. Add it to the build before publishing.`);
  process.exit(1);
}

const tmp = path.join(path.dirname(src), ".checklist.generated.mjs");
await writeFile(tmp, js, "utf8");
let RULES, CHECKLIST, LIMITS;
try {
  ({ RULES, CHECKLIST, LIMITS } = await import(pathToFileURL(tmp).href));
} finally {
  await unlink(tmp);
}

// Fail loudly rather than publish a partial standard.
const problems = [];
if (RULES.length !== 4) problems.push(`expected 4 rules, got ${RULES.length}`);
if (CHECKLIST.length !== 10) problems.push(`expected 10 questions, got ${CHECKLIST.length}`);
if (LIMITS.length !== 4) problems.push(`expected 4 limits, got ${LIMITS.length}`);
for (const l of LIMITS) {
  if (!l?.trim()) problems.push("empty limit");
}
for (const r of RULES) {
  if (!r.title?.trim() || !r.body?.trim()) problems.push(`rule missing title or body: ${r.title}`);
}
for (const item of CHECKLIST) {
  for (const field of ["id", "question", "why", "bad", "time"]) {
    if (!item[field]?.trim()) problems.push(`${item.id ?? "?"}: empty ${field}`);
  }
  if (!Array.isArray(item.steps) || item.steps.length === 0) problems.push(`${item.id}: no steps`);
}
const ids = CHECKLIST.map((i) => i.id);
if (new Set(ids).size !== ids.length) problems.push("duplicate question ids");
if (problems.length) {
  console.error("BUILD FAILED:\n  " + problems.join("\n  "));
  process.exit(1);
}

await writeFile(
  "checklist.json",
  JSON.stringify(
    {
      name: "The Verifier's Checklist",
      version: VERSION,
      updated: UPDATED,
      canonical: CANONICAL,
      license: { name: LICENSE_NAME, url: LICENSE_URL },
      publisher: { name: "TOBB WORLD", url: "https://tobb.world/" },
      rules: RULES,
      limits: LIMITS,
      checklist: CHECKLIST,
    },
    null,
    2,
  ) + "\n",
  "utf8",
);

const q = (item) =>
  [
    `### ${item.id} — ${item.question}`,
    "",
    `*Time: ${item.time}*`,
    "",
    `**Why it matters.** ${item.why}`,
    "",
    "**How to check it**",
    "",
    ...item.steps.map((s, i) => `${i + 1}. ${s}`),
    "",
    `**A bad answer looks like:** ${item.bad}`,
  ].join("\n");

const readme = `# The Verifier's Checklist

Ten questions to check any crypto project before you trust it, with the steps to answer each one.

Most take under five minutes with nothing but a browser and a block explorer. Where one takes longer, it says so.

Version ${VERSION} — ${UPDATED} — published by [TOBB WORLD](https://tobb.world/) under [${LICENSE_NAME}](${LICENSE_URL}).

## What this is

A method, not a rating. **No project is scored here.** The checklist is deliberately project-independent so that anyone can run it on anything, including on us. Worked examples are published separately, each alongside the response of the project examined.

It assumes no tools you do not already have, and no trust in us: every question tells you where to look, so you can reach your own answer and disagree with ours.

## What it does not do

${LIMITS.map((l) => `- ${l}`).join("\n")}

## How to use it

Work through the questions in order. Q0 comes first for a reason — everything after it is worthless if you are reading the wrong site.

Write down three things for each question: the answer, where you found it, and the date. Anything you could not check belongs on that list too. **An unanswered question is information, not a pass.**

There is an interactive version at [tobb.world/check](${TOOL}) that walks through the questions and keeps your answers in your own browser.

## The rules

${RULES.map((r) => `### ${r.title}\n\n${r.body}`).join("\n\n")}

## The ten questions

${CHECKLIST.map(q).join("\n\n")}

## Machine-readable

[\`checklist.json\`](checklist.json) carries the same content as structured data — the four rules and all ten questions, each with its \`id\`, \`question\`, \`why\`, \`steps\`, \`bad\` and \`time\`. Build against that rather than parsing this page.

Both files are generated from a single source by [\`tools/build.mjs\`](tools/build.mjs) and are never hand-edited, so the text here cannot drift from the version the site serves at [tobb.world/research/verifiers-checklist](${CANONICAL}).

## Versioning

Releases are versioned and dated so that "checked against v${VERSION}" means something a reader can verify. Changes are listed in [CHANGELOG.md](CHANGELOG.md). That is the checklist's own rule applied to itself.

## Licence and naming

Licensed under [Creative Commons Attribution 4.0 International](${LICENSE_URL}). You may share and adapt it, including commercially, provided you give credit, link back, and say whether you changed it.

Two things the licence does not cover, set out in [NOTICE](NOTICE):

- **The TOBB WORLD name and logo are not licensed.** CC BY grants copyright, not trademark.
- **Please do not call a modified version "The Verifier's Checklist".** Adapt it freely and credit the original, but give your version its own name, so that a reader who is told something was checked against this checklist can rely on what that means.

## Contributing

A question earns its place by being answerable. See [CONTRIBUTING.md](CONTRIBUTING.md).
`;

await writeFile("README.md", readme, "utf8");
console.log(`OK  rules=${RULES.length}  limits=${LIMITS.length}  questions=${CHECKLIST.length}  ids=${ids.join(",")}`);
