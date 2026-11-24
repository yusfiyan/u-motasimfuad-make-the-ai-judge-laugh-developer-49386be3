// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to entry.txt.
// Node 22, stdlib only. No other file writes at runtime.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "The deploy was flawless, the tests all passed \u2014 then the users showed up and ruined everything.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 200
// characters, not only white space. Refuse to write anything else.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, "utf8");
