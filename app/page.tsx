import Hero from "@/components/Hero";
import ValuesSection from "@/components/ValuesSection";
import BioCard from "@/components/BioCard";
import WhatICanDo from "@/components/WhatICanDo";
import ExpertiseSection from "@/components/ExpertiseSection";
import ConnectSection from "@/components/ConnectSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValuesSection />
      <BioCard />
      <WhatICanDo />
      <ExpertiseSection />
      <ConnectSection />
    </main>
  );
}
