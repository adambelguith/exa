import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend("re_HLTVAzKp_5QSxJySebmi6CMuofMfuFSNe");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, formation, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'EXSA Contact Form <onboarding@resend.dev>',
      to: 'exsaformation@gmail.com',
      replyTo: email,
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #265b8f;">Nouveau message de contact</h2>
          
          <div style="background-color: #ecf6fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            ${formation ? `<p><strong>Service d'intérêt:</strong> ${formation}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #46c0b5;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #666; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact du site EXSA.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
