import { useState } from "react";
import { SHOP_PRODUCTS, shopBuyHref, type ShopProduct } from "../lib/shop";
import { C } from "../lib/tokens";
import { CTA, Pill, Reveal, Sec } from "../components/ui";

const FAQ = [
  {
    q: "How do I get the eBook after I buy?",
    a: "After Stripe checkout, you’ll land on a confirmation page and we’ll email the BBE eBook to the address you used at purchase. Check spam if you don’t see it within a few minutes.",
  },
  {
    q: "Where do you ship the ankle strap?",
    a: "Ankle straps ship within 2 business days. Enter your shipping address at Stripe checkout. We’ll confirm dispatch by email.",
  },
  {
    q: "Is the bundle cheaper than buying separately?",
    a: "Yes. The eBook + Ankle Strap bundle is $136 versus $60 + $81 if bought separately.",
  },
  {
    q: "Do I need an activeX membership for these?",
    a: "No. The BBE eBook and ankle strap are standalone products. Membership and coaching are separate if you want the full activeX app later.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: C.navy,
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            fontSize: 22,
            fontWeight: 400,
            color: C.purple,
            lineHeight: 1,
          }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p
          style={{
            fontSize: 15,
            color: C.textMid,
            lineHeight: 1.7,
            margin: "0 0 20px",
            maxWidth: 640,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

function ProductCard({ product, delay }: { product: ShopProduct; delay: number }) {
  const href = shopBuyHref(product);
  const viaStripe = Boolean(product.stripeUrl);

  return (
    <Reveal
      delay={delay}
      className={`shop-card-wrap${product.featured ? " is-featured" : ""}`}
      style={{ height: "100%" }}
    >
      <article
        className={`shop-card${product.featured ? " is-featured" : ""}`}
        style={{
          background: C.white,
          borderRadius: 20,
          border: product.featured
            ? `2px solid ${C.purple}`
            : `1px solid ${C.border}`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxShadow: product.featured
            ? "0 16px 40px rgba(120,40,255,0.12)"
            : "none",
        }}
      >
        <div className="shop-card-media">
          <img
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className="shop-card-body"
          style={{
            padding: "28px 24px 32px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: product.featured ? C.purple : C.textLight,
              }}
            >
              {product.tag}
            </span>
            <div style={{ textAlign: "right" }}>
              {product.compareAt && (
                <span
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: C.textLight,
                    textDecoration: "line-through",
                  }}
                >
                  {product.compareAt}
                </span>
              )}
              <strong
                className="shop-card-price"
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: C.navy,
                  letterSpacing: -0.5,
                }}
              >
                {product.price}
              </strong>
            </div>
          </div>
          <h2
            className="shop-card-title"
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: C.navy,
              letterSpacing: -0.8,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h2>
          <p
            style={{
              fontSize: 15,
              color: C.textMid,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {product.blurb}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "8px 0 0",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              flex: 1,
            }}
          >
            {product.points.map((point) => (
              <li
                key={point}
                style={{
                  fontSize: 14,
                  color: C.textMid,
                  lineHeight: 1.45,
                  paddingLeft: 18,
                  position: "relative",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 7,
                    width: 6,
                    height: 6,
                    borderRadius: 2,
                    background: C.purple,
                  }}
                />
                {point}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 16 }}>
            <CTA
              href={href}
              style={{ width: "100%", justifyContent: "center" }}
            >
              {viaStripe ? product.cta : `Email to buy · ${product.price}`}
            </CTA>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ShopPage() {
  return (
    <>
      <Sec style={{ paddingTop: 80 }} className="shop-hero-sec">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <Pill>Shop</Pill>
            <h1
              className="page-title"
              style={{
                fontSize: "clamp(30px, 8vw, 48px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -2,
                marginTop: 16,
                marginBottom: 16,
                lineHeight: 1.1,
              }}
            >
              BBE tools for serious glute training
            </h1>
            <p
              className="shop-hero-copy"
              style={{
                fontSize: 18,
                color: C.textMid,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Ana’s BBE eBook and Brazilian-made ankle strap — buy on their own
              or as a bundle. Secure checkout with Stripe.
            </p>
          </div>
        </Reveal>
      </Sec>

      <Sec bg={C.offWhite} className="shop-products-sec">
        <div className="shop-grid">
          {SHOP_PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 0.08} />
          ))}
        </div>
      </Sec>

      <Sec>
        <Reveal>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <Pill>FAQ</Pill>
            <h2
              className="section-title"
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: C.navy,
                letterSpacing: -1.5,
                marginTop: 16,
                marginBottom: 28,
              }}
            >
              Shopping questions
            </h2>
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Reveal>
      </Sec>
    </>
  );
}
