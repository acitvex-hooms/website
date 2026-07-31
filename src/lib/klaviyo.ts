const PUBLIC_KEY = import.meta.env.VITE_KLAVIYO_PUBLIC_KEY as string | undefined;
const LIST_ID = import.meta.env.VITE_KLAVIYO_LIST_ID as string | undefined;
const REVISION = "2026-07-15";

export type SubscribeResult =
  | { ok: true }
  | { ok: false; message: string };

export function isKlaviyoConfigured(): boolean {
  return Boolean(PUBLIC_KEY?.trim() && LIST_ID?.trim());
}

/** Subscribe an email to the configured Klaviyo list (client-side, public key only). */
export async function subscribeToKlaviyo(input: {
  email: string;
  firstName?: string;
}): Promise<SubscribeResult> {
  const email = input.email.trim();
  if (!email) {
    return { ok: false, message: "Please enter your email address." };
  }
  if (!PUBLIC_KEY?.trim() || !LIST_ID?.trim()) {
    return {
      ok: false,
      message: "Email signup is temporarily unavailable. Please try again later.",
    };
  }

  const attributes: Record<string, unknown> = {
    email,
    subscriptions: {
      email: {
        marketing: {
          consent: "SUBSCRIBED",
        },
      },
    },
  };

  const firstName = input.firstName?.trim();
  if (firstName) {
    attributes.first_name = firstName;
  }

  try {
    const res = await fetch(
      `https://a.klaviyo.com/client/subscriptions/?company_id=${encodeURIComponent(PUBLIC_KEY)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Revision: REVISION,
        },
        body: JSON.stringify({
          data: {
            type: "subscription",
            attributes: {
              custom_source: "Homepage email signup",
              profile: {
                data: {
                  type: "profile",
                  attributes,
                },
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: LIST_ID,
                },
              },
            },
          },
        }),
      },
    );

    // Klaviyo returns 202 Accepted on success
    if (res.status === 202 || res.ok) {
      return { ok: true };
    }

    return {
      ok: false,
      message: "Something went wrong. Please check your email and try again.",
    };
  } catch {
    return {
      ok: false,
      message: "Unable to connect. Please check your connection and try again.",
    };
  }
}
