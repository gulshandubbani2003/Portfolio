import Link from 'next/link'
import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'

export default function Home() {
  // Experience data
  const experiences = [
    {
      title: 'Frontend Lead',
      company: 'Agno.com',
      period: 'PRESENT',
      isPresent: true,
      color: 'bg-green-500' // Green for current job
    },
    {
      title: 'Founding Engineer',
      company: 'Speedybrand (YC-W23)',
      period: '',
      isPresent: false,
      color: 'bg-blue-500' // Blue for past job
    },
    {
      title: 'Founding Engineer',
      company: 'Maya Labs (YC-S22)',
      period: '',
      isPresent: false,
      color: 'bg-purple-500' // Purple for another past job
    },
  ]

  // Projects data
  const projects = [
    {
      title: 'SyntaxUI Pro',
      description: 'Premium UI components for your next project.',
      link: 'https://pro.syntaxui.com',
      icon: '/images/projects/syntaxUI.svg',
    },
    {
      title: 'SyntaxUI',
      description: 'Free-to-use UI React components and blocks.',
      link: 'https://syntaxui.com',
      icon: '/images/projects/syntaxUI.svg',
    },
    {
      title: 'Prettyfolio',
      description: 'A curated collection of portfolios for inspiration.',
      link: 'https://prettyfolio.com',
      icon: '/images/projects/prettyfolio.png',
    },
    {
      title: 'Enchant',
      description: 'A vibrant theme for Visual Studio Code.',
      link: 'https://enchant.anmolmishra.com',
      icon: '',
    },
    {
      title: 'anmol.co',
      description: 'My personal website, blogs and newsletter.',
      link: 'https://anmol.co',
      icon: '',
    },
  ]

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
  ]

  return (
    <div className="w-full max-w-3xl">
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="flex flex-col gap-12">
          {/* Introduction */}
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-[400] tracking-tighter">
              Hello! I'm anmol, a Lead Software Engineer &amp; Designer. Passionate about crafting tools that empower developers and designers to express themselves seamlessly.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h1 className="font-medium text-gray-900 dark:text-white mb-4 text-lg">
              Experience
            </h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-900">
              {experiences.map((exp, index) => (
                <li key={index} className="mb-10 ml-4">
                  <div 
                    className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 
                      ${exp.isPresent 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-gray-200 dark:bg-gray-900'}`}
                  ></div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-md font-medium text-gray-900 dark:text-gray-300 tracking-tighter">
                      {exp.title}
                    </div>
                    {exp.isPresent && (
                      <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500 dark:text-gray-400 dark:border-gray-400">
                        {exp.period}
                      </div>
                    )}
                  </div>
                  <div className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                    {exp.company}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Projects */}
          <div className="">
            <h1 className="font-medium text-gray-900 dark:text-white mb-4 text-lg">
              Projects
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
              {projects.map((project, index) => (
                <div key={index} className="mt-5">
                  <a target="_blank" rel="noopener noreferrer" href={project.link}>
                    <div className="text-sm mb-1 font-medium text-gray-900 dark:text-gray-300">
                      {project.title}
                    </div>
                    <div className="max-w-xs text-sm font-normal text-gray-500 dark:text-gray-400 tracking-tighter">
                      {project.description}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Blogs */}
          <div className="">
            <h1 className="font-medium text-gray-900 dark:text-white mb-4 text-lg">
              Latest Blogs
            </h1>
            {blogs.map((blog, index) => (
              <Link
                key={index}
                className="flex flex-col space-y-1 mb-4 py-2"
                href={`/blogs/${blog.slug}`}
              >
                <div className="w-full flex flex-col">
                  <div className="flex items-center gap-2 justify-between">
                    <p className="text-gray-900 dark:text-gray-100 text-lg font-heading tracking-tight">
                      {blog.title}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm tracking-tight mt-1">
                      {blog.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <Link
              className="hover:underline text-sm"
              aria-label="Read more blogs"
              href="/blogs"
            >
              Read More
            </Link>
          </div>

          {/* Newsletter */}
          <NewsletterForm />
        </div>
      </div>
    </div>
  )
}
