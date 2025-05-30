'use client'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
})

export default function Home() {
  // Experience data
  const experiences = [
    {
      title: 'Quantitative Analyst',
      company: 'WorldQuant BRAIN',
      period: 'PRESENT',
      isPresent: true,
      color: 'bg-green-500' // Green for current job
    },
    {
      title: 'Data Analyst',
      company: 'Unifins IT Hub Pvt Ltd',
      period: 'Jul\'24 - Nov\'24',
      isPresent: false,
      color: 'bg-blue-500' // Blue for past job
    }
  ]

  // Projects data
  const projects = [
    {
      title: 'AI Customer Assistant',
      description: 'Real-time voice interaction system with Spring Boot microservices',
      link: 'https://github.com/gulshandubbani2003/SupportFlow',
      icon: '',
    },
    {
      title: 'MIT-WPU Campus Navigator',
      description: 'Flask-based campus navigation system with RRT algorithm',
      link: 'https://github.com/gulshandubbani2003/MIT_WPU_PathFinder',
      icon: '',
    },
    {
      title: 'AI Virtual Trainer',
      description: 'Real-time posture correction and workout assistance using MediaPipe',
      link: 'https://github.com/gulshandubbani2003',
      icon: '',
    },
  ]

  // Blog data
  const blogs = [
    {
      title: 'Machine Learning in Finance',
      date: '2024-03-15',
      slug: 'ml-finance',
    },
    {
      title: 'Deep Learning for Computer Vision',
      date: '2024-02-20',
      slug: 'deep-learning-cv',
    },
    {
      title: 'Building Scalable Microservices',
      date: '2024-01-25',
      slug: 'microservices-architecture',
    },
  ]

  return (
    <div className="w-full max-w-3xl">
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="flex flex-col gap-12">
          {/* Introduction */}
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-[400] tracking-tighter">
            Hey! I'm Gulshan Dubbani, a Computer Science student at MIT World Peace University specializing in AI and Data Science. I'm passionate about Machine Learning, Quantitative Analysis, and Software Development. With extensive experience in AI/ML technologies and a strong foundation in data analysis, I enjoy building innovative solutions that combine cutting-edge AI with practical applications.
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
                <MotionDiv 
                  key={index} 
                  className="mt-5"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a target="_blank" rel="noopener noreferrer" href={project.link}>
                    <div className="text-sm mb-1 font-medium text-gray-900 dark:text-gray-300">
                      {project.title}
                    </div>
                    <div className="max-w-xs text-sm font-normal text-gray-500 dark:text-gray-400 tracking-tighter">
                      {project.description}
                    </div>
                  </a>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Blogs Page */}
          <div className="">
            <h1 className="font-medium text-gray-900 dark:text-white mb-4 text-lg">
              Latest Blogs
            </h1>
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
                  className="flex flex-col space-y-1 mb-4 py-2 px-2"
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
              </MotionDiv>
            ))}
            <Link
              className="hover:underline text-sm"
              aria-label="Read more blogs"
              href="/blogs"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
