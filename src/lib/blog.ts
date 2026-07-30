import { marked } from "marked";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  cover?: string;
};

export type BlogPost = BlogPostMeta & {
  html: string;
};

type Frontmatter = {
  title?: string;
  date?: string;
  excerpt?: string;
  author?: string;
  cover?: string;
};

const rawModules = import.meta.glob("../../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };

  const data: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (
      key === "title" ||
      key === "date" ||
      key === "excerpt" ||
      key === "author" ||
      key === "cover"
    ) {
      data[key] = value;
    }
  }

  return { data, body: match[2].trim() };
}

function slugFromPath(path: string) {
  const file = path.split("/").pop() ?? path;
  return file.replace(/\.md$/, "");
}

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

marked.setOptions({ gfm: true, breaks: false });

function loadPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, raw] of Object.entries(rawModules)) {
    const slug = slugFromPath(path);
    if (slug.toLowerCase() === "readme" || slug.startsWith("_")) continue;

    const { data, body } = parseFrontmatter(raw);
    if (!data.title || !data.date) continue;

    posts.push({
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt ?? "",
      author: data.author ?? "activeX",
      cover: data.cover,
      html: marked.parse(body, { async: false }) as string,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

const posts = loadPosts();

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return formatDate(iso);
}
