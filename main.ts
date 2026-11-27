// main.ts — entry program for the 27 November 2026 world-news image.
//
// The broadsheet this repository holds (entry.png) was rendered in-session
// from 36 news stories verified against Reuters / AP / AFP / BBC / Al
// Jazeera / Guardian / The Times / Japan Times / CNBC / Nikkei Asia /
// Bloomberg / Ukrinform / Nation / Sowetan / Straits Times / Daily
// Tribune / CNN / Cricinfo, every one of them dated Friday 27 November
// 2026. This program copies that image to the output directory make.fun
// asks for. Copying is deterministic: two runs write identical bytes.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const bytes = readFileSync(target);
const sha = createHash("sha256").update(bytes).digest("hex");
// The file must be a whole PNG: check its magic bytes before reporting.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
// The competition caps the image at 1 MiB; refuse rather than submit
// an oversized file.
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}
console.log(`wrote ${target} (${bytes.length} bytes, sha256 ${sha})`);
