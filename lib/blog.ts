import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  readTime: string
  content: string
  excerpt: string
  image?: string
  imageCredit?: string
}

export function getAllPosts(): BlogPost[] {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Generate excerpt from content (first 160 characters)
      const excerpt = content.replace(/[#*`]/g, '').substring(0, 160) + '...'

      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Saturne Lab',
        category: data.category || 'General',
        tags: data.tags || [],
        readTime: data.readTime || '5 min read',
        content,
        excerpt: data.description || excerpt,
        image: data.image || null,
        imageCredit: data.imageCredit || null,
      } as BlogPost
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const excerpt = content.replace(/[#*`]/g, '').substring(0, 160) + '...'

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Saturne Lab',
      category: data.category || 'General',
      tags: data.tags || [],
      readTime: data.readTime || '5 min read',
      content,
      excerpt: data.description || excerpt,
      image: data.image || null,
      imageCredit: data.imageCredit || null,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = posts.map((post) => post.category)
  return Array.from(new Set(categories))
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = posts.flatMap((post) => post.tags)
  return Array.from(new Set(tags))
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter((post) => 
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  )
}
