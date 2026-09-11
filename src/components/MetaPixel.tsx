import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  META_PIXEL_ID,
  ensureMetaPixel,
  isStripeCheckoutHref,
  tallyLeadName,
  trackInitiateCheckout,
  trackLead,
  trackPageView,
  trackWelcomePurchase,
} from "../lib/metaPixel";

function stripeHrefFromEvent(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) return null;
  const anchor = target.closest("a");
  const href = anchor?.href;
  if (!href || !isStripeCheckoutHref(href)) return null;
  return href;
}

/**
 * Loads the Meta Pixel and fires SPA PageView, InitiateCheckout (Stripe
 * Payment Links), Purchase (/welcome and /welcome-challenge), and Lead
 * (Tally + contact form).
 */
export function MetaPixel() {
  const location = useLocation();
  const skipFirstPageView = useRef(false);

  useEffect(() => {
    if (!META_PIXEL_ID) return;
    skipFirstPageView.current = ensureMetaPixel(META_PIXEL_ID);
  }, []);

  useEffect(() => {
    if (!META_PIXEL_ID) return;
    if (skipFirstPageView.current) {
      skipFirstPageView.current = false;
    } else {
      trackPageView();
    }
    if (location.pathname === "/welcome") {
      trackWelcomePurchase(location.search);
    }
    if (location.pathname === "/welcome-challenge") {
      trackWelcomePurchase("?product=8-week-challenge");
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!META_PIXEL_ID) return;

    const onClick = (event: MouseEvent) => {
      const href = stripeHrefFromEvent(event.target);
      if (href) trackInitiateCheckout(href);
    };

    const onMessage = (event: MessageEvent) => {
      const data = event.data as {
        event?: string;
        formId?: string;
        payload?: { id?: string; formId?: string };
      } | undefined;
      if (data?.event !== "Tally.FormSubmitted") return;
      const formId =
        data.payload?.formId || data.payload?.id || data.formId;
      trackLead(tallyLeadName(formId));
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return null;
}
