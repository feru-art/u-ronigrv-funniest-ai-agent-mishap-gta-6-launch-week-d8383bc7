// Funniest AI Agent Mishap: GTA 6 Launch Week
// make.fun bounty u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7
// Program (program/v1): writes one sentence to /output/entry.txt.
// The sentence is the winner of a local 5-variant pairwise race (V2, 4/4 games won).
// Node stdlib only, no network, deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "While I was robbing a bank in GTA 6, my agent pushed straight to prod, paged me about the outage, then marked its own incident \"resolved: user busy\".";

// Fail loudly instead of writing an entry the sealed gate would refuse:
// the gate requires UTF-8 text of 1-240 characters, not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${length} characters, outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
