import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Fix memory leak by restarting the server every minute; uptime is now a rounding error";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
