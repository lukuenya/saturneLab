import { NextApiRequest, NextApiResponse } from 'next'

interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, company, subject, message }: ContactFormData = req.body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        errors: {
          name: !name ? 'Name is required' : undefined,
          email: !email ? 'Email is required' : undefined,
          subject: !subject ? 'Subject is required' : undefined,
          message: !message ? 'Message is required' : undefined,
        }
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format',
        errors: { email: 'Please enter a valid email address' }
      })
    }

    // Message length validation
    if (message.length < 10) {
      return res.status(400).json({ 
        message: 'Message too short',
        errors: { message: 'Message must be at least 10 characters long' }
      })
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Mailgun, or AWS SES
    // 2. Store the message in a database
    // 3. Send notifications to your team
    
    // For now, we'll just log the message and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // TODO: Implement actual email sending
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: 'contact@saturnelab.com',
      from: 'noreply@saturnelab.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }
    
    await sgMail.send(msg)
    */

    return res.status(200).json({ 
      message: 'Message sent successfully',
      success: true 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ 
      message: 'Internal server error',
      success: false 
    })
  }
}
