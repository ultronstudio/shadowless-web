const { rmSync } = require("fs");
const { spawn } = require("child_process");

try {
  // Remove stale compilation artifacts to avoid stale source maps.
  rmSync(".next", { recursive: true, force: true });
} catch (error) {
  if (error.code !== "ENOENT") {
    console.warn("Could not clean .next directory:", error.message);
  }
}

const child = spawn("next", ["dev"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    NEXT_DISABLE_TURBOPACK: "1",
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});

child.on("error", (error) => {
  console.error("Failed to start Next.js dev server:", error.message);
  process.exit(1);
});
