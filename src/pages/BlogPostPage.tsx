import { Link, Navigate, useParams } from "react-router-dom";
import { formatPostDate, getPostBySlug } from "../lib/blog";
import { C, PAGE_PATHS } from "../lib/tokens";
import { CTA, Reveal, Sec } from "../components/ui";

export function BlogPostPage() {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to={PAGE_PATHS.blog} replace />;
  }

  return (
    <>
      <Sec className="sec-page-hero sec-pb-24">
        <Reveal>
          <Link
            to={PAGE_PATHS.blog}
            style={{
              display: "inline-block",
              fontSize: 14,
              fontWeight: 600,
              color: C.purple,
              textDecoration: "none",
              marginBottom: 28,
            }}
          >
            ← All posts
          </Link>
          <div
            style={{
              fontSize: 14,
              color: C.textLight,
              marginBottom: 16,
            }}
          >
            {formatPostDate(post.date)}
            <span style={{ margin: "0 8px", opacity: 0.5 }}>·</span>
            {post.author}
          </div>
          <h1
            className="page-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              maxWidth: 800,
              marginBottom: 20,
            }}
          >
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="page-lede" style={{ margin: 0, maxWidth: 640 }}>
              {post.excerpt}
            </p>
          )}
        </Reveal>
      </Sec>

      {post.cover && (
        <Sec className="sec-pt-0 sec-pb-24">
          <Reveal>
            <div
              className="blog-cover"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                aspectRatio: "21 / 9",
                background: C.lightGray,
              }}
            >
              <img
                src={post.cover}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Reveal>
        </Sec>
      )}

      <Sec className="sec-pt-16">
        <Reveal>
          <article
            className="blog-prose"
            style={{ maxWidth: 720 }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Reveal>
      </Sec>

      <Sec bg={C.offWhite} className="sec-cta" style={{ textAlign: "center" }}>
        <Reveal>
          <h2
            className="section-title"
            style={{
              fontWeight: 800,
              color: C.navy,
              marginBottom: 12,
            }}
          >
            Ready to train with structure?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: C.textMid,
              maxWidth: 440,
              margin: "0 auto 24px",
              lineHeight: 1.7,
            }}
          >
            Full access to every program, the exercise library, and tracking
            tools — one membership.
          </p>
          <CTA to={PAGE_PATHS.pricing}>Join activeX</CTA>
        </Reveal>
      </Sec>
    </>
  );
}
