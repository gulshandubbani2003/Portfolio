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
      title: 'DevOps Intern',
      company: 'Apt. trading',
      period: 'PRESENT',
      isPresent: true,
      color: 'bg-green-500' // Green for current job
    },
    {
      title: 'BTSA',
      company: 'ZS Associates',
      period: 'UPCOMING',
      isPresent: false,
      color: 'bg-gray-300' // Neutral for upcoming role
    },
    {
      title: 'Research Consultant',
      company: 'WorldQuant BRAIN',
      period: '',
      isPresent: false,
      color: 'bg-blue-500' // Blue for past job
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
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="flex flex-col gap-12">
          {/* Introduction */}
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-[400] tracking-tighter">
            Computer Science student at MIT WPU (AI & Data Science) with industry experience as a DevOps Intern at Tusta (AWS, Terraform, CI/CD, Kubernetes), Research Consultant at WorldQuant BRAIN (quantitative signals & predictive trading models), and Data Analyst at Unifins (financial data pipelines, LSTM forecasting, OpenAI-based analysis). Strong problem-solving foundation with 600+ DSA questions solved across platforms (LeetCode, CodingNinjas, GeeksforGeeks). Skilled in AI/ML, quantitative research, and scalable software systems.
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
                    {exp.period && (
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

          
        </div>
      </div>
    </div>
  )
}
