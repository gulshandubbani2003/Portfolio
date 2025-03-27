import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

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
      <div style={{ opacity: 1, transform: 'none' }}>
        <div>
          <NewsletterForm
            title={undefined}
            description="Stay ahead of the curve with my monthly newsletter called Luminary. Receive valuable insights on the latest trends, techniques, and tools in web development and design."
          />

          <div className="mt-10 mb-4 text-md">Past Issues:</div>

          <div className="flex flex-col gap-3 w-full">
            {issues.map((issue, index) => (
              <Link key={index} href={`/newsletter/${issue.slug}`}>
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
                        Luminary #{issue.number}
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
  )
}
