import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Link from "next/link";

export const metadata = {
  title: "Blog & Articles | SFR Solicitors",
  description: "Read our latest legal insights, news, and guides.",
};

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Criminal Injuries Compensation Scheme",
    category: "CICA Claims",
    date: "October 12, 2023",
    excerpt: "Navigating a CICA claim can be difficult. This guide covers the basics of eligibility and what to expect during the application process.",
    slug: "#",
  },
  {
    id: 2,
    title: "Key Changes to UK Immigration Rules in 2024",
    category: "Immigration",
    date: "September 28, 2023",
    excerpt: "An overview of the recent adjustments to the UK immigration system and how they might affect your visa or settlement applications.",
    slug: "#",
  },
  {
    id: 3,
    title: "What to Do Immediately After a Road Traffic Accident",
    category: "Personal Injury",
    date: "August 15, 2023",
    excerpt: "Protect your health and your legal rights by following these essential steps immediately after a collision.",
    slug: "#",
  },
  {
    id: 4,
    title: "Resolving Commercial Disputes Without Going to Court",
    category: "Litigation",
    date: "July 22, 2023",
    excerpt: "Litigation is not the only option. Learn how alternative dispute resolution can save your business time and money.",
    slug: "#",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        {/* Blog Hero */}
        <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 bg-parchment border-b border-paper-line">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(122,46,46,0.08),transparent_70%)] blur-2xl"
          />
          <div className="relative mx-auto max-w-wrap text-center">
            <Reveal className="mb-7 inline-flex items-center gap-2.5 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-oxblood" aria-hidden="true" />
              <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-oxblood">
                Legal Insights
              </span>
            </Reveal>

            <Reveal as="h1" delay={80} className="mx-auto max-w-[20ch] text-[clamp(2.4rem,4.6vw,3.7rem)] font-semibold leading-[1.04]">
              News, Articles, and Guidance.
            </Reveal>

            <Reveal
              as="p"
              delay={160}
              className="mx-auto mt-6 max-w-[55ch] text-[1.15rem] leading-[1.65] text-muted"
            >
              Stay informed with our latest updates on legal developments, firm news, and practical guides to help you understand your legal position.
            </Reveal>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-5 py-24 sm:px-8 bg-parchment">
          <div className="mx-auto max-w-wrap">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
              {blogPosts.map((post, index) => (
                <Reveal key={post.id} delay={index * 100}>
                  <Link href={post.slug} className="group block h-full flex-col rounded-sm border border-paper-line bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="inline-block rounded bg-parchment-2 px-3 py-1 font-mono text-[0.75rem] font-semibold text-oxblood">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">{post.date}</span>
                      </div>
                      <h2 className="mb-4 text-[1.5rem] font-bold leading-[1.25] text-ink group-hover:text-oxblood transition-colors">
                        {post.title}
                      </h2>
                      <p className="mb-8 text-[1rem] leading-relaxed text-muted flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center text-[0.9rem] font-semibold text-oxblood">
                        Read Article
                        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={400} className="mt-16 flex justify-center">
               <button disabled className="inline-flex items-center justify-center rounded border border-paper-line bg-transparent px-6 py-3 font-mono text-[0.85rem] font-semibold tracking-wider text-ink opacity-50 cursor-not-allowed">
                 Load More Articles
               </button>
            </Reveal>
          </div>
        </section>

        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
