import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, projectType, budget, timeline, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the data (temporary - will connect to email service later)
    console.log('New Contact Form Submission:', {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
    })

    // TODO: Implement actual email sending with EmailJS or Resend
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully! (Check console for data)' 
    })

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}