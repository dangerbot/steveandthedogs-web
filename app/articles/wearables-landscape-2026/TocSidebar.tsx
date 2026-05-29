"use client";

import { useEffect, useState } from "react";

interface SectionEntry {
  id: string;
  num: string;
  label: string;
}

const SECTIONS: SectionEntry[] = [
  { id: "recent", num: "02", label: "The last six months" },
  { id: "landscape", num: "03", label: "The players" },
  { id: "pov", num: "04", label: "Point of view" },
  { id: "explorer", num: "05", label: "Product explorer" },
  { id: "subscriptions", num: "06", label: "Subscriptions" },
  { id: "narratives", num: "07", label: "Category narratives" },
  { id: "medical", num: "08", label: "Medical & fringe" },
  { id: "bets", num: "09", label: "Where it's going" },
  { id: "charts", num: "10", label: "Shape of the market" },
  { id: "timeline", num: "11", label: "How we got here" },
  { id: "fieldnotes", num: "12", label: "Field notes" },
  { id: "references", num: "13", label: "References" },
  { id: "author", num: "14", label: "Author" },
];

export default function TocSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) =>
      document.getElementById(s.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry highest on the page that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const width = collapsed ? 56 : 224;

  return (
    <>
      {/* Spacer so flex layout reserves space for the fixed sidebar */}
      <div
        aria-hidden
        className="hidden lg:block shrink-0 transition-[width] duration-200 ease-out"
        style={{ width }}
      />

      <nav
        aria-label="On this page"
        className="hidden lg:flex flex-col fixed top-16 left-0 bottom-0 z-30 bg-white/85 backdrop-blur-sm border-r border-[#e8e6df] transition-[width] duration-200 ease-out overflow-hidden"
        style={{ width }}
      >
        {/* Header / collapse toggle */}
        <div
          className={`flex items-center border-b border-[#e8e6df] h-12 px-3 ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!collapsed && (
            <span className="text-[10.5px] tracking-[0.22em] uppercase font-semibold text-[#8a8a85]">
              On this page
            </span>
          )}
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            aria-expanded={!collapsed}
            aria-label={
              collapsed ? "Expand table of contents" : "Collapse table of contents"
            }
            className="w-7 h-7 inline-flex items-center justify-center rounded-md text-[#8a8a85] hover:text-[#0a0a0a] hover:bg-[#f5f4ef] transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
              aria-hidden
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>

        {/* Section list */}
        <ul className="flex-1 overflow-y-auto py-3">
          {SECTIONS.map((s) => {
            const isActive = activeId === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  title={collapsed ? s.label : undefined}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative flex items-center gap-3 ${
                    collapsed ? "justify-center px-2" : "pl-4 pr-3"
                  } py-2 text-[12.5px] transition-colors ${
                    isActive
                      ? "bg-[#fdf6e8] text-[#0a0a0a]"
                      : "text-[#4a4a48] hover:bg-[#faf9f5] hover:text-[#0a0a0a]"
                  }`}
                >
                  {/* Active left bar */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1 bottom-1 w-[2px] rounded-r bg-[#d4a853] transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`tabular-nums text-[11px] tracking-wider font-semibold shrink-0 ${
                      isActive ? "text-[#d4a853]" : "text-[#a3a39a]"
                    }`}
                  >
                    {s.num}
                  </span>
                  {!collapsed && (
                    <span
                      className={`truncate font-light ${isActive ? "font-medium" : ""}`}
                    >
                      {s.label}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Back to top */}
        <div className="border-t border-[#e8e6df] p-2">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            title={collapsed ? "Back to top" : undefined}
            className={`flex items-center gap-2 ${
              collapsed ? "justify-center" : "px-3"
            } py-2 rounded-md text-[11.5px] tracking-wide font-medium text-[#8a8a85] hover:text-[#0a0a0a] hover:bg-[#faf9f5] transition-colors`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            {!collapsed && <span>Back to top</span>}
          </a>
        </div>
      </nav>
    </>
  );
}
