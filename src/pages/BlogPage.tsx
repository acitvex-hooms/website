import { Link } from "react-router-dom";
import { formatPostDate, getAllPosts } from "../lib/blog";
import { C, PAGE_PATHS } from "../lib/tokens";
import { Pill, Reveal, Sec } from "../components/ui";

export function BlogPage() {
  const posts = getAllPosts();

  return (
    <Sec style={{ paddingTop: 80 }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Pill>Blog</Pill>
          <h1
            className="page-title"
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: C.navy,
              letterSpacing: -2,
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            Training, movement & mindset.
          </h1>
          <p
            style={{
              fontSize: 18,
              color: C.textMid,
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Practical writing on the IQ Framework, programming, and how to train
            with more intention.
          </p>
        </div>
      </Reveal>

      {posts.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: C.textMid,
            fontSize: 16,
          }}
        >
          New posts coming soon.
        </p>
      ) : (
        <div
          className="auto-grid-blog"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                to={`${PAGE_PATHS.blog}/${post.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                  background: C.offWhite,
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                  overflow: "hidden",
                  color: "inherit",
                }}
              >
                {post.cover && (
                  <div
                    style={{
                      aspectRatio: "16 / 9",
                      overflow: "hidden",
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
                )}
                <div
                  style={{
                    padding: 28,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      color: C.textLight,
                      marginBottom: 10,
                    }}
                  >
                    {formatPostDate(post.date)}
                    <span style={{ margin: "0 8px", opacity: 0.5 }}>·</span>
                    {post.author}
                  </div>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: C.navy,
                      letterSpacing: -0.5,
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 15,
                      color: C.textMid,
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    style={{
                      marginTop: 20,
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.purple,
                    }}
                  >
                    Read more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </Sec>
  );
}
