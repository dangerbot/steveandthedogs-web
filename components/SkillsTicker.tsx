const tools = [
  "Figma",
  "Framer",
  "Sketch",
  "Photoshop",
  "Illustrator",
  "Claude",
  "Gemini",
  "ChatGPT",
  "Cursor",
  "Lovable",
  "Supabase",
  "GitHub",
  "Jira",
  "Notion",
];

const skills = [
  "UX/UI",
  "Product Strategy",
  "Agile",
  "PRDs",
  "Roadmaps",
  "GTM",
  "Growth",
  "AI/LLM",
  "B2C",
  "B2B",
  "B2B2C",
  "Data Science",
  "User Research",
  "Design Thinking",
];

function TickerRow({
  items,
  label,
  direction = "forward",
}: {
  items: string[];
  label: string;
  direction?: "forward" | "reverse";
}) {
  const doubled = [...items, ...items];
  const animClass =
    direction === "reverse" ? "animate-ticker-reverse" : "animate-ticker";

  return (
    <div className="flex items-center border-b border-[#222222] last:border-b-0">
      {/* Label */}
      <div className="shrink-0 w-16 md:w-20 px-4 flex items-center justify-center border-r border-[#222222] self-stretch">
        <span className="text-[9px] tracking-[0.25em] uppercase font-light text-[#555] rotate-0 whitespace-nowrap">
          {label}
        </span>
      </div>

      {/* Scrolling strip */}
      <div className="flex-1 overflow-hidden py-4" aria-label={label}>
        <div className={`flex w-max ${animClass}`}>
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="text-sm font-light tracking-widest uppercase text-[#888888] px-6 hover:text-[#d4a853] transition-colors cursor-default">
                {item}
              </span>
              <span className="text-[#d4a853] text-xs opacity-30">⚡</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsTicker() {
  return (
    <div className="bg-[#0d0d0d] border-y border-[#222222]">
      <TickerRow items={tools} label="Tools" direction="forward" />
      <TickerRow items={skills} label="Skills" direction="reverse" />
    </div>
  );
}
