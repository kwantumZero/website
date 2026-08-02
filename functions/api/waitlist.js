export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { email } = await request.json();
    const normalized = email?.trim().toLowerCase();

    if (
      !normalized ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)
    ) {
      return Response.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at TEXT NOT NULL
      )
    `).run();

    const exists = await env.DB.prepare(
      "SELECT id FROM waitlist WHERE email=?"
    )
      .bind(normalized)
      .first();

    if (exists) {
      return Response.json({
        ok: true,
        message: "Already registered",
      });
    }

    await env.DB.prepare(
      "INSERT INTO waitlist(email, created_at) VALUES (?, ?)"
    )
      .bind(normalized, new Date().toISOString())
      .run();

    return Response.json({
      ok: true,
      email: normalized,
    });

  } catch (e) {
    return Response.json(
      { error: e.message },
      { status: 500 }
    );
  }
}