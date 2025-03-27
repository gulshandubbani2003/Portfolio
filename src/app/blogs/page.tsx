import Link from 'next/link'

export default function Blogs() {
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
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="mb-5 flex flex-col gap-3 items-start w-full">
          <div className="w-full">
            <div className="w-full">
              <div className="flex flex-col gap-3 w-full">
                {blogs.map((blog, index) => (
                  <Link key={index} href={`/blogs/${blog.slug}`}>
                    <div className="flex flex-col w-full space-y-1 rounded-lg py-3 pl-3" tabIndex={0} style={{ opacity: 1 }}>
                      <div className="w-full flex flex-col">
                        <div className="flex items-center gap-2 flex-row justify-between">
                          <p className="text-gray-900 dark:text-gray-100 text-lg font-heading tracking-tight">
                            {blog.title}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm tracking-tight mt-1">
                            {blog.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
