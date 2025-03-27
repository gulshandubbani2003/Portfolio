'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface NewsletterFormProps {
  title?: string
  description?: string
}

export default function NewsletterForm({
  title = "My Newsletter",
  description = "Stay ahead of the curve with my monthly newsletter called Luminary. Receive valuable insights on the latest trends, techniques, and tools in web development and design."
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For demo purposes, we're just resetting the form
    // In a real app, this would connect to a backend
    setEmail('')
    alert('Thank you for subscribing! This is just a demo.')
  }

  return (
    <div className="mt-1">
      {title && (
        <h1 className="font-medium text-gray-900 dark:text-white mb-4 text-lg">
          {title}
        </h1>
      )}
      <p className="text-gray-500 dark:text-gray-400 mt-4 tracking-tighter">
        {description}
      </p>
      <form className="relative" onSubmit={handleSubmit}>
        <Input
          className="border dark:border-gray-900 w-full mt-4 px-2 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="bg-gray-900 hover:bg-gray-700 inline-block top-6 text-xs right-1 text-white px-2 py-2 rounded-md absolute disabled:opacity-80"
        >
          Subscribe
        </Button>
      </form>
    </div>
  )
}
