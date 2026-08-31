import { pageMetadata } from "@/lib/seo-pages";

export const metadata = pageMetadata("/test-route");
export default function TestPage() {
  return <div>Test Page Working</div>;
}
