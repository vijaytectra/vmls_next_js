import JsonLd from "@/components/seo/JsonLd";
import { schemasForPage } from "@/lib/page-schema";
import type { PagePath } from "@/lib/seo-pages";

/**
 * Emits exactly the JSON-LD a page is entitled to, per the page-type mapping
 * in src/lib/page-schema.ts. Safe in client components too - it renders in
 * the server-rendered HTML either way.
 */
export default function PageSchema({ path }: { path: PagePath }) {
  const schemas = schemasForPage(path);
  if (!schemas.length) return null;
  return <JsonLd schema={schemas} />;
}
