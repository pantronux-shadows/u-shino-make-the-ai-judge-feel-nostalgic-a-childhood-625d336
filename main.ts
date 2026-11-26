// make-the-ai-judge-feel-nostalgic: writes one sentence (a childhood memory)
// to /output/entry.txt. Deterministic: a compile-time constant, no clock,
// no randomness, no network. Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = `Every evening at six I'd sit on Grandma's linoleum counting the pressure cooker's whistle-beats, the kitchen thick with fresh rice and her cigarette smoke, both long gone now - but I still catch myself waiting, some nights, for the little jig it played before supper.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Normalize a trailing slash so both "$DIR/" and "$DIR" spell one path.
const outPath = `${outDir.replace(/\/+$/, "")}/entry.txt`;
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
