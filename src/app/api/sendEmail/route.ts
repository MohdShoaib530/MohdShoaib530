import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: email,
      to: 'mohdshoaib91530@gmail.com',
      subject: 'My First Email for job',
      html: `<p>Hi, my name is <strong>${name}</strong>, and my message for you is <strong>${message}</strong>!</p>`
    });

    console.log('Email sent:', response);

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
