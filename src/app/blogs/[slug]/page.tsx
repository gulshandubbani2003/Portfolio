import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

// Define all possible blog slugs
export function generateStaticParams() {
  const blogs = [
    { slug: 'hack-brain' },
    { slug: 'design-tips' },
    { slug: 'crazy-tech-ride' },
    { slug: 'open-source-contribution' },
    { slug: 'arc' },
    { slug: 'view-counter' },
    { slug: 'coding-journey' },
    
    // Add any other blog slugs you might have
    { slug: 'productivity-tips' },
    { slug: 'tech-trends' },
    { slug: 'career-growth' },
    { slug: 'coding-best-practices' },
    
    // New slugs
    { slug: 'approach-frontend' },
    { slug: 'developer-tools' },
    { slug: 'javascript-tips' },
    { slug: 'react-optimization' },
    { slug: 'startup-engineering' }
  ]

  return blogs.map((blog) => ({
    slug: blog.slug
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Get post data or return fallback data
  const blogPosts = {
    'hack-brain': {
      title: 'How to Hack Your Brain',
      date: '2024-10-04',
      content: '<p>Blog content about hacking your brain...</p>'
    },
    'design-tips': {
      title: 'How to Design Clean UI as an Engineer',
      date: '2024-08-23',
      content: '<p>Blog content about design tips...</p>'
    },
    'crazy-tech-ride': {
      title: 'My Crazy Ride in Tech',
      date: '2024-07-02',
      content: '<p>Blog content about tech journey...</p>'
    },
    'open-source-contribution': {
      title: 'Open Source Contribution Guide',
      date: '2024-06-15',
      content: '<p>Comprehensive guide to contributing to open source...</p>'
    },
    'arc': {
      title: 'Arc Browser: Revolutionizing Web Browsing',
      date: '2024-05-20',
      content: '<p>Exploring the innovative features of Arc browser...</p>'
    },
    'view-counter': {
      title: 'Building a View Counter for Your Blog',
      date: '2024-02-15',
      content: '<p>A comprehensive guide to implementing a view counter in your web application...</p>'
    },
    'coding-journey': {
      title: 'My Coding Journey: From Beginner to Professional',
      date: '2024-01-20',
      content: '<p>A personal reflection on my path in software development, challenges, and growth...</p>'
    },
    'productivity-tips': {
      title: 'Productivity Hacks for Developers',
      date: '2024-04-15',
      content: '<p>Practical tips to boost your productivity...</p>'
    },
    'tech-trends': {
      title: 'Emerging Tech Trends in 2024',
      date: '2024-03-10',
      content: '<p>A look at the most exciting technology trends...</p>'
    },
    
    // New blog posts
    'approach-frontend': {
      title: 'My Approach to Frontend Development',
      date: '2024-02-01',
      content: '<p>A deep dive into my methodology for building modern web applications...</p>'
    },
    'career-growth': {
      title: 'Navigating Career Growth in Tech',
      date: '2024-01-15',
      content: '<p>Strategies and insights for advancing your career in software engineering...</p>'
    },
    'coding-best-practices': {
      title: 'Essential Coding Best Practices',
      date: '2024-03-20',
      content: '<p>Key principles and techniques for writing clean, maintainable code...</p>'
    },
    'developer-tools': {
      title: 'Must-Have Developer Tools in 2024',
      date: '2024-04-01',
      content: '<p>A curated list of tools that can supercharge your development workflow...</p>'
    },
    'javascript-tips': {
      title: 'Advanced JavaScript Tips and Tricks',
      date: '2024-05-10',
      content: '<p>Lesser-known JavaScript techniques to level up your coding skills...</p>'
    },
    'react-optimization': {
      title: 'Optimizing React Applications',
      date: '2024-06-01',
      content: '<p>Performance optimization strategies for React applications...</p>'
    },
    'startup-engineering': {
      title: 'Engineering at a Startup: My Experience',
      date: '2024-07-15',
      content: '<p>Insights and lessons learned from working at early-stage startups...</p>'
    }
  }

  const post = blogPosts[slug as keyof typeof blogPosts] || {
    title: 'Post Not Found',
    date: 'No date available',
    content: '<p>This blog post could not be found.</p>',
  }

  return (
    <section className="flex items-center justify-center w-full flex-col">
      <div className="w-full max-w-3xl">
        <div className="mb-4 group">
          <Link className="text-xs flex items-center" href="/blogs">
            <ArrowLeft size={14} className="mr-1" />
            BACK
          </Link>
        </div>

        <h1 className="title font-medium text-2xl md:text-4xl tracking-tighter font-heading">
          {post.title}
        </h1>

        <div className="flex justify-start gap-2 items-center mt-4 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          <p className="text-sm">{post.date}</p>
        </div>

        <article
          className="prose prose-quoteless prose-gray max-w-3xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12">
          <NewsletterForm title="Subscribe To My Newsletter" />
        </div>
      </div>
    </section>
  )
}
