// NapTrack — the worst app idea ever pitched.
// Writes one single-sentence pitch (158 chars) to /output/entry.txt.
// Deterministic: the entry is a constant, written byte-identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "NapTrack uses AI to detect the exact second light sleepers fall asleep, then wakes them up to announce it, so they never miss a single moment of being asleep.";

// The grader sandbox provides /output, but creating it when missing makes the
// program fail-safe instead of crashing on a missing directory.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
