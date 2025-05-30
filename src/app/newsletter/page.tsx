'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
})

export default function Newsletter() {
  // Newsletter issues data
  const issues = [
    {
      number: 7,
      date: '2024-07-30',
      slug: '7',
    },
    {
      number: 6,
      date: '2024-06-30',
      slug: '6',
    },
    {
      number: 5,
      date: '2024-05-30',
      slug: '5',
    },
    {
      number: 4,
      date: '2024-04-31',
      slug: '4',
    },
    {
      number: 3,
      date: '2024-03-31',
      slug: '3',
    },
    {
      number: 2,
      date: '2024-02-29',
      slug: '2',
    },
    {
      number: 1,
      date: '2024-01-30',
      slug: '1',
    },
  ]

  return (
    <div className="w-full max-w-3xl">
      <h1 className="font-medium text-gray-900 dark:text-white mb-6 text-2xl">
        Newsletter
      </h1>
      
      <div className="mt-10 mb-4 text-md">Past Issues:</div>

      <div className="flex flex-col gap-3 w-full">
        {issues.map((issue, index) => (
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
            <Link href={`/newsletter/${issue.slug}`}>
              <div
                className="flex flex-col space-y-1 rounded-lg bg-gray-100 hover:bg-white py-3 pl-3 border border-gray-200 dark:border-gray-100/10 dark:bg-gray-900"
                tabIndex={0}
                style={{ opacity: 1 }}
              >
                <div className="w-full flex flex-col">
                  <div className="flex items-start flex-col gap-2">
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      {issue.date}
                    </p>
                    <p className="text-gray-900 dark:text-gray-300 text-xl font-heading tracking-tight mt-2">
                      Techx #{issue.number}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}
