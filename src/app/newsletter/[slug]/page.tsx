import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Define the props type with readonly modifier
type PageProps = {
  readonly params: Promise<{ readonly slug: string }>;
};

const newsletterIssues = {
  '7': {
    number: 7,
    date: 'July 30, 2024',
    content: `
      <h2>Techx #7: The Power of Design Systems</h2>
      <p>Hello friends,</p>
      <p>Welcome to the seventh edition of Techx. This month, we're diving into design systems and how they can transform your workflow.</p>
      <h3>1. Why Design Systems Matter</h3>
      <p>A good design system can save you hours of work and make your projects more consistent. They're not just for large companies anymore.</p>
      <h3>2. Tools of the Month</h3>
      <ul>
        <li><strong>Figma Variables:</strong> Game-changer for design systems</li>
        <li><strong>Shadcn/UI:</strong> My go-to component library recently</li>
        <li><strong>Pandacss:</strong> Type-safe styling with great DX</li>
      </ul>
      <h3>3. What I've Been Reading</h3>
      <p>I've been enjoying "Thinking in Systems" by Donella H. Meadows. It provides a framework for understanding how systems work in all areas of life.</p>
      <p>That's it for this month. See you in August!</p>
      <p>Best,<br>anmol</p>
    `,
  },
  '6': {
    number: 6,
    date: 'June 30, 2024',
    content: '<p>This is sample content for Techx #6.</p>',
  },
  '5': {
    number: 5,
    date: 'May 30, 2024',
    content: '<p>This is sample content for Techx #5.</p>',
  },
  '4': {
    number: 4,
    date: 'April 31, 2024',
    content: '<p>This is sample content for Techx #4.</p>',
  },
  '3': {
    number: 3,
    date: 'March 31, 2024',
    content: '<p>This is sample content for Techx #3.</p>',
  },
  '2': {
    number: 2,
    date: 'February 29, 2024',
    content: '<p>This is sample content for Techx #2.</p>',
  },
  '1': {
    number: 1,
    date: 'January 30, 2024',
    content: '<p>This is sample content for Techx #1.</p>',
  },
};

export function generateStaticParams() {
  return Object.keys(newsletterIssues).map((slug) => ({ slug }));
}

export default async function NewsletterIssue({ 
  params 
}: Readonly<PageProps>) {
  const { slug } = await params; // Resolve the Promise to access slug

  // Get issue data or return fallback data
  const issue = newsletterIssues[slug as keyof typeof newsletterIssues] || {
    number: 0,
    date: 'No date available',
    content: '<p>This newsletter issue could not be found.</p>',
  };

  return (
    <section className="flex items-center justify-center w-full flex-col">
      <div className="w-full max-w-3xl">
        <div className="mb-4 group">
          <Link className="text-xs flex items-center" href="/newsletter">
            <ArrowLeft size={14} className="mr-1" />
            BACK
          </Link>
        </div>

        <h1 className="title font-medium text-2xl md:text-4xl tracking-tighter font-heading">
          Techx #{issue.number}
        </h1>

        <div className="flex justify-start gap-2 items-center mt-4 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          <p className="text-sm">{issue.date}</p>
        </div>

        <article
          className="prose prose-quoteless prose-gray max-w-3xl"
          dangerouslySetInnerHTML={{ __html: issue.content }}
        />
      </div>
    </section>
  );
}