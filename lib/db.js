import { getRequestContext } from '@cloudflare/next-on-pages';

export function getDatabase() {
  const { env } = getRequestContext();
  const db = env && env.DB;
  if (!db) {
    throw new Error('D1_BINDING_MISSING');
  }
  return db;
}

export async function insertWaitlistEmail(db, email) {
  const statement = db
    .prepare('INSERT INTO waitlist (email, created_at) VALUES (?1, ?2)')
    .bind(email, new Date().toISOString());

  return statement.run();
}

export async function findWaitlistEmail(db, email) {
  const statement = db
    .prepare('SELECT id FROM waitlist WHERE email = ?1 LIMIT 1')
    .bind(email);

  return statement.first();
}

export function isUniqueConstraintError(error) {
  return Boolean(error && typeof error.message === 'string' && error.message.includes('UNIQUE'));
}
