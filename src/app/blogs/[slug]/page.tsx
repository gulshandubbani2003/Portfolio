import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

const blogPosts = {
  'hack-brain': {
    title: 'How to Hack Your Brain',
    date: 'October 4, 2024 (1y ago)',
    views: 762,
    content: `
      <p>The world is moving fast, technology is coming up in every place, and we all are hooked to social media, which I don't believe is a bad thing in its entirety—you can do wonders with social media.</p>
      <p>I made my first buck, good friends, and landed a dope job just because I was sharing my work on social media. But there's always two sides to the coin.</p>
      <h3 id="problem">Problem</h3>
      <p>Let's talk about short-form content. Who doesn't like it? I mean, why bother watching a 10-minute video when you can get the same information in just 10 seconds? Sometimes it's helpful, but sometimes…</p>
      <p>The problem is people get hooked on it. The same happened to me—I got hooked, just mindlessly scrolling and taking it as entertainment. It hits dopamine levels real good, and in the middle of the shorts/reels/TikTok algorithm, it also drops cats and dogs videos. How can I miss out on that?!</p>
      <h3 id="realization">Realization</h3>
      <p>But what I realized is that this is making me feel miserable after I finish watching them. Like I have not accomplished anything in the day. A sense of emptiness (yup, social media is known to create it). But the bigger issue for me was my attention span, I noticed that it is getting shorter.</p>
      <p>I was struggling to stay focused on my work for longer durations. Also, if I was sitting somewhere doing nothing, I used to pull out my phone and start mindlessly scrolling. It's like creating an escape from this world into a different world.</p>
      <h3 id="how-i-fixed-it">How i fixed it</h3>
      <p>I am not going to lecture you on how to increase your attention span; there are tons of videos on YouTube which will do a better job of explaining it than me. But here's my concise list of tips which helped me and can also help you:</p>
      <ul>
        <li>Create no-phone zones (bathroom, bedroom, dinner table)</li>
        <li>Implement changes gradually, scheduling specific times for activities</li>
        <li>Use technology mindfully (e.g., Focus Mode on iPhone)</li>
        <li>Cultivate curiosity by observing surroundings instead of scrolling</li>
        <li>Embrace long-form content (YouTube videos, podcasts, audiobooks, books)</li>
        <li>Practice active consumption, focusing on absorbing rather than skimming</li>
      </ul>
    `,
  },
  'design-tips': {
    title: 'How to Design Clean UI as an Engineer',
    date: 'August 23, 2024',
    views: 543,
    content: '<p>This is a sample content for the Design Tips blog post.</p>',
  },
  'crazy-tech-ride': {
    title: 'My Crazy Ride in Tech',
    date: 'July 2, 2024',
    views: 321,
    content: '<p>This is a sample content for the Tech Ride blog post.</p>',
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map(slug => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Get post data or return fallback data
  const post = blogPosts[slug as keyof typeof blogPosts] || {
    title: 'Post Not Found',
    date: 'No date available',
    views: 0,
    content: '<p>This blog post could not be found.</p>',
  }

  return (
    <section className="flex items-center justify-center w-full flex-col">
      <div className="w-full max-w-3xl">
        <div className="mb-4 group">
          <Link className="text-xs flex items-center" href="/blogs">
            <ArrowLeft size={14} className="mr-1" />
            BACK
          </Link>
        </div>

        <h1 className="title font-medium text-2xl md:text-4xl tracking-tighter font-heading">
          {post.title}
        </h1>

        <div className="flex justify-start gap-2 items-center mt-4 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          <p className="text-sm">{post.date}</p>
          <div>•</div>
          <div>{post.views} views</div>
        </div>

        <article
          className="prose prose-quoteless prose-gray max-w-3xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12">
          <NewsletterForm title="Subscribe To My Newsletter" />
        </div>
      </div>
    </section>
  )
}
