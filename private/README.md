# Private fulfillment files

Place the BBE eBook PDF here as:

```text
private/bbe-ebook.pdf
```

This file is not publicly browsable. Customers only receive a time-limited signed download link after Stripe checkout.

Alternatively, set `EBOOK_FILE_URL` on Railway to a private URL the server can fetch (never expose that URL in the frontend).
