import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRealIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const real = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (real) {
    return real.trim()
  }
  
  return 'unknown'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const maxAttempts = 3
  
  const current = rateLimitStore.get(ip)
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (current.count >= maxAttempts) {
    return false
  }
  
  current.count += 1
  return true
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  
  // Development mode fallback
  if (!secretKey || secretKey === 'your-secret-key-here') {
    return token === 'dev-mode-token'
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
        remoteip: ip,
      }),
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = getRealIP(request)
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, company, message, turnstileToken, honeypot } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    // Turnstile verification
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Bitte bestätigen Sie die Captcha-Verifizierung.' },
        { status: 400 }
      )
    }

    const isTurnstileValid = await verifyTurnstile(turnstileToken, ip)
    if (!isTurnstileValid) {
      return NextResponse.json(
        { error: 'Captcha-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut.' },
        { status: 400 }
      )
    }

    // Honeypot check (hidden field should be empty)
    if (honeypot) {
      return NextResponse.json(
        { error: 'Spam erkannt.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const emailContent = `
Neue Kontaktanfrage von der Website:

Name: ${name}
E-Mail: ${email}
${company ? `Unternehmen: ${company}` : ''}

Nachricht:
${message}

---
Gesendet über das Kontaktformular von beaible-consulting.de
IP-Adresse: ${ip}
Zeitstempel: ${new Date().toLocaleString('de-DE')}
    `.trim()

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: 'c.klose@beaible.de',
        subject: `Neue Kontaktanfrage von ${name}`,
        text: emailContent,
        replyTo: email,
      })

      return NextResponse.json({
        success: true,
        message: 'Vielen Dank für Ihre Nachricht! Ich melde mich bald bei Ihnen zurück.'
      })
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      return NextResponse.json(
        { error: 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}