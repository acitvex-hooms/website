import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  getSeoForPath,
} from "../lib/seo";

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

/** Updates document title and social/SEO meta tags on every route change. */
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const url = absoluteUrl(seo.path);
    const image = seo.ogImage ?? DEFAULT_OG_IMAGE;
    const robots = seo.robots ?? "index, follow";

    document.title = seo.title;

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "author", "activeX LLC FZ");
    upsertMeta("name", "theme-color", "#272789");

    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:type", seo.ogType ?? "website");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", seo.title);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", image);

    upsertLink("canonical", url);

    if (pathname === "/") {
      upsertJsonLd("ld-organization", {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "activeX",
        legalName: "activeX LLC FZ",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-black.png`,
        email: "info@activex.fit",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        sameAs: [
          "https://www.instagram.com/_active_x_/",
          "https://www.youtube.com/@active_x_fitness",
          "https://www.tiktok.com/@_active_x_",
        ],
      });
      upsertJsonLd("ld-website", {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "activeX",
        url: SITE_URL,
        description: seo.description,
        publisher: { "@type": "Organization", name: "activeX" },
      });
      upsertJsonLd("ld-software", {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "activeX",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        offers: {
          "@type": "Offer",
          price: "24.99",
          priceCurrency: "USD",
        },
        description: seo.description,
        url: SITE_URL,
      });
    } else {
      removeJsonLd("ld-organization");
      removeJsonLd("ld-website");
      removeJsonLd("ld-software");
    }

    if (pathname === "/coaching") {
      upsertJsonLd("ld-service", {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "activeX 1-on-1 Online Coaching",
        provider: { "@type": "Organization", name: "activeX" },
        description: seo.description,
        areaServed: "Worldwide",
        url: absoluteUrl("/coaching"),
      });
    } else {
      removeJsonLd("ld-service");
    }

    if (pathname.startsWith("/blog/") && seo.ogType === "article") {
      upsertJsonLd("ld-article", {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: seo.title.replace(/ \| activeX Blog$/, ""),
        description: seo.description,
        image: image,
        url,
        publisher: {
          "@type": "Organization",
          name: "activeX",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo-black.png`,
          },
        },
      });
    } else {
      removeJsonLd("ld-article");
    }
  }, [pathname]);

  return null;
}
