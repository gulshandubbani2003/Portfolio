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
      title: 'Fierce Nerds',
      date: '2024-10-04',
      slug: 'hack-brain',
    },
    {
      title: 'Three Observations',
      date: '2024-08-23',
      slug: 'design-tips',
    },
    {
      title: 'What I Wish Someone Had Told Me',
      date: '2024-07-02',
      slug: 'crazy-tech-ride',
    },
    {
      title: 'The Strength of Being Misunderstood',
      date: '2024-06-21',
      slug: 'view-counter',
    },
    {
      title: 'Hard Startups',
      date: '2024-06-08',
      slug: 'open-source-contribution',
    },
    {
      title: 'The Right Kind of Stubborn',
      date: '2024-03-31',
      slug: 'rejections-dont-define-you',
    },
    {
      title: 'A Rollercoaster Ride with Arc',
      date: '2024-01-13',
      slug: 'arc',
    },
    {
      title: 'Is Good Taste Real?',
      date: '2023-07-15',
      slug: 'coding-journey',
    },
    {
      title: 'Superlinear Returns',
      date: '2023-05-27',
      slug: 'approach-frontend',
    },
  ]

  return (
    <div className="w-full max-w-3xl">
      <h1 className="font-medium text-gray-900 dark:text-white mb-6 text-2xl">
        All Blogs(my favorite ones)
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
