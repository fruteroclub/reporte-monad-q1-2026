import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  color?: string;
}

export function StatCard({ icon, label, value, color = "purple" }: StatCardProps) {
  const colorClasses = {
    purple: "border-[#c7b9ef] bg-[#f4edff] text-[#6f4cc3]",
    blue: "border-[#b9d6ef] bg-[#ecf6ff] text-[#316b9e]",
    green: "border-[#c7e7c9] bg-[#eef9ef] text-[#3a7d44]",
    orange: "border-[#efd7b9] bg-[#fff5e9] text-[#9a5b1f]",
    pink: "border-[#efbfd4] bg-[#fff0f6] text-[#9d4c72]",
  }[color] ?? "border-[#c7b9ef] bg-[#f4edff] text-[#6f4cc3]";

  return (
    <div className={`rounded-[22px] border p-4 md:p-5 shadow-[0_1px_0_rgba(36,27,21,0.04)] ${colorClasses}`}>
      <div className="flex items-start gap-3">
        <div className="rounded-2xl border border-black/5 bg-white/70 p-2.5">{icon}</div>
        <div className="min-w-0 flex-1">
          <p className="mb-1 text-xs uppercase tracking-[0.16em] text-[#6c6258]">{label}</p>
          <p className="truncate text-2xl md:text-3xl font-semibold text-[#241b15]">{value}</p>
        </div>
      </div>
    </div>
  );
}

interface SectionTitleProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-6 md:mb-8 flex items-start gap-3">
      {icon && <div className="shrink-0 rounded-2xl border border-[#d9cfc2] bg-white/70 p-2 text-[#6f4cc3]">{icon}</div>}
      <div>
        <h2 className="mb-2 text-2xl md:text-4xl font-semibold tracking-[-0.02em] text-[#241b15]">{title}</h2>
        {subtitle && <p className="text-sm md:text-base text-[#6c6258]">{subtitle}</p>}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  rank: number;
  title: string;
  team: string;
  category: string;
  description: string;
  github?: string;
  demo?: string;
  tweet?: string;
  votes: number;
  points: number;
  rating: number;
}

export function ProjectCard({ rank, title, team, category, description, github, demo, tweet, votes, points, rating }: ProjectCardProps) {
  const rankColor =
    rank === 1
      ? "border-[#e7c76f] bg-[#fff8de] text-[#9b6b00]"
      : rank === 2
        ? "border-[#d7d7d7] bg-[#f6f6f6] text-[#616161]"
        : rank === 3
          ? "border-[#e6c2a5] bg-[#fff1e6] text-[#a15f31]"
          : "border-[#d8ccee] bg-[#f7f1ff] text-[#6f4cc3]";

  return (
    <div className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-4 md:p-6 shadow-[0_10px_30px_rgba(36,27,21,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(36,27,21,0.08)]">
      <div className="mb-4 flex items-start gap-4">
        <div className={`rounded-xl border px-3 py-1.5 font-semibold ${rankColor}`}>#{rank}</div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-lg md:text-xl font-semibold text-[#241b15]">{title}</h3>
          <p className="mb-2 text-xs md:text-sm text-[#6c6258]">{team}</p>
          <span className="inline-block rounded-full border border-[#e4dbd0] bg-[#f7f3ee] px-2.5 py-1 text-xs text-[#5f5144]">{category}</span>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-[#3f352d]">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        <div className="rounded-full border border-[#e4dbd0] bg-[#faf7f2] px-3 py-1 text-xs text-[#5f5144]">Votes: <span className="font-semibold text-[#241b15]">{votes}</span></div>
        <div className="rounded-full border border-[#e4dbd0] bg-[#faf7f2] px-3 py-1 text-xs text-[#5f5144]">Points: <span className="font-semibold text-[#241b15]">{points}</span></div>
        <div className="rounded-full border border-[#e4dbd0] bg-[#faf7f2] px-3 py-1 text-xs text-[#5f5144]">Rating: <span className="font-semibold text-[#241b15]">{rating.toFixed(2)}</span></div>
      </div>

      <div className="flex flex-wrap gap-2">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d8ccee] bg-[#f7f1ff] px-3 py-2 text-sm text-[#6f4cc3] transition-all hover:bg-[#efe6ff]">
            GitHub <ExternalLink className="h-3 w-3" />
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#c7dff1] bg-[#eef7ff] px-3 py-2 text-sm text-[#316b9e] transition-all hover:bg-[#e3f0fd]">
            Demo <ExternalLink className="h-3 w-3" />
          </a>
        )}
        {tweet && (
          <a href={tweet} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#cde7f4] bg-[#effafe] px-3 py-2 text-sm text-[#27759a] transition-all hover:bg-[#e3f5fb]">
            Tweet <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}

interface NavTabsProps {
  active: string;
}

export function NavTabs({ active }: NavTabsProps) {
  const tabs = [
    { id: "overview", label: "Overview", href: "/" },
    { id: "submissions", label: "Projects", href: "/submissions" },
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
            active === tab.id
              ? "border-[#241b15] bg-[#241b15] text-[#f7f3ee]"
              : "border-[#ddd3c8] bg-white/70 text-[#5f5144] hover:bg-white"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
