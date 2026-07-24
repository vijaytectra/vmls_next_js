#!/usr/bin/env python3
"""Extract all VMLS blog posts from the live site into structured JSON for localhost."""

from __future__ import annotations

import json
import re
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LISTING = ROOT / "src/app/blogs/page.tsx"
OUT = ROOT / "src/data/blogs/content.json"
WP_CACHE = Path("/tmp/wp-posts-full.json")

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
)


def curl(url: str) -> str | None:
    try:
        return subprocess.check_output(
            [
                "curl",
                "-fsSL",
                "-A",
                UA,
                "-H",
                "Referer: https://vmls.edu.in/blogs.html",
                "--max-time",
                "45",
                url,
            ],
            text=True,
            stderr=subprocess.DEVNULL,
        )
    except Exception:
        return None


def listing_meta() -> dict[str, dict]:
    text = LISTING.read_text()
    meta: dict[str, dict] = {}
    for title, date, image, slug in re.findall(
        r'title:\s*"((?:\\.|[^"\\])*)"\s*,\s*date:\s*"((?:\\.|[^"\\])*)"\s*,\s*image:\s*"((?:\\.|[^"\\])*)"\s*,\s*slug:\s*"((?:\\.|[^"\\])*)"',
        text,
    ):
        if slug not in meta:
            meta[slug] = {
                "title": title.replace('\\"', '"'),
                "date": date,
                "image": image,
            }
    return meta


def load_wp() -> dict[str, dict]:
    posts = []
    if WP_CACHE.exists():
        posts = json.loads(WP_CACHE.read_text())
    else:
        page = 1
        while True:
            raw = curl(
                f"https://vmls.edu.in/blog/wp-json/wp/v2/posts?per_page=100&page={page}&_fields=id,slug,title,content,date"
            )
            if not raw:
                break
            batch = json.loads(raw)
            if not batch:
                break
            posts.extend(batch)
            if len(batch) < 100:
                break
            page += 1
        WP_CACHE.write_text(json.dumps(posts))
    return {p["slug"]: p for p in posts}


def extract_balanced_div(html: str, open_pat: str) -> str | None:
    m = re.search(open_pat, html, re.I)
    if not m:
        return None
    start = html.find(">", m.start()) + 1
    depth = 1
    pos = start
    lower = html.lower()
    while pos < len(html) and depth > 0:
        nxt_open = lower.find("<div", pos)
        nxt_close = lower.find("</div>", pos)
        if nxt_close < 0:
            return html[start:]
        if nxt_open >= 0 and nxt_open < nxt_close:
            if lower[nxt_open + 4 : nxt_open + 5] in (">", " ", "\n", "\t", "/"):
                depth += 1
            pos = nxt_open + 4
        else:
            depth -= 1
            if depth == 0:
                return html[start:nxt_close]
            pos = nxt_close + 6
    return html[start:]


def text_clean(s: str) -> str:
    s = unescape(s)
    s = re.sub(r"<[^>]+>", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def slug_from_href(href: str) -> str | None:
    if not href:
        return None
    href = href.strip()
    # ./foo.html, ../blogs/foo.html, /blogs/foo.html, full URL
    patterns = [
        r"(?:https?://(?:www\.)?vmls\.edu\.in)?/blogs/([a-zA-Z0-9_-]+)\.html",
        r"(?:https?://(?:www\.)?vmls\.edu\.in)?/blog/([a-zA-Z0-9_-]+)/?",
        r"^\./([a-zA-Z0-9_-]+)\.html",
        r"^\.\./blogs/([a-zA-Z0-9_-]+)\.html",
        r"^/blogs/([a-zA-Z0-9_-]+)/?$",
    ]
    for pat in patterns:
        m = re.search(pat, href)
        if m:
            return m.group(1)
    return None


def rewrite_href(href: str) -> str:
    slug = slug_from_href(href)
    if slug:
        return f"/blogs/{slug}"
    if href.startswith("./") and href.endswith(".html"):
        return f"/blogs/{href[2:-5]}"
    if href.startswith("../blogs/") and href.endswith(".html"):
        return f"/blogs/{href[len('../blogs/'):-5]}"
    if href in ("../blogs.html", "./blogs.html", "/blogs.html", "https://vmls.edu.in/blogs.html"):
        return "/blogs"
    if href in ("https://vmls.edu.in/", "https://vmls.edu.in", "/"):
        return "/"
    return href


def rewrite_links(html: str) -> str:
    def repl(m: re.Match) -> str:
        quote = m.group(1)
        href = m.group(2)
        new = rewrite_href(href)
        return f"href={quote}{new}{quote}"

    return re.sub(r"""href=(['"])(.*?)\1""", repl, html, flags=re.I)


def extract_static_body(html: str, slug: str) -> tuple[str, dict]:
    meta = {"category": None, "author": None, "liveTitle": None, "liveDate": None}
    h1 = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.S | re.I)
    if h1:
        meta["liveTitle"] = text_clean(h1.group(1))

    am = re.search(r'<div class="article-meta">([\s\S]*?)</div>', html)
    if am:
        spans = [text_clean(s) for s in re.findall(r"<span[^>]*>([\s\S]*?)</span>", am.group(1))]
        spans = [s for s in spans if s and s != "•"]
        if spans:
            meta["liveDate"] = spans[0]
        if len(spans) > 1:
            meta["category"] = spans[-1]

    author = re.search(r"<span>\s*By\s+([^<]+)</span>", html, re.I)
    if author:
        meta["author"] = text_clean(author.group(1))

    if slug == "vmls-open-day-2026":
        m = re.search(r'<article class="article">([\s\S]*?)</article>', html)
        if m:
            return m.group(1), meta

    body = extract_balanced_div(html, r'<div class="content-text"[^>]*>')
    if body and len(body) > 200:
        return body, meta

    h1_idx = html.lower().find("<h1")
    region = html[h1_idx:] if h1_idx >= 0 else html
    # Older templates often split the article across multiple .content blocks
    # (intro paragraph in one, body sections in another). Join them in order.
    parts: list[str] = []
    for m in re.finditer(r'<div class="content"(\s[^>]*)?>', region, re.I):
        if "blogs-inner-autor" in (m.group(1) or ""):
            continue
        inner = extract_balanced_div(region[m.start() :], r'<div class="content"[^>]*>')
        if not inner:
            continue
        cleaned = inner.strip()
        # Skip tiny chrome leftovers; keep short intro paragraphs (>=80 chars)
        if len(cleaned) < 80:
            continue
        parts.append(cleaned)
    if parts:
        return "\n".join(parts), meta

    start = region.find("</h1>")
    return (region[start : start + 120000] if start >= 0 else region[:120000]), meta


def strip_chrome(html: str) -> str:
    html = re.sub(r"<script[\s\S]*?</script>", "", html, flags=re.I)
    html = re.sub(r"<style[\s\S]*?</style>", "", html, flags=re.I)
    html = re.sub(r"<figure[\s\S]*?</figure>", "", html, flags=re.I)
    # social share / view counters
    html = re.sub(r'<div class="social-share"[\s\S]*?</div>', "", html, flags=re.I)
    html = re.sub(r'id="blogs-inner-autor"[\s\S]*?</div>\s*</div>', "", html, flags=re.I)
    # cut site chrome tails
    for marker in [
        "Our Top Articles",
        'id="footer"',
        'class="footer"',
        "Search Search",
        "Recent Posts",
    ]:
        i = html.find(marker)
        if i > 300:
            html = html[:i]
    return html


def parse_details_faqs(html: str) -> tuple[str, list[dict]]:
    """Extract FAQ <details> blocks into structured data; insert a render slot."""
    faqs: list[dict] = []

    def add_from_block(block: str) -> None:
        for item in re.finditer(
            r"<details[^>]*>\s*<summary[^>]*>([\s\S]*?)</summary>\s*(?:<div class=\"faq-answer\">([\s\S]*?)</div>|(.*?))\s*</details>",
            block,
            re.I | re.S,
        ):
            q = text_clean(item.group(1))
            a_raw = (item.group(2) if item.group(2) is not None else item.group(3) or "").strip()
            a_html = rewrite_links(a_raw)
            if not a_html.startswith("<"):
                a_html = f"<p>{a_html}</p>"
            if q and text_clean(a_html):
                faqs.append({"question": q, "answerHtml": a_html})

    # 1) Balanced faq-accordion wrappers
    out_parts: list[str] = []
    pos = 0
    while True:
        m = re.search(r"<div[^>]*class=\"[^\"]*faq-accordion[^\"]*\"[^>]*>", html[pos:], re.I)
        if not m:
            out_parts.append(html[pos:])
            break
        abs_start = pos + m.start()
        out_parts.append(html[pos:abs_start])
        block = extract_balanced_div(html[abs_start:], r"<div[^>]*class=\"[^\"]*faq-accordion[^\"]*\"[^>]*>")
        if block is None:
            out_parts.append(html[abs_start:abs_start + len(m.group(0))])
            pos = abs_start + len(m.group(0))
            continue
        add_from_block(block)
        out_parts.append('<div data-blog-faq-slot="true"></div>')
        # advance past balanced div
        depth = 1
        p = html.find(">", abs_start) + 1
        lower = html.lower()
        while p < len(html) and depth > 0:
            a = lower.find("<div", p)
            b = lower.find("</div>", p)
            if b < 0:
                p = len(html)
                break
            if a >= 0 and a < b:
                if lower[a + 4 : a + 5] in (">", " ", "\n", "\t", "/"):
                    depth += 1
                p = a + 4
            else:
                depth -= 1
                if depth == 0:
                    p = b + 6
                    break
                p = b + 6
        pos = p

    html2 = "".join(out_parts)

    # 2) Any remaining loose faq-item details
    def loose_repl(m: re.Match) -> str:
        add_from_block(m.group(0))
        return ""

    html3 = re.sub(
        r"<details[^>]*class=\"[^\"]*faq-item[^\"]*\"[^>]*>[\s\S]*?</details>",
        loose_repl,
        html2,
        flags=re.I,
    )

    if faqs and 'data-blog-faq-slot="true"' not in html3:
        html3 = re.sub(
            r"(<h2[^>]*>\s*(?:FAQ'?s?|FAQs|Frequently Asked Questions)[^<]*</h2>)",
            r'\1\n<div data-blog-faq-slot="true"></div>',
            html3,
            count=1,
            flags=re.I,
        )
        if 'data-blog-faq-slot="true"' not in html3:
            html3 += '\n<div data-blog-faq-slot="true"></div>'

    # cleanup empty leftover wrappers
    html3 = re.sub(r"<div class=\"faq-accordion\">\s*</div>", "", html3, flags=re.I)

    # 3) Remaining generic <details><summary> blocks (common in WP posts)
    def generic_details_repl(m: re.Match) -> str:
        add_from_block(m.group(0))
        return ""

    before = len(faqs)
    html3 = re.sub(
        r"<details[^>]*>\s*<summary[^>]*>[\s\S]*?</summary>[\s\S]*?</details>",
        generic_details_repl,
        html3,
        flags=re.I,
    )
    if len(faqs) > before and 'data-blog-faq-slot="true"' not in html3:
        html3 += '\n<div data-blog-faq-slot="true"></div>'

    return html3, faqs


def parse_numbered_faqs(html: str) -> tuple[str, list[dict]]:
    """Convert older FAQ sections (strong numbered Q + answer) into accordion data."""
    faqs: list[dict] = []

    def section_repl(m: re.Match) -> str:
        heading = m.group(1)
        body = m.group(2)
        local: list[dict] = []
        # Pattern: <p><strong>1. Question</strong><br/>Answer</p>
        for pm in re.finditer(
            r"<p[^>]*>\s*<strong>\s*\d+\.\s*([\s\S]*?)</strong>\s*(?:<br\s*/?>)?\s*([\s\S]*?)</p>",
            body,
            re.I,
        ):
            q = text_clean(pm.group(1))
            a = pm.group(2).strip()
            a = re.sub(r"^<br\s*/?>", "", a, flags=re.I).strip()
            if q and text_clean(a):
                local.append({"question": q, "answerHtml": rewrite_links(f"<p>{a}</p>")})
        # Pattern: <h3>Q</h3><p>A</p> inside FAQ section
        if not local:
            parts = re.split(r"(<h3[^>]*>[\s\S]*?</h3>)", body, flags=re.I)
            i = 1
            while i < len(parts):
                q = text_clean(parts[i])
                ans = parts[i + 1] if i + 1 < len(parts) else ""
                a_ps = re.findall(r"<p[^>]*>([\s\S]*?)</p>", ans, re.I)
                if q and a_ps:
                    a_html = "".join(f"<p>{p}</p>" for p in a_ps)
                    local.append({"question": q, "answerHtml": rewrite_links(a_html)})
                i += 2
        if local:
            faqs.extend(local)
            return f"<h2>{heading}</h2>\n<div data-blog-faq-slot=\"true\"></div>"
        return m.group(0)

    new_html = re.sub(
        r"<h2[^>]*>\s*((?:FAQ|FAQs|Frequently Asked Questions)[^<]*)\s*</h2>([\s\S]*?)(?=<h2\b|$)",
        section_repl,
        html,
        flags=re.I,
    )
    return new_html, faqs


def enhance_markup(html: str) -> str:
    # Promote CTA anchors
    html = re.sub(
        r'class="([^"]*\bvmls-apply-cta\b[^"]*)"',
        'class="blog-cta-link"',
        html,
        flags=re.I,
    )
    html = rewrite_links(html)
    # Remove empty leftover divs, but keep FAQ render slots
    html = re.sub(
        r"<div(?![^>]*data-blog-faq-slot)[^>]*>\s*</div>",
        "",
        html,
        flags=re.I,
    )
    return html.strip()


def process_slug(slug: str, meta: dict, wp_by: dict) -> dict | None:
    live_meta = {"category": None, "author": None, "liveTitle": None, "liveDate": None}
    body = None
    source = None

    html = curl(f"https://vmls.edu.in/blogs/{slug}.html")
    if html and re.search(r"<h1", html, re.I):
        title_tag = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
        title_txt = text_clean(title_tag.group(1)) if title_tag else ""
        if "404" not in title_txt.lower():
            body, live_meta = extract_static_body(html, slug)
            source = "static"

    if (not body or len(body) < 200) and slug == "top-law-colleges-india" and "the-best-law-colleges-in-india" in wp_by:
        body = wp_by["the-best-law-colleges-in-india"]["content"]["rendered"]
        live_meta["liveTitle"] = text_clean(wp_by["the-best-law-colleges-in-india"]["title"]["rendered"])
        source = "wp-redirect"

    if (not body or len(body) < 200) and slug in wp_by:
        body = wp_by[slug]["content"]["rendered"]
        live_meta["liveTitle"] = text_clean(wp_by[slug]["title"]["rendered"])
        source = "wp-api"

    if not body or len(body) < 100:
        whtml = curl(f"https://vmls.edu.in/blog/{slug}/")
        if whtml:
            em = re.search(
                r'class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)(?:<footer|class="[^"]*entry-footer|class="[^"]*comments|id="comments")',
                whtml,
                re.I,
            )
            if em:
                body = em.group(1)
                source = "wp-html"
            h1 = re.search(r"<h1[^>]*>(.*?)</h1>", whtml, re.S | re.I)
            if h1:
                live_meta["liveTitle"] = text_clean(h1.group(1))

    if not body:
        return None

    body = strip_chrome(body)
    body, faqs1 = parse_details_faqs(body)
    body, faqs2 = parse_numbered_faqs(body)
    faqs = faqs1 + faqs2
    body = enhance_markup(body)

    # Related reads stay in HTML; ensure heading class friendly
    return {
        "slug": slug,
        "title": meta["title"],
        "date": meta["date"],
        "image": meta["image"],
        "author": live_meta.get("author") or "VMLS Editorial",
        "category": live_meta.get("category"),
        "source": source,
        "html": body,
        "faqs": faqs,
    }


def main() -> None:
    meta = listing_meta()
    slugs = list(meta.keys())
    print(f"Unique listing slugs: {len(slugs)}")
    wp_by = load_wp()
    print(f"WP posts: {len(wp_by)}")

    results: dict[str, dict] = {}
    failed: list[str] = []

    with ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(process_slug, s, meta[s], wp_by): s for s in slugs}
        for i, fut in enumerate(as_completed(futs), 1):
            slug = futs[fut]
            try:
                data = fut.result()
            except Exception as e:
                print("ERR", slug, e)
                failed.append(slug)
                continue
            if not data:
                print("FAIL", slug)
                failed.append(slug)
                continue
            results[slug] = data
            print(
                f"OK {i}/{len(slugs)} {slug} [{data['source']}] "
                f"html={len(data['html'])} faqs={len(data['faqs'])}"
            )

    # Preserve listing order
    ordered = {s: results[s] for s in slugs if s in results}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(ordered, ensure_ascii=False, indent=2))
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")
    print(f"success={len(ordered)} failed={failed}")

    # Spot-check CLAT
    clat = ordered.get("law-entrance-exams-clat-vs-vlat-comparison")
    if clat:
        print(
            "CLAT check:",
            "table" if "<table" in clat["html"] else "NO table",
            f"faqs={len(clat['faqs'])}",
            "related" if "Related Reads" in clat["html"] else "NO related",
            "cta" if "blog-cta-link" in clat["html"] or "Register" in clat["html"] else "cta?",
        )


if __name__ == "__main__":
    main()
