import { NextResponse } from 'next/server';
import { isValidEmail, normalizeEmail } from '@/lib/validate';
import { getDatabase, insertWaitlistEmail, findWaitlistEmail, isUniqueConstraintError } from '@/lib/db';

export const runtime = 'edge';

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Request body must be valid JSON.' },
      { status: 400 }
    );
  }

  const rawEmail = body && typeof body.email === 'string' ? body.email : '';

  if (!isValidEmail(rawEmail)) {
    return NextResponse.json(
      { success: false, error: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }

  const email = normalizeEmail(rawEmail);

  let db;
  try {
    db = getDatabase();
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'The waitlist service is not configured. Bind a D1 database named DB to enable it.'
      },
      { status: 503 }
    );
  }

  try {
    const existing = await findWaitlistEmail(db, email);
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'This email is already on the waitlist.' },
        { status: 409 }
      );
    }

    await insertWaitlistEmail(db, email);

    return NextResponse.json(
      { success: true, message: 'You are on the waitlist. We will be in touch soon.' },
      { status: 201 }
    );
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      return NextResponse.json(
        { success: false, error: 'This email is already on the waitlist.' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
