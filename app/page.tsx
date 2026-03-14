import Hero from "@/components/Hero";
import ValuesSection from "@/components/ValuesSection";
import BioCard from "@/components/BioCard";
import WhatICanDo from "@/components/WhatICanDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValuesSection />
      <BioCard />
      <WhatICanDo />
    </main>
  );
}
