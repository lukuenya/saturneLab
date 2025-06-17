import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Users, Target, Award, Globe } from 'lucide-react'

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "Data-Driven Excellence",
      description: "We believe in the power of data to transform decision-making and drive sustainable growth across all sectors."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Collaborative Partnership",
      description: "We work closely with our clients as partners, ensuring solutions are tailored to their unique challenges and goals."
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Quality & Integrity",
      description: "We maintain the highest standards in data collection, analysis, and reporting while ensuring ethical practices."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: "Local Impact",
      description: "We're committed to building data science capacity within DRC and contributing to the country's digital transformation."
    }
  ]

  const team = [
    {
      name: "Matthieu Ndumbi",
      role: "Founder & Data Scientist",
      bio: "M.Eng in Electrical & Computer Engineering with experience in data science and machine learning. Former Postgraduate Researcher at Centre Borelli ENS Paris-Saclay.",
      image: "/team/matt.jpg"
    },
    {
      name: "Jacques Bakole",
      role: "Co-Founder & Chief Analyst",
      bio: "Master in Quantitative Economics with experience statistical analysis and data visualization. Reseacher and lecturer at UPN Kinshasa.",
      image: "/team/jacques.jpg"
    },
    {
      name: "Maurice Nkanka",
      role: "Business Intelligence Analyst",
      bio: "Specializes in business analytics and visualization. MBA from UNIKIN with focus on data-driven business strategy.",
      image: "/team/maurice.jpg"
    },
    {
      name: "David Tshiaba",
      role: "Research Associate",
      bio: "PhD candidate in Applied Mathematics. Focuses on predictive modeling and statistical analysis for academic partnerships.",
      image: "/team/david.jpg"
    }
  ]

  return (
    <Layout
      title="About Us - Saturne Lab"
      description="Learn about Saturne Lab's mission, values, and team. We're dedicated to empowering data-driven growth in the Democratic Republic of Congo."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            About Saturne Lab
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            We are a pioneering data science consultancy based in the Democratic Republic of Congo, 
            dedicated to transforming how businesses and academic institutions leverage data for growth and innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                To democratize access to advanced data science capabilities across the Democratic Republic of Congo, 
                empowering organizations to make informed decisions that drive sustainable development and economic growth.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                We bridge the gap between complex data challenges and practical solutions, making cutting-edge 
                analytics accessible to businesses of all sizes and academic institutions throughout the region.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Why We Started
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Founded in 2019, Saturne Lab emerged from a recognition that the DRC's vast potential 
                could be unlocked through better data utilization. Our founders, experienced data scientists 
                and researchers, saw an opportunity to bring world-class analytics capabilities to local 
                organizations while building sustainable data science capacity within the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Experienced professionals passionate about data science and committed to DRC's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {member.bio}
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let&apos;s discuss how we can help transform your organization through data-driven insights.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
