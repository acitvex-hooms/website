# How to add a blog post

1. Copy `_template.md` and create a **new file** with a `.md` ending.
   Example: `why-mobility-matters.md`
   The filename **must** end in `.md` or the post will not appear.
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
| `cover` | No | Image path from `public/images/`, e.g. `/images/feature-1.jpg` (do **not** include `/public`) |

## Markdown tips

- Use `#` for the main title only in the `title` field — start body with paragraphs or `##` headings
- `**bold**`, `*italic*`, lists, links, and images all work
- Images: put files in `public/images/`, then reference as `/images/your-image.jpg`
- Use hyphens in filenames, not spaces: `my-cover.jpg` not `my cover.jpg`
- Never write `/public/images/...` — drop the `public` part

## URL

File `why-mobility-matters.md` → page `/blog/why-mobility-matters`
