// One Line, One Laugh: Roast Your Fridge
// Writes a single roast line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only, fully deterministic: no randomness, time,
// locale, network or dependencies. Writes nowhere else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My fridge hums like a nosy neighbour who watched me eat the last slice at 2 a.m. and is saving it for the group chat.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`roast line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
