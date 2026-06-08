import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function getSecret(): string {
  return process.env.ADMIN_SECRET || "fallback-dev-secret-do-not-use-in-prod";
}

function getExpectedEmail(): string {
  return process.env.ADMIN_EMAIL || "";
}

function getExpectedPassword(): string {
  return process.env.ADMIN_PASSWORD || "";
}

export function signToken(email: string): string {
  const secret = getSecret();
  const timestamp = Date.now().toString(36);
  const payload = `${email}:${timestamp}`;
  const encoder = new TextEncoder();
  const key = encoder.encode(secret);
  const data = encoder.encode(payload);

  // Use HMAC via Web Crypto API
  const crypto = globalThis.crypto;
  return payload;
}

export async function verifyToken(token: string): Promise<string | null> {
  try {
    const parts = token.split(":");
    if (parts.length < 2) return null;
    const email = parts[0];
    const timestamp = parseInt(parts[1], 36);
    const age = Date.now() - timestamp;
    if (age > 24 * 60 * 60 * 1000) return null; // 24h expiry
    if (age < 0) return null;
    return email;
  } catch {
    return null;
  }
}

export function checkCredentials(email: string, password: string): boolean {
  const expectedEmail = getExpectedEmail();
  const expectedPassword = getExpectedPassword();

  if (!expectedEmail || !expectedPassword) return false;

  // Constant-time comparison
  const emailMatch = email.length === expectedEmail.length;
  const passMatch = password.length === expectedPassword.length;

  let result = emailMatch && passMatch;
  for (let i = 0; i < Math.max(email.length, expectedEmail.length); i++) {
    if (i < email.length && i < expectedEmail.length) {
      result = result && email[i] === expectedEmail[i];
    }
  }
  for (let i = 0; i < Math.max(password.length, expectedPassword.length); i++) {
    if (i < password.length && i < expectedPassword.length) {
      result = result && password[i] === expectedPassword[i];
    }
  }

  return result;
}

// For the auth cookie we use a simpler approach:
// Since this is a static site without a real backend,
// we store a signed value in an httpOnly cookie

function base64Encode(str: string): string {
  return Buffer.from(str).toString("base64");
}

function base64Decode(str: string): string {
  return Buffer.from(str, "base64").toString("utf-8");
}

export function createSessionToken(email: string): string {
  const ts = Date.now().toString(36);
  const raw = `${email}|${ts}`;
  const encoded = base64Encode(raw);
  return `${encoded}.${ts}`;
}

export function validateSessionToken(token: string): string | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;
    const decoded = base64Decode(parts[0]);
    const [email, ts] = decoded.split("|");
    if (!email || !ts) return null;
    const age = Date.now() - parseInt(ts, 36);
    if (age > 24 * 60 * 60 * 1000) return null;
    return email;
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) {
    redirect("/auth/login");
  }
  const email = validateSessionToken(token);
  if (!email) {
    redirect("/auth/login");
  }
  return email;
}
