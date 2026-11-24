// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Deterministic, standard library only: no randomness, no wall-clock time,
// no network, no environment secrets. Writes exactly one line to entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. One short funny excuse, 1-200 characters, answering the prompt:
// a robot vacuum explains why it ate the sock. The joke turns on the sock
// being the only thing in the house that ever tried to run away from it.
const LINE =
  "I ate your sock because it was the only thing in this house that ever tried to run away from me.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Validate before writing so a bad line fails loudly here
// instead of silently at grading time.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  console.error(`entry must be 1-200 characters, got ${chars.length}`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry must not be only white space");
  process.exit(1);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Self-check: read the file back and confirm it is byte-for-byte the line
// we intended, so a partial write or encoding surprise fails here.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  console.error("read-back mismatch: entry.txt does not match the line");
  process.exit(1);
}
console.log(`wrote ${chars.length} characters to ${outPath}`);
