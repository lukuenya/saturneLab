import React, { useState } from 'react'
import Layout from '@/components/Layout'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: "Email Us",
      content: "contact@saturnelab.cd",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: "Call Us",
      content: "+243 XXX XXX XXX",
      description: "Monday to Friday, 9AM to 6PM (CAT)"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: "Visit Us",
      content: "Kinshasa, DRC",
      description: "Schedule a meeting at our office"
    }
  ]

  const services = [
    "Data Collection & Analysis",
    "Predictive Modeling",
    "Business Intelligence",
    "Machine Learning Implementation",
    "Data Visualization",
    "Training & Workshops",
    "Academic Partnerships",
    "Custom Analytics Solutions"
  ]

  return (
    <Layout
      title="Contact Us - Saturne Lab"
      description="Get in touch with Saturne Lab for data science consulting, training, and partnership opportunities. We're here to help transform your organization through data."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Ready to transform your organization through data? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                  {info.content}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-green-700 dark:text-green-300">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-3" />
                  <span className="text-red-700 dark:text-red-300">
                    Sorry, there was an error sending your message. Please try again.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
                        errors.name ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
                        errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
                      errors.subject ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Data Science Consultation</option>
                    <option value="training">Training & Workshops</option>
                    <option value="partnership">Academic Partnership</option>
                    <option value="project">Custom Project</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
                      errors.message ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                    placeholder="Tell us about your project or how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Services & Info */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                How We Can Help
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    Our Services
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                        <span className="text-neutral-600 dark:text-neutral-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                    Why Choose Saturne Lab?
                  </h3>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                    <li>• Local expertise with global standards</li>
                    <li>• Proven track record in DRC market</li>
                    <li>• End-to-end data science solutions</li>
                    <li>• Capacity building and knowledge transfer</li>
                    <li>• Ongoing support and consultation</li>
                  </ul>
                </div>

                <div className="bg-secondary-50 dark:bg-secondary-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                    Response Time
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    We typically respond to all inquiries within 24 hours. For urgent matters, 
                    please call us directly at +243 XXX XXX XXX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
