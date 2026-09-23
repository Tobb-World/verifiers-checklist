# Changelog

Releases are versioned and dated so that "checked against v1.0.0" is a claim a reader can verify. That is the checklist's own rule — scope every claim — applied to itself.

Versions follow [Semantic Versioning](https://semver.org/) as it applies to a document:

- **Major** — a question is removed or changed in a way that could alter a past answer.
- **Minor** — a question is added, or steps are added to an existing one.
- **Patch** — wording, clarification or typo fixes that cannot change an answer.

## 1.0.0 — 2026-09-23

First public release. Four rules, four stated limits, and ten questions, Q0 through Q9, as served at
[tobb.world/research/verifiers-checklist](https://tobb.world/research/verifiers-checklist).

Notes on how it reached ten:

- The checklist began as eight questions. **Q8** (whether published transaction hashes add up) and **Q9** (whether a
  contract is upgradeable, and who can upgrade it) were added after applying the earlier version to a live project and
  finding that the original eight did not reach either point.
- **Q0** is deliberately first and deliberately dull. Checking that you are on the project's real site is the cheapest
  question here and the only one that invalidates every other answer if you get it wrong.
