"use client";

import { useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
  type Chart as ChartType,
  type ChartOptions,
  type Plugin,
} from "chart.js";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { SHARE_CHART, FORM_CHART, GROWTH_CHART } from "./data";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
);

const ACCENT = "#d4a853";
const ACCENT_DEEP = "#9a6e0c";

// Donut palette — site amber for Apple lead, neutral grays for the rest
const PALETTE = [
  ACCENT, // Apple
  "#0a0a0a", // Huawei
  "#4a4a48", // Samsung
  "#9a6e0c", // Xiaomi
  "#737373", // Indian brands
  "#a3a39a", // Imoo
  "#5b21b6", // Garmin
  "#8a8a85", // Google/Fitbit
  "#b8b4a8", // Honor
  "#d4d2c8", // Other
];

// ─── Share donut ────────────────────────────────────────────────────────────

export function ShareChart() {
  const data = useMemo(
    () => ({
      labels: SHARE_CHART.labels,
      datasets: [
        {
          label: "Smartwatch shipment share",
          data: SHARE_CHART.data,
          backgroundColor: PALETTE,
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    }),
    [],
  );

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "62%",
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#4a4a48",
          font: { family: "Inter, -apple-system, sans-serif", size: 12 },
          boxWidth: 10,
          padding: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            ` ${ctx.label}: ${ctx.parsed}% of smartwatch shipments`,
        },
      },
    },
  };

  return (
    <div className="h-[320px]">
      <Doughnut data={data} options={options} />
    </div>
  );
}

// ─── Form factor momentum bar ───────────────────────────────────────────────

const TIER_COLORS: Record<1 | 2 | 3, string> = {
  1: ACCENT,
  2: "#0a0a0a",
  3: "#a3a39a",
};
const TIER_NAMES: Record<1 | 2 | 3, string> = {
  1: "BREAKOUT",
  2: "GROWING",
  3: "MATURE / NICHE",
};
const FORM_SORTED = [...FORM_CHART].sort((a, b) => b.score - a.score);

export function FormFactorChart() {
  const sorted = FORM_SORTED;

  const data = {
    labels: sorted.map((d) => d.label),
    datasets: [
      {
        label: "Momentum",
        data: sorted.map((d) => d.score),
        backgroundColor: sorted.map((d) => TIER_COLORS[d.tier]),
        borderRadius: 3,
        barThickness: 18,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0a0a0a",
        padding: 12,
        titleFont: { size: 13, weight: 700 },
        bodyFont: { size: 12 },
        titleColor: "#ffffff",
        bodyColor: "#d4d2c8",
        displayColors: false,
        callbacks: {
          title: (items) => {
            const d = sorted[items[0].dataIndex];
            return `${d.label} — ${TIER_NAMES[d.tier]}`;
          },
          label: () => "",
          afterBody: (items) => {
            const d = sorted[items[0].dataIndex];
            // wrap driver text
            const words = d.driver.split(" ");
            const lines: string[] = [];
            let line = "";
            for (const w of words) {
              if ((line + " " + w).trim().length > 52) {
                lines.push(line.trim());
                line = w;
              } else {
                line += " " + w;
              }
            }
            if (line.trim()) lines.push(line.trim());
            return lines;
          },
        },
      },
    },
    scales: {
      x: { display: false, max: 100 },
      y: {
        ticks: { color: "#0a0a0a", font: { size: 12, weight: 500 } },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="h-[360px]">
      <Bar data={data} options={options} />
    </div>
  );
}

// ─── Growth line chart with milestone markers ───────────────────────────────

const milestonePlugin: Plugin<"line"> = {
  id: "milestones",
  afterDatasetsDraw(chart: ChartType<"line">) {
    const opts = chart.options.plugins as Record<string, unknown> | undefined;
    const milestones = opts?.milestones as
      | { items?: { year: string; label: string; color?: string }[] }
      | undefined;
    const items = milestones?.items;
    if (!items) return;
    const {
      ctx,
      chartArea: { top, bottom },
      scales: { x },
    } = chart;
    items.forEach((m) => {
      const idx = (chart.data.labels as string[]).indexOf(m.year);
      if (idx === -1) return;
      const xPos = x.getPixelForValue(idx);
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = "#a3a39a";
      ctx.lineWidth = 1;
      ctx.moveTo(xPos, top + 22);
      ctx.lineTo(xPos, bottom);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.font = "600 10px Inter, -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const text = m.label;
      const tw = ctx.measureText(text).width;
      const padX = 7;
      const h = 17;
      const yLabel = top + 2;
      ctx.fillStyle = m.color || "#0a0a0a";
      ctx.fillRect(xPos - tw / 2 - padX, yLabel, tw + padX * 2, h);
      ctx.fillStyle = "#ffffff";
      ctx.fillText(text, xPos, yLabel + h / 2 + 0.5);
      ctx.restore();
    });
  },
};

export function GrowthChart() {
  const data = useMemo(
    () => ({
      labels: GROWTH_CHART.labels,
      datasets: [
        {
          label: "Wearables",
          data: GROWTH_CHART.wearables,
          borderColor: ACCENT_DEEP,
          backgroundColor: "rgba(212,168,83,0.18)",
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: ACCENT_DEEP,
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          fill: true,
          order: 2,
        },
        {
          label: "Smartphones (for context)",
          data: GROWTH_CHART.smartphones,
          borderColor: "#a3a39a",
          backgroundColor: "transparent",
          borderWidth: 1.8,
          borderDash: [6, 5],
          tension: 0.25,
          pointRadius: 0,
          pointHoverRadius: 4,
          pointBackgroundColor: "#8a8a85",
          pointBorderColor: "#ffffff",
          fill: false,
          order: 1,
        },
      ],
    }),
    [],
  );

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { top: 28 } },
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#4a4a48",
          font: { family: "Inter, -apple-system, sans-serif", size: 12 },
          boxWidth: 24,
          boxHeight: 2,
          padding: 16,
          usePointStyle: false,
        },
      },
      tooltip: {
        backgroundColor: "#0a0a0a",
        titleFont: { size: 12 },
        bodyFont: { size: 13 },
        padding: 10,
        callbacks: {
          label: (ctx) =>
            ` ${ctx.dataset.label}: ${(ctx.parsed.y ?? 0).toLocaleString()}M units`,
        },
      },
      // milestone plugin reads from here
      ...({
        milestones: {
          items: GROWTH_CHART.milestones,
        },
      } as Record<string, unknown>),
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1600,
        ticks: {
          color: "#8a8a85",
          font: { size: 11 },
          callback: (v) => {
            const n = typeof v === "number" ? v : parseFloat(v as string);
            return n >= 1000 ? (n / 1000).toFixed(1) + "B" : n + "M";
          },
        },
        grid: { color: "#e8e6df" },
      },
      x: {
        ticks: { color: "#8a8a85", font: { size: 11 } },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="h-[340px]">
      <Line data={data} options={options} plugins={[milestonePlugin]} />
    </div>
  );
}
