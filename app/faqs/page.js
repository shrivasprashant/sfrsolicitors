import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata = {
  title: "FAQs | SFR Solicitors",
  description: "Frequently asked questions about our legal services.",
};

export default function FAQsPage() {
  return (
    <>
      <Header />
      <main>
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
