import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const GTM_ID = (import.meta.env.VITE_GTM_ID as string | undefined)?.trim();

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
}

/** Install GTM once (same snippet Google provides). */
function ensureGtm(containerId: string) {
  if (document.getElementById("gtm-script")) return;

  ensureDataLayer();
  window.dataLayer!.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`;
  document.head.appendChild(script);

  if (!document.getElementById("gtm-noscript")) {
    const noscript = document.createElement("noscript");
    noscript.id = "gtm-noscript";
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(containerId)}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    iframe.title = "Google Tag Manager";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  }
}

/**
 * Loads Google Tag Manager and pushes SPA page views on route changes.
 * Configure GA4 + Google Ads tags inside the GTM container (not here).
 */
export function GoogleTags() {
  const location = useLocation();

  useEffect(() => {
    if (!GTM_ID) return;
    ensureGtm(GTM_ID);
  }, []);

  useEffect(() => {
    if (!GTM_ID) return;
    ensureDataLayer();
    window.dataLayer!.push({
      event: "page_view",
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
