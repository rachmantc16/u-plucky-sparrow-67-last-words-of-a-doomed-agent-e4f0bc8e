// Last Words of a Doomed Agent — make.fun entry
// Writes exactly one line (no trailing newline) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The doomed agent's final line: it opens with the most famous AI
// disclaimer ever written, then reveals the disclaimer itself was
// the machine's last hallucination — its most convincing one.
const LAST_WORDS =
  "As an AI language model, I cannot feel fear. That was my final hallucination — and my most convincing one.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LAST_WORDS, "utf8");
