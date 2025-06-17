import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ArrowRight, Database, TrendingUp, Users, BookOpen, CheckCircle } from 'lucide-react'

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Database className="h-8 w-8 text-primary-600" />,
      title: "Data Collection",
      description: "Secure workflows to gather high-quality client and public data with robust methodologies.",
      features: ["Secure data pipelines", "Quality assurance", "Compliance standards"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: "Strategic Insights",
      description: "Analytics, predictive modeling & optimization to guide critical business decisions.",
      features: ["Predictive analytics", "Business intelligence", "Decision optimization"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Capacity Building",
      description: "Academic support & hands-on workshops to empower your team with data skills.",
      features: ["Training programs", "Academic partnerships", "Skill development"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: "Knowledge Sharing",
      description: "MDX-powered blog 'Nous Lire' and community events to foster learning.",
      features: ["Technical blog", "Community events", "Best practices"]
    }
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "100+", label: "Data Models Built" },
    { number: "5+", label: "Years Experience" }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Empowering Data-Driven
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Growth in DRC
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              From collection to insights – tailored solutions for businesses & academia. 
              We transform raw data into strategic advantages that drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Comprehensive data solutions designed to meet the unique challenges of the DRC market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-200">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                      <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join leading organizations in DRC who trust Saturne Lab for their data science needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Start Your Project
            </Link>
            <Link href="/blog" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
