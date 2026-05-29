"use client";

import { useMemo, useState } from "react";
import { THREATS } from "./data";

type View = "default" | "share" | "sub";

const VIEW_TABS: { id: View; label: string }[] = [
  { id: "default", label: "Strategic position" },
  { id: "share", label: "Market share" },
  { id: "sub", label: "Subscription power" },
];

export default function ThreatsGrid() {
  const [view, setView] = useState<View>("default");

  const ordered = useMemo(() => {
    const cards = [...THREATS];
    if (view === "share") {
      cards.sort((a, b) => b.shareScore - a.shareScore);
    } else if (view === "sub") {
      cards.sort((a, b) => a.subScore - b.subScore);
    } else {
      cards.sort((a, b) => a.defaultOrder - b.defaultOrder);
    }
    return cards;
  }, [view]);

  return (
    <>
      <div className="flex items-center gap-3 flex-wrap mb-8">
        <span className="text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] font-medium">
          Reorder:
        </span>
        {VIEW_TABS.map((tab) => {
          const active = view === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setView(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-[13px] font-light transition-all border ${
                active
                  ? "bg-[#d4a853] border-[#d4a853] text-[#0a0a0a]"
                  : "bg-white border-[#e8e6df] text-[#4a4a48] hover:border-[#d4a853]/60 hover:text-[#0a0a0a]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ordered.map((t) => (
          <div
            key={t.brand}
            className="bg-white border border-[#e8e6df] rounded-xl p-6 flex flex-col gap-3 transition-all hover:border-[#d4a853]/60 hover:shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            <span className="self-start text-[10px] tracking-[0.18em] uppercase font-semibold text-[#9a6e0c] bg-[#fdf6e8] border border-[#e8d9a8] px-2 py-1 rounded">
              {t.sharePill}
            </span>
            <div className="text-xl font-semibold text-[#0a0a0a] leading-tight tracking-tight">
              {t.brand}
            </div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] font-medium">
              {t.position}
            </div>
            <p
              className="text-[14.5px] text-[#4a4a48] font-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.body }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
