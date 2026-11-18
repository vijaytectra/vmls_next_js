import fs from "node:fs";

const OUT = "out";

// Clean up any stray out_trash_* directories from past interrupted runs
try {
  for (const item of fs.readdirSync(".")) {
    if (item.startsWith("out_trash_")) {
      try {
        fs.rmSync(item, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
      } catch {}
    }
  }
} catch {}

if (fs.existsSync(OUT)) {
  // On Windows, deleting a folder with thousands of files in-place frequently hits
  // EBUSY because Windows Defender, VS Code file watchers, or indexers hold transient locks.
  // The robust Windows pattern:
  // 1. Rename `out` to a temporary directory (atomic & instantaneous on NTFS).
  // 2. Delete the temporary directory with retry / backoff.
  const trash = `out_trash_${Date.now()}`;
  let renamed = false;
  try {
    fs.renameSync(OUT, trash);
    renamed = true;
  } catch {
    // If rename is blocked, fall back to in-place deletion
  }

  const target = renamed ? trash : OUT;

  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      if (fs.existsSync(target)) {
        fs.rmSync(target, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
      }
      break;
    } catch (e) {
      if (attempt === 10) {
        console.warn(`[clean-out] Warning: could not completely remove ${target} (${e.message}). Proceeding.`);
      } else {
        // Synchronous sleep before next retry
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 150 * attempt);
      }
    }
  }
}
