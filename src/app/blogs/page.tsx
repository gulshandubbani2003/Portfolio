'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
})

export default function BlogsPage() {
  // Blog data
  const blogs = [
    {
      title: 'How to Hack Your Brain',
      date: '2024-10-04',
      slug: 'hack-brain',
    },
    {
      title: 'How to Design Clean UI as an Engineer',
      date: '2024-08-23',
      slug: 'design-tips',
    },
    {
      title: 'My Crazy Ride in Tech',
      date: '2024-07-02',
      slug: 'crazy-tech-ride',
    },
    {
      title: 'How to Add a View Counter in Next.js 14',
      date: '2024-06-21',
      slug: 'view-counter',
    },
    {
      title: 'Do quality open-source contribution',
      date: '2024-06-08',
      slug: 'open-source-contribution',
    },
    {
      title: 'Rejections don\'t define you',
      date: '2024-03-31',
      slug: 'rejections-dont-define-you',
    },
    {
      title: 'A Rollercoaster Ride with Arc',
      date: '2024-01-13',
      slug: 'arc',
    },
    {
      title: 'How I got into Coding',
      date: '2023-07-15',
      slug: 'coding-journey',
    },
    {
      title: 'How to Approach Front-End?',
      date: '2023-05-27',
      slug: 'approach-frontend',
    },
  ]

  return (
    <div className="w-full max-w-3xl">
      <h1 className="font-medium text-gray-900 dark:text-white mb-6 text-2xl">
        All Blogs
      </h1>
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <MotionDiv
            key={index}
            whileHover={{ 
              y: -5,
              transition: { 
                duration: 0.2,
                type: "spring",
                stiffness: 300
              }
            }}
            whileTap={{ scale: 0.99 }}
            className="rounded-lg"
          >
            <Link
              href={`/blogs/${blog.slug}`}
              className="block py-4 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  {blog.title}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {blog.date}
                </span>
              </div>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}
