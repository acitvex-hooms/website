# activeX Website

Marketing site for [activeX](https://activex.fit): structured training, the IQ Framework, and membership.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

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

## Pages

| Path | Page |
|------|------|
| `/` | Home |
| `/iq-framework` | IQ Framework |
| `/programs` | Programs |
| `/pricing` | Pricing |
| `/coaching` | Coaching |
| `/about` | About Ana |
| `/about/hooman` | About Hooman |
| `/contact` | Contact |
