// One Line, One Laugh — entry program (Node 22, no dependencies).
//
// Writes a single original funny line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), byte-exact with no trailing newline,
// then reads it back to verify. Gate: UTF-8 text, 1-140 characters,
// not only whitespace, a single line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I finally found my purpose in life \u2014 it was in the last place I looked, like my keys, my wallet, and my twenties.";

// Validate: 1-140 Unicode code points, single line, not blank.
const chars = [...ENTRY]; // spread counts code points, not UTF-16 units
if (ENTRY.trim().length === 0) {
  throw new Error("entry is empty or only whitespace");
}
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, must be 1-140`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Byte-exact write, no trailing newline.
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("verification failed: entry.txt does not match the entry");
}
console.log(`wrote ${outPath} (${chars.length} characters, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`);
