import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with Resend, SendGrid, or AWS SES
    // Example (Resend):
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@mommentx.space',
    //   subject: `New Lead: ${data.name}`,
    //   text: data.message,
    // });

    console.log("Contact form submission received:", data);

    // Simulate network delay for UI feedback
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: 'Message received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
