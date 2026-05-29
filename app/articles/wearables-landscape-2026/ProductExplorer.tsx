"use client";

import { useMemo, useState } from "react";
import {
  PRODUCTS,
  CATEGORIES,
  FEATURE_FILTERS,
  type Product,
} from "./data";
import FormIcon from "./FormIcon";

type View = "picks" | "all";
type SortKey = "name" | "category" | "price" | "batteryHours";
type SortDir = "asc" | "desc";

export default function ProductExplorer() {
  const [view, setView] = useState<View>("picks");
  const [cats, setCats] = useState<Set<string>>(new Set());
  const [brands, setBrands] = useState<Set<string>>(new Set());
  const [features, setFeatures] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("category");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const allBrands = useMemo(
    () => [...new Set(PRODUCTS.map((p) => p.brand))].sort(),
    [],
  );

  const toggle = (
    set: Set<string>,
    setter: (s: Set<string>) => void,
    val: string,
  ) => {
    const next = new Set(set);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    setter(next);
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      if (view === "picks" && !p.stevesPick) return false;
      if (cats.size > 0 && !cats.has(p.category)) return false;
      if (brands.size > 0 && !brands.has(p.brand)) return false;
      if (features.size > 0) {
        for (const feat of features) {
          if (feat === "AI") {
            if (!p.hasAI) return false;
          } else if (feat === "NoSub") {
            if (p.subReq) return false;
          } else if (feat === "FDA") {
            if (!p.fda || p.fda.length === 0) return false;
          } else if (
            !p.features.some((f) =>
              f.toLowerCase().includes(feat.toLowerCase()),
            )
          ) {
            return false;
          }
        }
      }
      if (q) {
        const blob = (
          p.name +
          " " +
          p.brand +
          " " +
          p.category +
          " " +
          p.features.join(" ")
        ).toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }, [view, cats, brands, features, search]);

  const sorted = useMemo(() => {
    const dir = sortDir === "asc" ? 1 : -1;
    return [...filtered].sort((a, b) => {
      if (sortKey === "price" || sortKey === "batteryHours") {
        return (a[sortKey] - b[sortKey]) * dir;
      }
      const av = (a[sortKey] || "").toString().toLowerCase();
      const bv = (b[sortKey] || "").toString().toLowerCase();
      return av.localeCompare(bv) * dir;
    });
  }, [filtered, sortKey, sortDir]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const resetFilters = () => {
    setView("picks");
    setCats(new Set());
    setBrands(new Set());
    setFeatures(new Set());
    setSearch("");
    setSortKey("category");
    setSortDir("asc");
  };

  const picksCount = PRODUCTS.filter((p) => p.stevesPick).length;

  return (
    <div>
      {/* Controls */}
      <div className="bg-white border border-[#e8e6df] rounded-xl p-5 mb-5 flex flex-col gap-4">
        {/* View row */}
        <ControlRow label="View">
          <Chip
            active={view === "picks"}
            onClick={() => setView("picks")}
            count={picksCount}
            label="Steve's Picks"
          />
          <Chip
            active={view === "all"}
            onClick={() => setView("all")}
            count={PRODUCTS.length}
            label="All Products"
          />
        </ControlRow>

        {/* Category row */}
        <ControlRow label="Category">
          <Chip
            active={cats.size === 0}
            onClick={() => setCats(new Set())}
            label="All"
          />
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              active={cats.has(cat)}
              onClick={() => toggle(cats, setCats, cat)}
              count={PRODUCTS.filter((p) => p.category === cat).length}
              label={cat}
            />
          ))}
        </ControlRow>

        {/* Brand row */}
        <ControlRow label="Brand">
          <Chip
            active={brands.size === 0}
            onClick={() => setBrands(new Set())}
            label="All"
          />
          {allBrands.map((b) => (
            <Chip
              key={b}
              active={brands.has(b)}
              onClick={() => toggle(brands, setBrands, b)}
              label={b}
              compact
            />
          ))}
        </ControlRow>

        {/* Feature row */}
        <ControlRow label="Feature">
          {FEATURE_FILTERS.map((f) => (
            <Chip
              key={f.id}
              active={features.has(f.id)}
              onClick={() => toggle(features, setFeatures, f.id)}
              label={f.label}
              compact
            />
          ))}
        </ControlRow>

        {/* Search row */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <span className="text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] font-medium sm:w-20 shrink-0">
            Search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by product or brand..."
            className="flex-1 px-4 py-2 border border-[#e8e6df] rounded-full bg-white text-[14px] text-[#0a0a0a] placeholder:text-[#a3a39a] focus:outline-none focus:border-[#d4a853]"
          />
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-[13px] font-medium text-[#9a6e0c] border border-[#e8d9a8] bg-[#fdf6e8] rounded-full hover:bg-[#f8ecd0] transition-colors"
          >
            Reset filters
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 text-[12px] text-[#8a8a85] font-light mb-3 px-1">
        <span>
          Showing <strong className="text-[#0a0a0a]">{sorted.length}</strong> of{" "}
          <strong className="text-[#0a0a0a]">{PRODUCTS.length}</strong> products
        </span>
        <span>·</span>
        <span>
          Sorted by{" "}
          <strong className="text-[#0a0a0a]">
            {sortKey} ({sortDir})
          </strong>
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border border-[#e8e6df] rounded-xl">
        <table className="w-full border-collapse text-[13.5px] min-w-[920px]">
          <thead>
            <tr className="border-b border-[#e8e6df] bg-[#f5f4ef]">
              <th className="w-12 px-2 py-3"></th>
              <SortHeader
                label="Product"
                col="name"
                sortKey={sortKey}
                sortDir={sortDir}
                onClick={() => handleSort("name")}
              />
              <SortHeader
                label="Category"
                col="category"
                sortKey={sortKey}
                sortDir={sortDir}
                onClick={() => handleSort("category")}
              />
              <SortHeader
                label="Price"
                col="price"
                sortKey={sortKey}
                sortDir={sortDir}
                onClick={() => handleSort("price")}
              />
              <SortHeader
                label="Battery"
                col="batteryHours"
                sortKey={sortKey}
                sortDir={sortDir}
                onClick={() => handleSort("batteryHours")}
              />
              <th className="text-left px-3 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Health features
              </th>
              <th className="text-left px-3 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Subscription
              </th>
              <th className="text-left px-3 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Platform
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="text-center py-10 text-[#8a8a85] font-light"
                >
                  No products match your filters.{" "}
                  <button
                    onClick={resetFilters}
                    className="ml-2 px-3 py-1 text-[12px] font-medium text-[#9a6e0c] border border-[#e8d9a8] bg-[#fdf6e8] rounded-full"
                  >
                    Reset filters
                  </button>
                </td>
              </tr>
            ) : (
              sorted.map((p) => <ProductRow key={p.name} p={p} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ControlRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-start">
      <span className="text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] font-medium sm:w-20 sm:pt-1.5 shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-2 flex-1">{children}</div>
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
  count,
  compact,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count?: number;
  compact?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all ${
        compact
          ? "px-2.5 py-1 text-[12px]"
          : "px-3 py-1.5 text-[12.5px]"
      } ${
        active
          ? "bg-[#d4a853] border-[#d4a853] text-[#0a0a0a] font-medium"
          : "bg-white border-[#e8e6df] text-[#4a4a48] hover:border-[#d4a853]/60 hover:text-[#0a0a0a]"
      }`}
    >
      {label}
      {count !== undefined && (
        <span
          className={`text-[10.5px] ${active ? "text-[#0a0a0a]/60" : "text-[#a3a39a]"}`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function SortHeader({
  label,
  col,
  sortKey,
  sortDir,
  onClick,
}: {
  label: string;
  col: SortKey;
  sortKey: SortKey;
  sortDir: SortDir;
  onClick: () => void;
}) {
  const active = sortKey === col;
  return (
    <th
      onClick={onClick}
      className={`text-left px-3 py-3 text-[11px] tracking-[0.12em] uppercase font-semibold cursor-pointer select-none transition-colors ${
        active ? "text-[#0a0a0a]" : "text-[#4a4a48] hover:text-[#0a0a0a]"
      }`}
    >
      {label}{" "}
      <span className={`text-[10px] ${active ? "text-[#d4a853]" : "text-[#a3a39a]"}`}>
        {active ? (sortDir === "asc" ? "▴" : "▾") : "▾"}
      </span>
    </th>
  );
}

function ProductRow({ p }: { p: Product }) {
  return (
    <tr className="border-b border-[#f0eee7] last:border-b-0 hover:bg-[#faf9f5] transition-colors align-top">
      <td className="px-3 py-4 text-[#8a8a85]">
        <FormIcon form={p.form} />
      </td>
      <td className="px-3 py-4">
        <div className="font-semibold text-[#0a0a0a] leading-tight">
          {p.name}
          {p.stevesPick && (
            <span className="ml-2 text-[9.5px] tracking-[0.16em] uppercase font-semibold text-[#9a6e0c] bg-[#fdf6e8] border border-[#e8d9a8] px-1.5 py-0.5 rounded">
              Pick
            </span>
          )}
        </div>
        <div className="text-[12px] text-[#8a8a85] font-light mt-0.5">
          {p.brand}
        </div>
      </td>
      <td className="px-3 py-4 text-[13px] text-[#4a4a48] font-light whitespace-nowrap">
        {p.category}
      </td>
      <td className="px-3 py-4 text-[13px] text-[#0a0a0a] font-medium whitespace-nowrap">
        {p.priceDisp}
      </td>
      <td className="px-3 py-4 text-[13px] text-[#4a4a48] font-light whitespace-nowrap">
        {p.batteryDisp}
      </td>
      <td className="px-3 py-4">
        <div className="flex flex-wrap gap-1">
          {p.features.map((f) => {
            const isFDA = p.fda?.includes(f);
            const isAI =
              f.toLowerCase().includes("coach") ||
              f.toLowerCase().includes("ai");
            const cls = isFDA
              ? "bg-[#fdf6e8] border-[#e8d9a8] text-[#9a6e0c]"
              : isAI
                ? "bg-[#f3eee2] border-[#dccfa5] text-[#5a4318]"
                : "bg-[#f5f4ef] border-[#e8e6df] text-[#404040]";
            return (
              <span
                key={f}
                className={`text-[10.5px] tracking-wide font-medium border px-1.5 py-0.5 rounded ${cls}`}
              >
                {f}
              </span>
            );
          })}
        </div>
      </td>
      <td className="px-3 py-4 text-[12.5px] text-[#4a4a48] font-light leading-snug">
        {p.sub}
        {p.subReq && (
          <div className="mt-0.5 text-[10.5px] tracking-[0.12em] uppercase font-semibold text-[#9a6e0c]">
            Required
          </div>
        )}
      </td>
      <td className="px-3 py-4 text-[12.5px] text-[#4a4a48] font-light whitespace-nowrap">
        {p.platform}
      </td>
    </tr>
  );
}
