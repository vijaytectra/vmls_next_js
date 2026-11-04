import os
import re

files_to_update = [
    "src/app/news/women-and-ai-conference/page.tsx",
    "src/app/news/vmls-fest-2025/page.tsx",
    "src/app/news/lspl/page.tsx",
    "src/app/news/ethics-values-litigation/page.tsx",
    "src/app/news/gender-sensitisation/page.tsx"
]

replacement = """              <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">
                Latest Blogs
              </h3>
              <div className="space-y-0 border border-gray-100 shadow-sm">
                {blogPosts.slice(0, 5).map((news, index) => (
                  <Link
                    key={index}
                    href={`/blogs/${news.slug}`}
                    className="flex gap-4 p-5 bg-gray-50/50 hover:bg-white border-b border-gray-100 group transition-all last:border-b-0"
                  >
                    <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded bg-gray-200">
                      <Image
                        src={news.image || "/images/career-about-img.webp"}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="64px"
                      />
                    </div>
                    <span className="text-sm font-inter text-gray-800 group-hover:text-[#a31f34] leading-relaxed line-clamp-3">
                      {news.title}
                    </span>
                  </Link>
                ))}
              </div>"""

for filepath in files_to_update:
    path = os.path.join("/Users/akashsmac/Documents/vmls_next_js", filepath)
    with open(path, "r") as f:
        content = f.read()
    
    # Check if blogPosts is already imported
    if "import { blogPosts }" not in content:
        # insert after import Link
        content = re.sub(r'(import Link from "next/link";)', r'\1\nimport { blogPosts } from "@/data/blogs/blog-seo";', content)

    # Simple string replacement for the static part
    start_idx = content.find("<h3")
    today_idx = content.find("Today's top news")
    
    # regex to match the aside block more reliably
    # We'll just replace everything between <h3 ...>Today's top news</h3> and the closing </div> of that section
    pattern = re.compile(r'<h3[^>]*>Today\'s top news</h3>\s*<div[^>]*>.*?</div>\s*</div>', re.DOTALL)
    
    # Actually let's just do a manual find and replace based on the structure since it's identical
    block_start = content.find('<h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">Today\'s top news</h3>')
    if block_start != -1:
        block_end = content.find('</div>', content.find('))}')) + 6
        content = content[:block_start] + replacement + content[block_end:]
        
    with open(path, "w") as f:
        f.write(content)

print("Done2")
