/**
 * Prevent a single trailing word from sitting alone on the last line,
 * without creating long unbreakable runs that overflow card columns.
 */
export function noOrphanText(text: string): string {
  return text
    .split("\n")
    .map((line) => {
      // Normalize any prior nbsp so we can re-apply a safe orphan fix
      const words = line
        .trim()
        .replace(/\u00A0/g, " ")
        .split(/\s+/)
        .filter(Boolean);
      if (words.length < 2) return words.join(" ");

      // Only glue the final two words — enough to avoid orphans, short enough to wrap
      const last = words.pop()!;
      const prev = words.pop()!;
      return [...words, `${prev}\u00A0${last}`].join(" ");
    })
    .join("\n");
}
