import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CaseFile from "@/components/sections/CaseFile";
import Principles from "@/components/sections/Principles";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQ from "@/components/sections/FAQ";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { practiceAreas } from "@/lib/data/practice-areas";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {practiceAreas.map((area) => (
          <CaseFile key={area.id} area={area} />
        ))}

        <Principles />
        <ProcessSteps />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
