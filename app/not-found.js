import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Page Not Found | SFR Solicitors",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[65vh] flex-col items-center justify-center px-5 py-24 text-center sm:px-8 bg-parchment">
        <Reveal variant="fade" className="flex flex-col items-center">
          <span className="mb-4 inline-block rounded-full bg-oxblood/10 px-4 py-1.5 font-mono text-sm font-semibold tracking-wider text-oxblood">
            ERROR 404
          </span>
          <h1 className="font-display text-[3rem] font-extrabold leading-[1.1] sm:text-[4rem]">
            Page Not Found
          </h1>
          <p className="mt-6 max-w-lg text-[1.1rem] leading-relaxed text-gray-600">
            We couldn't find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded bg-oxblood px-6 py-3.5 font-mono text-[0.85rem] font-semibold tracking-wider text-white transition-all duration-200 ease-spring hover:-translate-y-0.5 hover:bg-oxblood-dark hover:shadow-glow-oxblood"
            >
              Return to Homepage
            </Link>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
