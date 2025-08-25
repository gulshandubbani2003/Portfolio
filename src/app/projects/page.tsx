'use client'

import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AI Customer Assistant',
      description: 'Real-time voice interaction system with Spring Boot microservices',
      link: 'https://github.com/gulshandubbani2003/SupportFlow',
      icon: '',
    },
    {
      title: 'trading-platform-infra',
      description: 'Real-time trading platform infrastructure with AWS ECS, RDS, SQS, Lambda',
      link: 'https://github.com/gulshandubbani2003/trading-platform-infra',
      icon: '',
    },
    {
      title: 'Terminal Assistant',
      description: 'AI-powered terminal assistant with API/local LLM support and command execution',
      link: 'https://github.com/gulshandubbani2003/Terminal_assistant',
      icon: '',
    },
  ]

  return (
    <div className="w-full max-w-3xl">
      <h1 className="font-medium text-gray-900 dark:text-white mb-6 text-2xl">
        Projects
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
        {projects.map((project, idx) => (
          <MotionDiv
            key={idx}
            className="mt-5"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800"
            >
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
  )
} 