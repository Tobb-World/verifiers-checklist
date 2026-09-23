# The Verifier's Checklist

Ten questions to check any crypto project before you trust it, with the steps to answer each one.

Most take under five minutes with nothing but a browser and a block explorer. Where one takes longer, it says so.

Version 1.0.0 — 2026-09-23 — published by [TOBB WORLD](https://tobb.world/) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## What this is

A method, not a rating. **No project is scored here.** The checklist is deliberately project-independent so that anyone can run it on anything, including on us. Worked examples are published separately, each alongside the response of the project examined.

It assumes no tools you do not already have, and no trust in us: every question tells you where to look, so you can reach your own answer and disagree with ours.

## What it does not do

- It does not tell you whether a project will succeed, or what anything will be worth.
- It does not tell you whether a team is honest. It tells you whether what they say matches what you can check.
- It does not catch everything. Auditors say plainly that their reports are not complete, and neither is this.
- It does not tell you what to buy. It is a method for asking better questions, and the decision stays yours.

## How to use it

Work through the questions in order. Q0 comes first for a reason — everything after it is worthless if you are reading the wrong site.

Write down three things for each question: the answer, where you found it, and the date. Anything you could not check belongs on that list too. **An unanswered question is information, not a pass.**

There is an interactive version at [tobb.world/check](https://tobb.world/check) that walks through the questions and keeps your answers in your own browser.

## The rules

### When the marketing page and the audit disagree, the audit wins.

A security page is written to reassure you. An audit report is written to be relied on. Where they differ, believe the document with the auditor's name on it.

### Every question comes with its steps.

Most take under five minutes with nothing but a browser and a block explorer. Where one takes longer, it says so. If you cannot check a claim, it has not been shown to you.

### Scope every claim.

“Audited” and “renounced” are almost never true of a whole system. Ask which contract, which file, which date. A project is many contracts, and each one answers for itself.

### Say what you could not check.

Anything you could not verify belongs on your list too, in plain sight. An unanswered question is information, not a pass.

## The ten questions

### Q0 — Is this the project’s actual site?

*Time: 2 minutes*

**Why it matters.** Lookalike domains are the cheapest attack in crypto, and the first one used on newcomers. Everything else on this list is worthless if you are reading the wrong page.

**How to check it**

1. Start from somewhere you already trust: the project’s documentation, its long-standing social accounts, or its token’s page on the block explorer.
2. Follow the link from there to the site. Navigate to the marketing site from the documentation, never the other way round.
3. If the project uses several domains, check that each one is linked from an official source, not just from the others.

**A bad answer looks like:** You cannot reach the site from any official source, or you arrived by a link someone sent you directly.

### Q1 — Is there an audit report, or only a badge?

*Time: 2 minutes*

**Why it matters.** A logo is not an audit. Anyone can put an auditor’s name on a page; only a real engagement produces a report.

**How to check it**

1. Click the auditor’s logo or name on the project’s security page.
2. You should reach a downloadable report, or the auditor’s own page for this project with a report attached.
3. If you land on a monitoring dashboard or a “security score,” look for the report itself on it. A dashboard can show an audit in progress, which is honest, but it is not a finished report.

**A bad answer looks like:** The badge links to the auditor’s homepage, to a score, or to nothing — and the page still says the project is audited.

### Q2 — What was actually in scope?

*Time: 3 minutes (longer to match deployed code)*

**Why it matters.** An audit covers the code it was given, at the moment it was given. If you cannot tell what that was, you cannot tell whether it is the code you are about to use.

**How to check it**

1. Open the report’s first pages. A real report names the files reviewed, the dates of the review, and usually a commit hash and file hashes.
2. Read the list of files. Ask whether the contracts you will actually touch — staking, deposits, withdrawals — are in it.
3. Going further: if the code on the block explorer is verified, its source should match the audited commit. This takes longer, and most people stop at the previous step.

**A bad answer looks like:** No file list, no dates, no commit — or a list that covers only the token while the page implies the whole system was reviewed.

### Q3 — What did the audit find, and what is still unfixed?

*Time: 4 minutes*

**Why it matters.** “0 critical” is the line projects quote. The status column is the line that matters.

**How to check it**

1. Find the table of findings in the report.
2. Read the Status column, not just the Severity column.
3. Anything marked Partially Fixed or Acknowledged is still open, whatever the summary says. Read those findings in full.

**A bad answer looks like:** The project cites the headline count and stops. An open centralization finding is a normal outcome; hiding it is the warning sign.

### Q4 — Who can change things, and how fast?

*Time: 4 minutes*

**Why it matters.** Every system has someone who can change its settings. What matters is who, and whether you get any warning before a change lands.

**How to check it**

1. Search the audit for centralization, privileged, owner, governance and timelock.
2. Note which addresses can change fees, rates, treasury destinations or allow-lists.
3. Look for a timelock: a delay between a change being scheduled and taking effect, so people can see it coming.

**A bad answer looks like:** A single address can change economic settings with no timelock, so changes take effect the moment they are made.

### Q5 — Can new tokens be created?

*Time: 3 minutes*

**Why it matters.** Minting is not automatically bad — some systems create tokens by design. The questions are who can trigger it, how much, and whether the project tells you.

**How to check it**

1. Search the audit for mint, minting and MINTER_ROLE.
2. On the block explorer, open the contract’s verified source and search for the same words.
3. Find out who holds the ability to mint, and whether there is a limit.

**A bad answer looks like:** An unlimited mint function exists, and the project’s own page says there is “no minting capability.”

### Q6 — Is ownership actually renounced — contract by contract?

*Time: 3 minutes per contract*

**Why it matters.** “Ownership renounced” is often said of a project when it is true of one contract. Check each one you will use.

**How to check it**

1. On the block explorer, open the contract and go to Contract, then Read Contract, then owner().
2. The zero address (0x0000…0000) or the burn address (0x…dEaD) means no one holds the owner key. Anything else is an owner.
3. If there is an owner, open that address. If it has no contract code, it is a single private key. If it is a contract, find out what kind — a multisig shows how many signers must approve.

**A bad answer looks like:** The page says ownership is renounced, and one of the project’s contracts still has a live owner — especially a single wallet.

### Q7 — Does the marketing page agree with the audit?

*Time: 5 minutes*

**Why it matters.** This is the question the others build towards. A project that describes itself accurately has nothing to lose from it.

**How to check it**

1. Pick the three strongest claims on the project’s security page — usually about audits, keys and minting.
2. Find each one in the audit report, or check it on-chain using Q5 and Q6.
3. Note any claim written in the present tense that the audit describes as planned, partial or future.

**A bad answer looks like:** They contradict. Then the first rule applies: the audit wins.

### Q8 — When a project publishes transaction hashes, do the numbers add up?

*Time: 5 minutes*

**Why it matters.** Publishing hashes is not the same as the hashes agreeing. It is a genuinely good sign when a project does it — and it only counts if the amounts reconcile.

**How to check it**

1. Open each published transaction on the block explorer and note the token transfers: from, to, amount.
2. Add up what left the treasury and compare it with what arrived where the announcement says it went.
3. If there is a difference, look at the balance of the address in the middle. Money sitting there is accounted for; money that moved on needs explaining.

**A bad answer looks like:** The hashes are real but the amounts do not tie out, or a difference is left unexplained.

### Q9 — Is the contract upgradeable, and if so, who can upgrade it?

*Time: 10 minutes — the one step that needs a node call*

**Why it matters.** An upgradeable contract can have its logic replaced after you have deposited into it. That is common and often responsible — it is how teams fix bugs — but the key that does it is the most important key in the system.

**How to check it**

1. On the block explorer, a Read as Proxy or Write as Proxy tab means the contract is an upgradeable proxy. Its absence is not proof: an unverified proxy may not show it.
2. Find the admin. For the standard pattern it is stored in slot 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103, readable with eth_getStorageAt on any public node.
3. If the admin is itself a contract (often called a ProxyAdmin), read its owner().
4. Open that owner on the explorer. A multisig or a timelock is one answer; an address with no contract code is one private key.

**A bad answer looks like:** The core contracts are upgradeable, the upgrade key traces to a single wallet, and the project says its contracts are “immutable” or have “no admin keys.” Renounced ownership on the token says nothing about its proxies.

## Machine-readable

[`checklist.json`](checklist.json) carries the same content as structured data — the four rules and all ten questions, each with its `id`, `question`, `why`, `steps`, `bad` and `time`. Build against that rather than parsing this page.

Both files are generated from a single source by [`tools/build.mjs`](tools/build.mjs) and are never hand-edited, so the text here cannot drift from the version the site serves at [tobb.world/research/verifiers-checklist](https://tobb.world/research/verifiers-checklist).

## Versioning

Releases are versioned and dated so that "checked against v1.0.0" means something a reader can verify. Changes are listed in [CHANGELOG.md](CHANGELOG.md). That is the checklist's own rule applied to itself.

## Licence and naming

Licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). You may share and adapt it, including commercially, provided you give credit, link back, and say whether you changed it.

Two things the licence does not cover, set out in [NOTICE](NOTICE):

- **The TOBB WORLD name and logo are not licensed.** CC BY grants copyright, not trademark.
- **Please do not call a modified version "The Verifier's Checklist".** Adapt it freely and credit the original, but give your version its own name, so that a reader who is told something was checked against this checklist can rely on what that means.

## Contributing

A question earns its place by being answerable. See [CONTRIBUTING.md](CONTRIBUTING.md).
