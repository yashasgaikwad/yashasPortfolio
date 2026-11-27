/**
 * Optional serverless contact endpoint (compatible with Vercel / Edge / Web Fetch API).
 * Set RESEND_API_KEY and CONTACT_TO_EMAIL in deployment environment variables,
 * and set VITE_CONTACT_ENDPOINT=/api/contact in .env.
 */
interface ContactPayload {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as ContactPayload;
    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!fullName || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !toEmail) {
      return Response.json(
        {
          error:
            "Server email provider is not configured (set RESEND_API_KEY and CONTACT_TO_EMAIL).",
        },
        { status: 503 }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `Name: ${fullName}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      return Response.json(
        { error: "Upstream email provider rejected the request." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ error: "Invalid request payload." }, { status: 400 });
  }
}

