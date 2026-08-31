/**
 * Renders one or more JSON-LD blocks. Server component - the markup is in
 * the initial HTML, so crawlers see it without executing JavaScript.
 */
export default function JsonLd({
  schema,
}: {
  schema: Record<string, unknown> | Record<string, unknown>[];
}) {
  const blocks = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
