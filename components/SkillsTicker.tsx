const skills = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "Framer",
  "Agile",
  "Sketch",
  "Design",
  "UX/UI",
  "PRDs",
  "Roadmaps",
  "GTM",
  "Growth",
  "Lovable",
  "Cursor",
  "AI Tools",
  "OKRs",
  "Sprint Planning",
  "User Research",
  "A/B Testing",
  "Data Analysis",
];

export default function SkillsTicker() {
  // Duplicate for seamless loop
  const doubled = [...skills, ...skills];

  return (
    <div
      className="overflow-hidden border-y border-[#222222] py-4 bg-[#0d0d0d]"
      aria-label="Skills"
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((skill, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-sm font-light tracking-widest uppercase text-[#888888] px-6 hover:text-[#d4a853] transition-colors cursor-default">
              {skill}
            </span>
            <span className="text-[#d4a853] text-xs opacity-40">⚡</span>
          </span>
        ))}
      </div>
    </div>
  );
}
