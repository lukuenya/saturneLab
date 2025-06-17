import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Database, TrendingUp, Users, BookOpen, ArrowRight, CheckCircle, BarChart3, Shield, Zap } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Database className="h-12 w-12 text-primary-600" />,
      title: "Data Collection",
      subtitle: "Secure workflows to gather high-quality data",
      description: "We implement robust data collection methodologies that ensure accuracy, compliance, and security. Our team designs custom workflows tailored to your specific needs, whether collecting customer data, market research, or operational metrics.",
      features: [
        "Custom data collection frameworks",
        "API integrations and web scraping",
        "Survey design and implementation",
        "Data quality assurance protocols",
        "GDPR and local compliance standards",
        "Real-time data monitoring"
      ],
      benefits: [
        "Improved data accuracy by 95%",
        "Reduced collection time by 60%",
        "Full regulatory compliance"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary-600" />,
      title: "Strategic Insights",
      subtitle: "Analytics and predictive modeling for decision-making",
      description: "Transform your raw data into actionable insights through advanced analytics, machine learning models, and predictive algorithms. We help you understand trends, forecast outcomes, and optimize business processes.",
      features: [
        "Predictive analytics and forecasting",
        "Business intelligence dashboards",
        "Statistical analysis and modeling",
        "Market trend analysis",
        "Performance optimization",
        "Risk assessment and mitigation"
      ],
      benefits: [
        "25% increase in decision accuracy",
        "40% improvement in forecasting",
        "Reduced operational risks"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-primary-600" />,
      title: "Capacity Building",
      subtitle: "Academic support and hands-on training",
      description: "Empower your team with data science skills through comprehensive training programs, workshops, and academic partnerships. We build internal capabilities to ensure long-term success and independence.",
      features: [
        "Custom training programs",
        "Hands-on workshops and bootcamps",
        "Academic curriculum development",
        "Mentorship and coaching",
        "Certification programs",
        "Ongoing support and consultation"
      ],
      benefits: [
        "80% skill improvement rate",
        "Reduced dependency on external consultants",
        "Enhanced team productivity"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary-600" />,
      title: "Knowledge Sharing",
      subtitle: "Blog content and community engagement",
      description: "Stay informed with our 'Nous Lire' blog featuring the latest insights in data science, case studies, and best practices. We also organize community events and knowledge-sharing sessions.",
      features: [
        "Technical blog and case studies",
        "Industry best practices guides",
        "Community workshops and events",
        "Research publication support",
        "Thought leadership content",
        "Networking opportunities"
      ],
      benefits: [
        "Access to cutting-edge insights",
        "Professional network expansion",
        "Continuous learning opportunities"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: <BarChart3 className="h-8 w-8 text-secondary-600" />,
      title: "Data Visualization",
      description: "Create compelling visual stories from your data with interactive dashboards and reports."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary-600" />,
      title: "Data Security",
      description: "Implement robust security measures to protect sensitive data and ensure compliance."
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary-600" />,
      title: "Process Automation",
      description: "Automate repetitive data tasks to improve efficiency and reduce human error."
    }
  ]

  return (
    <Layout
      title="Our Services - Saturne Lab"
      description="Comprehensive data science services including data collection, strategic insights, capacity building, and knowledge sharing for businesses and academia in DRC."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Comprehensive data solutions designed to meet the unique challenges of businesses 
            and academic institutions in the Democratic Republic of Congo.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <div className="ml-4">
                      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                        {service.title}
                      </h2>
                      <p className="text-lg text-primary-600 dark:text-primary-400">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                        <span className="text-neutral-600 dark:text-neutral-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-primary-700 dark:text-primary-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="btn-primary inline-flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 p-8 rounded-2xl h-96 flex items-center justify-center">
                    <div className="text-center">
                      {React.cloneElement(service.icon, { className: "h-24 w-24 text-primary-600 mx-auto mb-4" })}
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Additional Capabilities
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Specialized services to complement our core offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              How we deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your challenges, goals, and data landscape" },
              { step: "02", title: "Strategy", description: "We develop a tailored approach and implementation roadmap" },
              { step: "03", title: "Implementation", description: "We execute the solution with regular progress updates" },
              { step: "04", title: "Optimization", description: "We refine and optimize for maximum impact and ROI" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss your data challenges and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Contact Us Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
