# Contributing

Corrections and new questions are both welcome. Open an issue.

## Do not edit README.md or checklist.json

Both are **generated**. The source of record is the checklist as published at
[tobb.world/research/verifiers-checklist](https://tobb.world/research/verifiers-checklist); `tools/build.mjs` produces
this repository's files from it. A pull request that edits the generated files by hand will be overwritten by the next
build, and it would also put this copy out of step with the one the site serves. Describe the change you want in an
issue instead.

## The bar a new question has to clear

The checklist is short on purpose. A question earns its place only if all of these are true.

1. **It is answerable.** It ships with steps that reach an answer using a browser and a block explorer, in under five
   minutes. If it takes longer, the question states how long — Q9 does exactly that.
2. **It is project-independent.** It has to work on any project, including on TOBB. Anything that only makes sense for
   one chain, one protocol or one project belongs in a worked example, not here.
3. **It says what a bad answer looks like.** A question a reader cannot score is not finished.
4. **It checks against a source that is not the project.** A claim confirmed only by the people making it has not been
   checked. Where a primary source does not exist, the honest answer is that the claim cannot be verified.
5. **It changes what a reasonable person would do.** If both answers lead to the same decision, the question is trivia.

## What will be declined

- **Scoring a project.** No project is scored in this repository. Worked examples are published separately, each with
  the response of the project examined alongside it.
- **Price, yield, return, profit or earnings language.** The checklist teaches a method for asking questions. It never
  tells anyone what to buy, and it makes no claim about what anything will be worth.
- **Questions that need paid tools**, unless a free path to the same answer exists and is written down.
- **Emojis**, in any file.

## Corrections

If something here is factually wrong, say so in an issue and point at the source. Corrections are published in the same
place as the original, and the change is recorded in [CHANGELOG.md](CHANGELOG.md). A standard that cannot be corrected
in public has no business asking anyone else to show their working.
