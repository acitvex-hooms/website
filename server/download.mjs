import { createHmac, timingSafeEqual } from "node:crypto";
import { createReadStream, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LOCAL_PDF = join(ROOT, "private", "bbe-ebook.pdf");

const DEFAULT_TTL_SEC = 60 * 60 * 24 * 7; // 7 days

function secret() {
  const s = process.env.DOWNLOAD_SECRET || process.env.STRIPE_WEBHOOK_SECRET;
  if (!s) throw new Error("DOWNLOAD_SECRET (or STRIPE_WEBHOOK_SECRET) is required");
  return s;
}

function siteUrl() {
  return (process.env.SITE_URL || "https://activex.fit").replace(/\/$/, "");
}

/**
 * @param {{ sessionId: string, email: string, ttlSec?: number }} opts
 */
export function createDownloadToken({ sessionId, email, ttlSec = DEFAULT_TTL_SEC }) {
  const exp = Math.floor(Date.now() / 1000) + ttlSec;
  const payload = `${sessionId}:${email.toLowerCase()}:${exp}`;
  const sig = createHmac("sha256", secret()).update(payload).digest("base64url");
  return Buffer.from(`${payload}:${sig}`).toString("base64url");
}

export function downloadUrlFor(token) {
  return `${siteUrl()}/api/download/ebook?token=${encodeURIComponent(token)}`;
}

/**
 * @param {string} token
 * @returns {{ sessionId: string, email: string, exp: number } | null}
 */
export function verifyDownloadToken(token) {
  try {
    const raw = Buffer.from(token, "base64url").toString("utf8");
    const parts = raw.split(":");
    if (parts.length !== 4) return null;
    const [sessionId, email, expStr, sig] = parts;
    const exp = Number(expStr);
    if (!sessionId || !email || !Number.isFinite(exp)) return null;
    if (exp < Math.floor(Date.now() / 1000)) return null;

    const payload = `${sessionId}:${email}:${exp}`;
    const expected = createHmac("sha256", secret()).update(payload).digest("base64url");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

    return { sessionId, email, exp };
  } catch {
    return null;
  }
}

/**
 * Stream the ebook PDF to the response body.
 * @returns {Promise<{ stream: Readable, contentLength?: number, filename: string }>}
 */
export async function openEbookFile() {
  const remote = (process.env.EBOOK_FILE_URL || "").trim();
  if (remote) {
    const res = await fetch(remote);
    if (!res.ok) {
      throw new Error(`Failed to fetch EBOOK_FILE_URL (${res.status})`);
    }
    const length = res.headers.get("content-length");
    return {
      stream: Readable.fromWeb(res.body),
      contentLength: length ? Number(length) : undefined,
      filename: "BBE-eBook.pdf",
    };
  }

  if (!existsSync(LOCAL_PDF)) {
    throw new Error(
      "eBook file missing. Add private/bbe-ebook.pdf or set EBOOK_FILE_URL.",
    );
  }

  return {
    stream: createReadStream(LOCAL_PDF),
    filename: "BBE-eBook.pdf",
  };
}
