import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';

// Define the props type with params as a Promise
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params; // Resolve the Promise to access slug
  const blogPosts = {
    'hack-brain': {
      title: 'Fierce Nerds',
      description: 'Understanding cognitive processes and mental performance',
    },
    'design-tips': {
      title: 'The Age of AGI: Three Observations on What\'s Coming',
      description: 'Three key observations on the emerging era of AGI and its impact',
    },
    'rejections-dont-define-you': {
      title: 'The Right Kind of Stubborn',
      description: 'Overcoming setbacks in your career',
    },
    'rollercoaster-ride': {
      title: 'Putting Ideas into Words',
      description: 'The process of refining thoughts through writing',
    },
    'coding-journey': {
      title: 'Is Good Taste Real?',
      description: 'An argument for the existence of good taste and its role in art.',
    },
    'approach-frontend': {
      title: 'Superlinear Returns',
      description: 'Exploring how small differences in performance lead to disproportionate rewards through superlinear returns.',
    },
  };

  const postMetadata =
    blogPosts[slug as keyof typeof blogPosts] || {
      title: 'Blog Post',
      description: 'Detailed blog post',
    };

  return {
    title: postMetadata.title,
    description: postMetadata.description,
  };
}

export function generateStaticParams() {
  const blogs = [
    { slug: 'hack-brain' },
    { slug: 'design-tips' },
    { slug: 'crazy-tech-ride' },
    { slug: 'view-counter' },
    { slug: 'arc' },
    { slug: 'open-source-contribution' },
    { slug: 'coding-journey' },
    { slug: 'approach-frontend' },
    { slug: 'developer-tools' },
    { slug: 'javascript-tips' },
    { slug: 'react-optimization' },
    { slug: 'startup-engineering' },
    { slug: 'rejections-dont-define-you' },
    { slug: 'productivity-tips' },
    { slug: 'tech-trends' },
    { slug: 'career-growth' },
    { slug: 'coding-best-practices' },
    { slug: 'rollercoaster-ride' },
  ];

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params; // Resolve the Promise to access slug

  const blogPosts = {
    'hack-brain': {
      title: 'Fierce Nerds',
      date: '2024-10-04',
      content: `<p>Nerds are often seen as quiet and awkward, but that's only in social settings where they're out of their element—like quarterbacks at physics symposia. In truth, some nerds are fiercely competitive, confident, intelligent, and driven.</p>

      <p>These fierce nerds aren't just more competitive than others—they take competition personally. Their overconfidence, especially in youth, often works in their favor, acting as a self-fulfilling prophecy. Fierce nerds are usually smart enough to back their confidence, and their independent-mindedness makes them challenge norms rather than conform to them. They're also impatient—quick to interrupt, quicker to solve, driven more by restlessness than politeness.</p>

      <p>The combination of competitiveness, intelligence, confidence, impatience, and independent thinking makes fierce nerds formidable. Watson and Crick, who unraveled DNA's structure, were classic fierce nerds—brilliant, awkward, bold, and unbothered by convention. Their drive let them outpace more polished rivals.</p>

      <p>Young nerds may not recognize their own fierceness at first, as they often feel more awkward than powerful. But for those who do, here's the truth: your fierceness is an asset. It can solve hard problems—and not just in academia. Seven of the eight richest Americans are fierce nerds, showing that fierceness thrives even more in business than science.</p>

      <p>But there's a warning. Left unused, fierceness festers into bitterness. Unchallenged fierce nerds risk becoming trolls, critics, or jaded cynics. To avoid this, pursue ambitious projects. Even if you fail, the effort channels your intensity. Alternatively, you could try dulling your edge through introspection—but it's better to wield the knife than blunt it.</p>

      <p>Now is the best time to be a nerd. Power is shifting from charismatic talkers to competent builders. The fierce nerd's moment is here—so aim high, stay sharp, and don't waste it.</p>
      `,
    },
    'design-tips': {
      title: 'The Age of AGI: Three Observations on What\'s Coming',
      date: '2024-08-23',
      content: `<h3><em>The Age of AGI: Three Observations on What's Coming</em></h3>
<p>It's becoming harder to ignore the signs: we're on the brink of a new era in intelligence.</p>
<p>The idea of Artificial General Intelligence—systems that can understand and solve problems across domains, much like humans do—is no longer just science fiction. While the destination isn't fully in view, the path is becoming clearer. The tools we're building today are starting to feel a lot more like general-purpose minds than narrow assistants.</p>
<p>For thousands of years, humanity has built tools to extend its reach. Fire, the wheel, the printing press, electricity, the internet—each reshaped civilization. AGI might be the next big leap. It's not just another tool—it's the foundation for building any tool.</p>
<p>What makes this moment so special is how fast things are moving. In the last few years, we've gone from early neural nets struggling with basic tasks to systems capable of writing code, generating art, and holding deep conversations. The pace is dizzying, but there's a pattern in the chaos.</p>
<h2>1. Intelligence scales with resources</h2>
<p>The more compute, data, and time poured into training AI models, the more capable they become. This scaling isn't linear, but the trajectory is remarkably consistent. We're learning that with enough resources, these models don't just get marginally better—they get fundamentally smarter.</p>
<h2>2. Costs are falling, and usage is exploding</h2>
<p>As technology matures, prices drop. What once cost thousands of dollars can now be accessed by almost anyone with an internet connection. In the AI world, we're seeing usage costs drop by orders of magnitude. As prices fall, more people experiment, more tools are built, and the cycle accelerates.</p>
<h2>3. Small gains in intelligence unlock massive value</h2>
<p>Even modest improvements in AI capability can lead to huge leaps in utility. One version might fumble through a task, while the next completes it fluently. The economic value of intelligence is nonlinear—every improvement opens doors to entirely new possibilities.</p>
<p>If these trends hold, AGI won't just be a milestone—it'll be a transformation.</p>
<p>We're beginning to see early versions of AI agents that can do basic digital tasks: book appointments, sort files, draft emails. Now imagine thousands of such agents working across industries—automating workflows, boosting productivity, and collaborating with humans in creative ways.</p>
<p>It's tempting to think AGI will be a flashy, singular moment. But like the transistor or the internet, it may sneak quietly into the fabric of everyday life. Invisible, ubiquitous, powerful.</p>
<p>That doesn't mean the world will suddenly feel alien. People will still fall in love, laugh at memes, go hiking, binge-watch shows. But behind the scenes, how we work, create, and solve problems may never be the same.</p>
<p>And while the potential is enormous, the distribution of benefits won't be automatic.</p>
<p>Some industries will be reinvented overnight; others may lag. Access to this intelligence may initially cluster in the hands of a few. The challenge is ensuring it lifts all boats—not just the yachts.</p>
<p>That will require decisions—technical, social, political. It's not just about building smarter machines, but about designing systems that share power, opportunity, and control.</p>
<p>People should be able to shape how these tools are used. That means open access, decentralization, and empowering individuals—not just institutions. Centralized control of AGI would be dangerous. It's vital that this future isn't dictated by a handful of corporations or governments.</p>
<p>We need mechanisms to ensure fair access—maybe through policies that distribute compute, or models that are open and auditable. The goal isn't just to create intelligence, but to make it widely and fairly available.</p>
<p>Imagine a world where anyone—regardless of where they're born—can harness intelligence more powerful than today's top experts. A world where the ability to create, heal, discover, and understand is in everyone's hands.</p>
<p>That's a future worth building.</p>
`,
    },
    'crazy-tech-ride': {
      title: 'What I Wish Someone Had Told Me',
      date: '2024-08-15',
      content: `<p>Optimism, obsession, self-belief, raw horsepower and personal connections are how things get started.</p>

      <h2>1. Cohesive Teams and Commitment</h2>
      <p>Cohesive teams, the right combination of calmness and urgency, and unreasonable commitment are how things get finished. Long-term orientation is in short supply; try not to worry about what people think in the short term, which will get easier over time.</p>

      <h2>2. Audacious Ideas Motivate</h2>
      <p>It is easier for a team to do a hard thing that really matters than to do an easy thing that doesn't really matter; audacious ideas motivate people.</p>

      <h2>3. Incentives as Superpowers</h2>
      <p>Incentives are superpowers; set them carefully.</p>

      <h2>4. Concentrate Resources</h2>
      <p>Concentrate your resources on a small number of high-conviction bets; this is easy to say but evidently hard to do. You can delete more stuff than you think.</p>

      <h2>5. Clear Communication</h2>
      <p>Communicate clearly and concisely.</p>

      <h2>6. Fight Bureaucracy</h2>
      <p>Fight bullshit and bureaucracy every time you see it and get other people to fight it too. Do not let the org chart get in the way of people working productively together.</p>

      <h2>7. Focus on Outcomes</h2>
      <p>Outcomes are what count; don't let good process excuse bad results.</p>

      <h2>8. Spend Time Recruiting</h2>
      <p>Spend more time recruiting. Take risks on high-potential people with a fast rate of improvement. Look for evidence of getting stuff done in addition to intelligence.</p>

      <h2>9. Value Superstars</h2>
      <p>Superstars are even more valuable than they seem, but you have to evaluate people on their net impact on the performance of the organization.</p>

      <h2>10. Fast Iteration</h2>
      <p>Fast iteration can make up for a lot; it's usually ok to be wrong if you iterate quickly. Plans should be measured in decades, execution should be measured in weeks.</p>

      <h2>11. Respect Business Physics</h2>
      <p>Don't fight the business equivalent of the laws of physics.</p>

      <h2>12. Inspiration is Perishable</h2>
      <p>Inspiration is perishable and life goes by fast. Inaction is a particularly insidious type of risk.</p>

      <h2>13. Emergent Properties of Scale</h2>
      <p>Scale often has surprising emergent properties.</p>

      <h2>14. Magic of Compounding</h2>
      <p>Compounding exponentials are magic. In particular, you really want to build a business that gets a compounding advantage with scale.</p>

      <h2>15. Persistence</h2>
      <p>Get back up and keep going.</p>

      <h2>16. Value of Great People</h2>
      <p>Working with great people is one of the best parts of life.</p>`,
    },
    'view-counter': {
      title: 'The Strength of Being Misunderstood',
      date: '2024-09-20',
      content: `<p>A founder recently asked me how to stop caring what other people think. I didn't have an answer, and after reflecting on it more, I think it's the wrong question.</p>

      <h2>1. Caring About Opinions</h2>
      <p>Almost everyone cares what someone thinks (though caring what everyone thinks is definitely a mistake), and it's probably important. Caring too much makes you a sheep. But you need to be at least a little in tune with others to do something useful for them.</p>

      <h2>2. Degrees of Freedom</h2>
      <p>It seems like there are two degrees of freedom: you can choose the people whose opinions you care about (and on what subjects), and you can choose the timescale you care about them on. Most people figure out the former but the latter doesn't seem to get much attention.</p>

      <h2>3. Impressive People and Opinions</h2>
      <p>The most impressive people I know care a lot about what people think, even people whose opinions they really shouldn't value (a surprising numbers of them do something like keeping a folder of screenshots of tweets from haters). But what makes them unusual is that they generally care about other people's opinions on a very long time horizon—as long as the history books get it right, they take some pride in letting the newspapers get it wrong.</p>

      <h2>4. Long-Term High-Status</h2>
      <p>You should trade being short-term low-status for being long-term high-status, which most people seem unwilling to do. A common way this happens is by eventually being right about an important but deeply non-consensus bet. But there are lots of other ways–the key observation is that as long as you are right, being misunderstood by most people is a strength not a weakness. You and a small group of rebels get the space to solve an important problem that might otherwise not get solved.</p>`,
    },
    'open-source-contribution': {
      title: 'Hard Startups',
      date: '2024-10-10',
      content: `<p>The most counterintuitive secret about startups is that it's often easier to succeed with a hard startup than an easy one. A hard startup requires a lot more money, time, coordination, or technological development than most startups. A good hard startup is one that will be valuable if it works (not all hard problems are worth solving!).</p>

      <p>I remember when Instagram started to get really popular—it felt like you couldn't go a day without hearing about another photo sharing startup. That year, probably over 1,000 photo sharing startups were funded, while there were fewer than ten nuclear fusion startups in existence.</p>

      <p>Easy startups are easy to start but hard to make successful. The most precious commodity in the startup ecosystem right now is talented people, and for the most part talented people want to work on something they find meaningful.</p>

      <p>A startup eventually has to get a lot of people to join its quest. It's usually reasonably easy to get the first five or ten people to join—you can offer large equity grants and areas of responsibility. But eventually, what you have to recruit with are the mission of the company, the likelihood of massive success, and the quality of the people there.</p>

      <p>Few recruiting messages are as powerful (when true) as "the world needs this, it won't happen any time soon if we don't do it, and we are much less likely to succeed if you don't join."</p>

      <p>There is a derivative of the Peter Principle at play here—your startup will rise to the level where it can no longer attract enough talented people. (This sometimes holds true for careers too—the limiting factor for many careers eventually becomes how many talented people you know and can get to work with you.)</p>

      <p>An easy startup is a headwind; a hard startup is a tailwind. If people care about your success because you seem committed to doing something significant, it's a background force helping you with hiring, advice, partnerships, fundraising, etc.</p>

      <p>Part of the magic of Silicon Valley is that people default to taking you seriously if you're willing to be serious—they've learned it's a very expensive mistake, in aggregate, not to. If you want to start a company working on a better way to build homes, gene editing, artificial general intelligence, a new education system, or carbon sequestration, you may actually be able to get it funded, even if you don't have a degree or much experience.</p>

      <p>Let yourself become more ambitious—figure out the most interesting version of where what you're working on could go. Then talk about that big vision and work relentlessly towards it, but always have a reasonable next step. You don't want step one to be incorporating the company and step two to be going to Mars.</p>

      <p>Be willing to make a very long-term commitment to what you're doing. Most people aren't, which is part of the reason they pick "easy" startups. In a world of compounding advantages where most people are operating on a 3 year timeframe and you're operating on a 10 year timeframe, you'll have a very large edge.</p>

      <p>Another solution to this problem is to think about startups that can become quite successful with less than ten people. As compensation packages from the giant tech companies continue to increase, I suspect this will become a trend.</p>`,
    },
    'rejections-dont-define-you': {
      title: 'The Right Kind of Stubborn',
      date: '2024-08-01',
      content: `
      <h3>Persistence vs. Obstinacy</h3>
      <ul>
        <li>Successful people are persistent and keep trying until they succeed.</li>
        <li>Obstinate people are annoying and refuse to listen or adapt.</li>
        <li>The difference between persistence and obstinacy is not always clear.</li>
      </ul>

      <h3>Behavioral Differences</h3>
      <ul>
        <li>Persistent people are open to feedback and willing to change their approach.</li>
        <li>Obstinate people ignore feedback and stick to their initial ideas.</li>
        <li>Persistent individuals focus on the goal, while obstinate ones focus on their ideas.</li>
      </ul>

      <h3>Reasons for Obstinacy</h3>
      <ul>
        <li>Obstinacy is not simply a result of being overwhelmed or incapable.</li>
        <li>It is a reflexive resistance to changing one's ideas, often leading to stupidity.</li>
        <li>Obstinacy can be a simple, primitive response that works for simple problems but fails for complex ones.</li>
      </ul>

      <h3>Complexity of Persistence</h3>
      <ul>
        <li>Persistence involves energy, imagination, resilience, good judgment, and focus on a goal.</li>
        <li>Energy and imagination drive persistent individuals to keep trying new things.</li>
        <li>Resilience helps them bounce back from setbacks without losing morale.</li>
        <li>Good judgment allows them to make rational decisions based on expected value.</li>
        <li>Focus on a goal provides direction and motivation.</li>
      </ul>

      <h3>Conclusion</h3>
      <ul>
        <li>The right kind of stubbornness is rare and involves a complex set of qualities.</li>
        <li>It leads to better results and is more likely to succeed in solving hard problems.</li>
        <li>Anyone can be obstinate, but very few possess the qualities needed for the right kind of stubbornness.</li>
      </ul>`,
    },
    'rollercoaster-ride': {
      title: 'Putting Ideas into Words',
      date: 'February 2022',
      content: `
      <p>Writing about something, even something you know well, usually shows you that you didn't know it as well as you thought. Putting ideas into words is a severe test. The first words you choose are usually wrong; you have to rewrite sentences over and over to get them exactly right. And your ideas won't just be imprecise, but incomplete too. Half the ideas that end up in an essay will be ones you thought of while you were writing it. Indeed, that's why I write them.</p>

      <p>Once you publish something, the convention is that whatever you wrote was what you thought before you wrote it. These were your ideas, and now you've expressed them. But you know this isn't true. You know that putting your ideas into words changed them. And not just the ideas you published. Presumably, there were others that turned out to be too broken to fix, and those you discarded instead.</p>

      <p>It's not just having to commit your ideas to specific words that makes writing so exacting. The real test is reading what you've written. You have to pretend to be a neutral reader who knows nothing of what's in your head, only what you wrote. When he reads what you wrote, does it seem correct? Does it seem complete? If you make an effort, you can read your writing as if you were a complete stranger, and when you do, the news is usually bad. It takes me many cycles before I can get an essay past the stranger. But the stranger is rational, so you always can, if you ask him what he needs. If he's not satisfied because you failed to mention x or didn't qualify some sentence sufficiently, then you mention x or add more qualifications. Happy now? It may cost you some nice sentences, but you have to resign yourself to that. You just have to make them as good as you can and still satisfy the stranger.</p>

      <p>This much, I assume, won't be that controversial. I think it will accord with the experience of anyone who has tried to write about anything nontrivial. There may exist people whose thoughts are so perfectly formed that they just flow straight into words. But I've never known anyone who could do this, and if I met someone who said they could, it would seem evidence of their limitations rather than their ability. Indeed, this is a trope in movies: the guy who claims to have a plan for doing some difficult thing, and who, when questioned further, taps his head and says "It's all up here." Everyone watching the movie knows what that means. At best, the plan is vague and incomplete. Very likely, there's some undiscovered flaw that invalidates it completely. At best, it's a plan for a plan.</p>

      <p>In precisely defined domains, it's possible to form complete ideas in your head. People can play chess in their heads, for example. And mathematicians can do some amount of math in their heads, though they don't seem to feel sure of a proof over a certain length till they write it down. But this only seems possible with ideas you can express in a formal language. Arguably, what such people are doing is putting ideas into words in their heads. I can, to some extent, write essays in my head. I'll sometimes think of a paragraph while walking or lying in bed that survives nearly unchanged in the final version. But really, I'm writing when I do this. I'm doing the mental part of writing; my fingers just aren't moving as I do it.</p>

      <p>You can know a great deal about something without writing about it. Can you ever know so much that you wouldn't learn more from trying to explain what you know? I don't think so. I've written about at least two subjects I know well — Lisp hacking and startups — and in both cases, I learned a lot from writing about them. In both cases, there were things I didn't consciously realize till I had to explain them. And I don't think my experience was anomalous. A great deal of knowledge is unconscious, and experts have, if anything, a higher proportion of unconscious knowledge than beginners.</p>

      <p>I'm not saying that writing is the best way to explore all ideas. If you have ideas about architecture, presumably the best way to explore them is to build actual buildings. What I'm saying is that however much you learn from exploring ideas in other ways, you'll still learn new things from writing about them.</p>

      <p>Putting ideas into words doesn't have to mean writing, of course. You can also do it the old way, by talking. But in my experience, writing is the stricter test. You have to commit to a single, optimal sequence of words. Less can go unsaid when you don't have tone of voice to carry meaning. And you can focus in a way that would seem excessive in conversation. I'll often spend two weeks on an essay and reread drafts 50 times. If you did that in conversation, it would seem evidence of some kind of mental disorder. If you're lazy, of course, writing and talking are equally useless. But if you want to push yourself to get things right, writing is the steeper hill.</p>

      <p>The reason I've spent so long establishing this rather obvious point is that it leads to another that many people will find shocking. If writing down your ideas always makes them more precise and more complete, then no one who hasn't written about a topic has fully formed ideas about it. And someone who never writes has no fully formed ideas about anything nontrivial.</p>

      <p>It feels to them as if they do, especially if they're not in the habit of critically examining their own thinking. Ideas can feel complete. It's only when you try to put them into words that you discover they're not. So if you never subject your ideas to that test, you'll not only never have fully formed ideas, but also never realize it.</p>

      <p>Putting ideas into words is certainly no guarantee that they'll be right. Far from it. But though it's not a sufficient condition, it is a necessary one.</p>

      <h3>Notes</h3>
      <ol>
        <li>Machinery and circuits are formal languages.</li>
        <li>I thought of this sentence as I was walking down the street in Palo Alto.</li>
        <li>There are two senses of talking to someone: a strict sense in which the conversation is verbal, and a more general sense in which it can take any form, including writing. In the limit case (e.g., Seneca's letters), conversation in the latter sense becomes essay writing. It can be very useful to talk (in either sense) with other people as you're writing something. But a verbal conversation will never be more exacting than when you're talking about something you're writing.</li>
      </ol>
      `,
    },
    'coding-journey': {
      title: 'Is Good Taste Real?',
      date: '2023-07-15',
      content: `<p>When I was a kid, I thought good taste didn't exist. My dad said it was all subjective. But I eventually realized he was wrong, not by argument but by experience.</p>

<p>If good taste doesn't exist, then good art doesn't either. You can't say someone has better taste if no art is objectively better than another. That would mean no one can be good at making art. Not painters, not writers, not filmmakers. But that's clearly not true.</p>

<p>When I learned to paint, it became obvious. Leonardo wasn't just famous. He was better. You could try to copy his work and feel the gap. That's how I knew: taste is real.</p>

<p>So why do people doubt it? One reason is that taste gets confused with popularity, fashion, or prestige. Another is that people often disagree. But disagreement doesn't prove nonexistence. It just shows the signal is noisy.</p>

<p>Art is made for humans. And while humans vary, we're not random. If most knowledgeable people tend to respond similarly to certain work, that's enough to say the work has value. It's not binary. It's probabilistic. Like a vaccine's effectiveness isn't universal, but we still measure it.</p>

<p>Great art works on people. Some art works better. Some people understand that better. So while perfect taste may not exist, good taste definitely does.</p>`,
    },
    'approach-frontend': {
      title: 'Superlinear Returns',
      date: '2023-05-27',
      content: `<p>In Superlinear Returns, one of the most critical but underappreciated ideas shaping success is that performance and reward are not linearly related. Instead, rewards tend to grow disproportionately, often exponentially, with performance.</p>

<p>Growing up, we are taught a linear model of effort and reward — "you get out what you put in." But in reality, this is rarely the case. If your product is half as good as a competitor's, you may not earn half the market — you might earn none. The best performers in a field tend to dominate disproportionately, regardless of how hard they try.</p>

<h2>Linear vs. Superlinear Thinking</h2>
<p>Superlinear returns describe how small differences in performance can lead to huge differences in rewards due to compounding effects and threshold crossings.</p>

<h2>1. Exponential Growth</h2>
<p>Progress that compounds over time can lead to exponential increases. Knowledge, infrastructure, and network effects build upon themselves, creating rapidly escalating outcomes.</p>

<h2>2. Threshold Effects</h2>
<p>Crossing a threshold — even by a small margin — can unlock outsized rewards. Whether it's winning a competition, securing a key customer, or achieving product-market fit, surpassing critical thresholds often catalyzes further growth.</p>

<h2>How to Find Superlinear Opportunities</h2>
<ul>
  <li>Seek activities that compound: deep learning, building infrastructure, and cultivating networks.</li>
  <li>Always be learning: knowledge itself compounds and accelerates future progress.</li>
  <li>Identify areas of replaceable mediocrity: opportunities arise where popular solutions are flawed.</li>
  <li>Explore underexamined frontiers: breakthroughs often come from unexpected or overlooked areas.</li>
</ul>
<p>Understanding superlinear returns offers a roadmap: work where gains compound and push through thresholds to unlock exponential potential.</p>`,
    },
  };

  const post =
    blogPosts[slug as keyof typeof blogPosts] || {
      title: 'Putting Ideas into Words',
      date: '2024-02-05',
      content: '',
    };

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
        </div>

        <article
          className="prose prose-quoteless prose-gray dark:prose-invert max-w-3xl dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  );
}