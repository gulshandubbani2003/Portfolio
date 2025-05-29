'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Twitter, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use resolvedTheme which is guaranteed to be accurate after hydration
  const isDark = mounted && (resolvedTheme === 'dark');

  const navLinks = [
    { name: 'About', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full max-w-3xl">
      <div>
        <div>
          <Link href="/">
            <Image
              src="/images/profile.jpg"
              alt="Gulshan Dubbani"
              width={64}
              height={64}
              className="rounded-full"
            />
          </Link>
          <h1 className="font-medium text-gray-900 dark:text-gray-100 mt-2 text-xl font-heading">
            Gulshan Dubbani
          </h1>
          <p className="text-gray-500 dark:text-gray-400">AI Researcher & Quant Dev</p>
          <div className="flex flex-row justify-between items-center mt-3 mb-8">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-x-3">
                <a target="_blank" rel="noreferrer" href="https://x.com/trex3x00">
                  <Twitter size={20} className="text-gray-900 dark:text-gray-100" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/anmolxlight">
                  <Github size={20} className="text-gray-900 dark:text-gray-100" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anmolxlight/">
                  <Linkedin size={20} className="text-gray-900 dark:text-gray-100" />
                </a>
              </div>
              <motion.button
                className="p-2 rounded-lg bg-white border border-[#e5e7eb] dark:border-[#404040] dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-8">
          <div className="flex items-center flex-wrap gap-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button
                  variant="ghost"
                  className={`
                    text-sm transition-colors px-2 py-1 rounded-md relative
                    ${pathname === link.href
                      ? 'text-white bg-gray-900 dark:bg-gray-900 hover:text-white dark:hover:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-transparent dark:hover:bg-transparent'}
                  `}
                >
                  <span className="relative z-10 tracking-tighter">{link.name}</span>
                  {pathname === link.href && (
                    <span className="absolute inset-0 z-0 bg-gray-900 rounded-md"></span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}