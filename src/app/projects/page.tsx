'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'fun'>('projects')

  const projects = [
    {
      title: 'SupportFlow',
      description: 'Realtime AI conversational support agent',
      link: 'https://github.com/anmolxlight/SupportFlow',
      icon: '',
    },
    {
      title: 'Tradeo',
      description: 'Realtime sentiment analysis of stocks and cryptocurrencies',
      link: 'https://tradeo.streamlit.app/',
      icon: '',
    },
    {
      title: 'Portfolio',
      description: 'My personal website, blogs and newsletter.',
      link: 'https://gulshandubbani.netlify.app/',
      icon: '',
    },
  ]

  const funProjects: Array<{ title: string; description: string; link: string; icon?: string }> = []

  return (
    <div className="w-full max-w-3xl">
      <h1 className="font-medium text-gray-900 dark:text-white mb-6 text-2xl">
        Projects
      </h1>

      <div className="flex space-x-4 mb-6">
        <button
          className={`text-sm px-3 py-1 rounded ${
            activeTab === 'projects'
              ? 'text-white bg-gray-900 dark:bg-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          } transition-colors`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`text-sm px-3 py-1 rounded ${
            activeTab === 'fun'
              ? 'text-white bg-gray-900 dark:bg-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          } transition-colors`}
          onClick={() => setActiveTab('fun')}
        >
          Fun Projects
        </button>
      </div>

      {activeTab === 'projects' ? (
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
      ) : (
        <div>
          {funProjects.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
              {funProjects.map((project, idx) => (
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
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No fun projects yet. Check back soon!
            </p>
          )}
        </div>
      )}
    </div>
  )
} 