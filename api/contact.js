import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    // Check the API key before initializing Resend
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing')
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured.',
      })
    }

    const resend = new Resend(apiKey)

    const body =
      typeof req.body === 'string'
        ? JSON.parse(req.body)
        : req.body || {}

    const {
      name,
      phone,
      email,
      whatsapp,
      consent,
      updates,
      source,
      guide,
      page,
      submittedAt,
    } = body

    if (!phone || !email || consent !== 'yes') {
      return res.status(400).json({
        success: false,
        message: 'Please provide your phone, email, and consent.',
      })
    }

    if (
      typeof email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      })
    }

    const { error } = await resend.emails.send({
      from: 'Menopause India <contact@themenopauseindia.com>',
      to: ['menopauseindiaasocial@gmail.com'],
      replyTo: email,
      subject: 'New Lead - Menopause India',
      text: `
New website lead received.

Name: ${name || 'Not provided'}
Mobile: ${phone}
Email: ${email}
WhatsApp: ${whatsapp || 'Not provided'}
Contact consent: ${consent}
Newsletter updates: ${updates || 'no'}
Source: ${source || 'Not provided'}
Guide requested: ${guide || 'no'}
Page: ${page || 'Not provided'}
Submitted at: ${submittedAt || 'Not provided'}
      `,
    })

    if (error) {
      console.error('Resend error:', error)

      return res.status(500).json({
        success: false,
        message: 'Could not send your submission.',
      })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)

    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    })
  }
}