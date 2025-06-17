import type { NextApiRequest, NextApiResponse } from 'next'

type SubscribeData = {
  email: string
}

type ResponseData = {
  success: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const { email } = req.body as SubscribeData

    // Basic validation
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' })
    }

    // In a real implementation, you would:
    // 1. Store the email in a database
    // 2. Add the email to a newsletter service like Mailchimp, SendGrid, etc.
    // 3. Possibly send a confirmation email
    
    // For now, we'll just simulate success
    console.log('New subscription:', email)

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Subscription successful! Thank you for subscribing.' 
    })
    
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your subscription' 
    })
  }
}
