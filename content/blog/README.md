# How to add a blog post

1. Copy `_template.md` and rename it (use lowercase words and hyphens).
   Example: `why-mobility-matters.md`
2. Fill in the fields between the `---` lines at the top.
3. Write the post in Markdown below those lines.
4. Commit and deploy — the post appears on `/blog` automatically.

## Frontmatter fields

| Field | Required | Notes |
| --- | --- | --- |
| `title` | Yes | Post title |
| `date` | Yes | `YYYY-MM-DD` (e.g. `2026-07-30`) |
| `excerpt` | Yes | Short summary for the listing page |
| `author` | No | Defaults to `activeX` |
| `cover` | No | Image path, e.g. `/images/feature-1.jpg` |

## Markdown tips

- Use `#` for the main title only in the `title` field — start body with paragraphs or `##` headings
- `**bold**`, `*italic*`, lists, links, and images all work
- Images: `![Alt text](/images/your-image.jpg)` — put image files in `public/images/`

## URL

File `why-mobility-matters.md` → page `/blog/why-mobility-matters`
