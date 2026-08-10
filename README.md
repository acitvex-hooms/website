# activeX Website

Marketing site for [activeX](https://activex.fit): structured training, the IQ Framework, and membership.

## Develop

```bash
npm install
cp .env.example .env   # fill keys as needed
npm run dev            # Vite (5173) + API (8787), /api proxied
```

API only: `npm run dev:api`  
Site only: `npm run dev:web`

## Build & production

```bash
npm run build
npm start              # serves dist/ + Stripe webhook + eBook download API
```

Railway should use **Build:** `npm run build` and **Start:** `npm start` (not a static-only server).

## Shop fulfillment (Stripe → email + download)

After a shop Stripe Payment Link succeeds, the server:

1. Receives `checkout.session.completed` at `POST /api/stripe/webhook`
2. Emails the customer (Google Workspace SMTP) with a **signed 7-day eBook download link** when relevant
3. Emails `SHIP_NOTIFY_EMAIL` with the shipping address for ankle strap / bundle

### One-time setup

1. **Google Workspace SMTP** — enable 2-Step Verification for the sending user, create an **App Password**, then set:
   - `SMTP_USER` (e.g. `info@activex.fit`)
   - `SMTP_PASS` (16-character app password)
   - `EMAIL_FROM` (e.g. `activeX Shop <info@activex.fit>`)
   - Defaults: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`
2. **eBook file** — add `private/bbe-ebook.pdf` to the deploy, *or* set `EBOOK_FILE_URL` to a private file URL
3. **Stripe webhook** — Developers → Webhooks → Add endpoint  
   - URL: `https://activex.fit/api/stripe/webhook`  
   - Events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`  
   - Copy signing secret → `STRIPE_WEBHOOK_SECRET`
4. **Stripe secret key** → `STRIPE_SECRET_KEY`
5. **Download signing** → set `DOWNLOAD_SECRET` to a long random string
6. **Payment Links** — success URLs:  
   - eBook → `https://activex.fit/welcome?product=bbe-ebook`  
   - Ankle → `https://activex.fit/welcome?product=bbe-ankle`  
   - Bundle → `https://activex.fit/welcome?product=bbe-bundle`  
   Enable **shipping address** on ankle + bundle
7. Optional: set `STRIPE_PRICE_EBOOK` / `ANKLE` / `BUNDLE` to Price IDs for reliable matching

### Local webhook testing

```bash
stripe listen --forward-to localhost:8787/api/stripe/webhook
npm run dev
```

Use the `whsec_...` from `stripe listen` as `STRIPE_WEBHOOK_SECRET` locally.

## Email signup (Klaviyo)

The homepage subscribe section posts to Klaviyo’s client Subscriptions API.

1. In Klaviyo: **Settings → API keys** → copy your **Public API Key** (Site ID).
2. Create or pick a list (e.g. “Website Newsletter”) and copy its **List ID**.
3. Copy `.env.example` to `.env` and fill in:

```bash
VITE_KLAVIYO_PUBLIC_KEY=your_public_key
VITE_KLAVIYO_LIST_ID=your_list_id
```

4. Restart `npm run dev`. For Railway, add the same variables on the website service, then redeploy.

Only the public key is used in the browser. Do not add a private API key.

## Google Tag Manager / Ads / Analytics

The site loads **one** Google Tag Manager container via `VITE_GTM_ID`. Put GA4 and Google Ads tags inside that GTM container (same pattern as Shopify’s GTM app).

1. In [Google Tag Manager](https://tagmanager.google.com), open your container and copy the ID (`GTM-XXXXXXX`).
2. Add to `.env` and Railway:

```bash
VITE_GTM_ID=GTM-XXXXXXX
```

3. Redeploy (Vite bakes env into the build).
4. In GTM, add/update:
   - **GA4 Configuration** tag → your Measurement ID (`G-XXXXXXXX`)
   - Trigger: **Custom Event** = `page_view` (this site pushes that on every React route change) *or* History Change
   - **Google Ads** Conversion Linker + remarketing / conversion tags as needed
5. Publish the GTM container, then verify with [Tag Assistant](https://tagassistant.google.com) on `https://activex.fit`.

## Pages

| Path | Page |
|------|------|
| `/` | Home |
| `/iq-framework` | IQ Framework |
| `/programs` | Programs |
| `/pricing` | Pricing |
| `/coaching` | Coaching |
| `/coaches` | Coach partner funnel (unlisted / noindex) |
| `/shop` | BBE eBook & ankle strap |
| `/about` | About Ana |
| `/about/hooms` | About Hooms |
| `/contact` | Contact |
