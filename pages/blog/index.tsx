import React, { useState, useMemo } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { getAllPosts, getAllCategories, BlogPost } from '@/lib/blog'
import { Search, Calendar, User, Tag, Clock, Mail } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useClientSideLocale } from '@/hooks/useClientSideLocale'

interface BlogIndexProps {
  posts: BlogPost[]
  categories: string[]
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts, categories }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Handle client-side locale changes when navigating with browser back/forward
  useClientSideLocale()
  
  // Get current locale from URL
  const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
  const localePrefix = currentLocale === 'en' ? '/en' : '/fr'

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = 
        selectedCategory === 'all' || 
        post.category.toLowerCase() === selectedCategory.toLowerCase()

      return matchesSearch && matchesCategory
    })
  }, [posts, searchTerm, selectedCategory])

  const formatDate = (dateString: string) => {
    // Use the current locale for date formatting
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Layout
      title={t('blog.title')}
      description={t('blog.description')}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {t('blog.hero.title')}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {t('blog.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder={t('blog.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-neutral-900 placeholder-neutral-500"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-900 placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">{t('blog.categories.all')}</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <a key={post.slug} href={`${localePrefix}/blog/${post.slug}`}>
                  <div className="card group cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <span className="text-primary-600 text-6xl font-bold opacity-20">
                          {post.title.charAt(0)}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-neutral-500 space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">{post.title}</h2>
                    <p className="text-neutral-600 mb-4 leading-relaxed">{post.description}</p>
                    
                    <div className="flex items-center text-sm text-neutral-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="inline-block px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-full">
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-12 w-12 text-neutral-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      {t('blog.search.noResults')}
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      {t('blog.search.tryDifferent')}
                    </p>
                    <button 
                      className="btn-primary"
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('all')
                      }}
                    >
                      {t('blog.search.clearFilters')}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Newsletter CTA */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-12 w-12 text-neutral-400" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-primary-600" />
                  Newsletter
                </h3>
                <p className="text-neutral-600 mb-6">
                  Subscribe to our newsletter for the latest insights in data science and analytics.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-10 w-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('blog.newsletter.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('blog.newsletter.subtitle')}
          </p>
          <div className="mx-auto inline-block">
            <NewsletterForm className="bg-white p-4 rounded-lg shadow-lg max-w-md" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, resolvedUrl }) => {
  // Get locale from middleware headers or URL path
  const localeFromHeader = req.headers['x-locale'] as string
  const localeFromPath = resolvedUrl.startsWith('/en') ? 'en' : 'fr'
  const locale = localeFromHeader || localeFromPath

  const posts = getAllPosts()
  const categories = getAllCategories()

  return {
    props: {
      posts,
      categories,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default BlogIndex
