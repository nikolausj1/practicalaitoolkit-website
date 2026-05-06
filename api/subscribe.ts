import { Redis } from '@upstash/redis';

export const config = { runtime: 'edge' };

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405);
  }

  let email: unknown;
  try {
    const body = await req.json();
    email = body?.email;
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  if (typeof email !== 'string' || email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ error: 'invalid_email' }, 400);
  }

  const normalized = email.trim().toLowerCase();
  const ts = new Date().toISOString();

  await redis.hset(`subscriber:${normalized}`, { email: normalized, subscribed_at: ts });
  await redis.sadd('subscribers', normalized);

  return json({ ok: true });
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
