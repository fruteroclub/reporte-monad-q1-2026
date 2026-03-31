import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

// Stat Card Component
interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  color?: string;
}

export function StatCard({ icon, label, value, color = "purple" }: StatCardProps) {
  const colorClasses = {
    purple: "from-purple-500/10 to-purple-600/5 border-purple-500/20",
    blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20",
    green: "from-green-500/10 to-green-600/5 border-green-500/20",
    orange: "from-orange-500/10 to-orange-600/5 border-orange-500/20",
  }[color];

  return (
    <div className={`p-4 md:p-6 rounded-xl bg-gradient-to-br ${colorClasses} border backdrop-blur-sm`}>
      <div className="flex items-start gap-3 md:gap-4">
        <div className="p-2 md:p-3 rounded-lg bg-black/30 text-purple-400">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs md:text-sm text-gray-400 mb-1">{label}</p>
          <p className="text-xl md:text-3xl font-bold text-white truncate">{value}</p>
        </div>
      </div>
    </div>
  );
}

// Section Title Component
interface SectionTitleProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex items-start gap-3 mb-6 md:mb-8">
      {icon && (
        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
          {icon}
        </div>
      )}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-sm md:text-base text-gray-400">{subtitle}</p>}
      </div>
    </div>
  );
}

// Project Card Component
interface ProjectCardProps {
  rank: number;
  title: string;
  team: string;
  category: string;
  description: string;
  github?: string;
  demo?: string;
  votes: number;
  points: number;
  rating: number;
}

export function ProjectCard({
  rank,
  title,
  team,
  category,
  description,
  github,
  demo,
  votes,
  points,
  rating,
}: ProjectCardProps) {
  const rankColor = 
    rank === 1 ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-400" :
    rank === 2 ? "bg-gray-400/20 border-gray-400/30 text-gray-300" :
    rank === 3 ? "bg-orange-600/20 border-orange-600/30 text-orange-400" :
    "bg-purple-500/10 border-purple-500/20 text-purple-400";

  return (
    <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-purple-500/50 transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className={`px-3 py-1.5 rounded-lg border font-bold ${rankColor}`}>
          #{rank}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold mb-1 text-white">{title}</h3>
          <p className="text-xs md:text-sm text-gray-400 mb-2">{team}</p>
          <span className="inline-block px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {category}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-gray-300 mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="px-3 py-1 rounded-md bg-black/30 text-xs">
          <span className="text-gray-400">Votos:</span>{" "}
          <span className="text-white font-bold">{votes}</span>
        </div>
        <div className="px-3 py-1 rounded-md bg-black/30 text-xs">
          <span className="text-gray-400">Puntos:</span>{" "}
          <span className="text-white font-bold">{points}</span>
        </div>
        <div className="px-3 py-1 rounded-md bg-black/30 text-xs">
          <span className="text-gray-400">Rating:</span>{" "}
          <span className="text-white font-bold">{rating.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="flex gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-sm transition-all border border-purple-500/20"
          >
            GitHub <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-sm transition-all border border-blue-500/20"
          >
            Demo <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}

// Mentor Card Component
interface MentorCardProps {
  name: string;
  role: string;
  areas: string[];
  twitter?: string;
  linkedin?: string;
  company?: string;
}

export function MentorCard({ name, role, areas, twitter, linkedin, company }: MentorCardProps) {
  return (
    <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-purple-500/50 transition-all">
      <h3 className="text-lg md:text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-purple-400 mb-3">{role}</p>
      {company && (
        <p className="text-xs text-gray-400 mb-3">{company}</p>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {areas.map((area, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20"
          >
            {area}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs transition-all border border-blue-500/20"
          >
            @{twitter}
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-xs transition-all border border-purple-500/20"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

// Tweet Card Component
interface TweetCardProps {
  url: string;
  impressions: number;
  likes: number;
}

export function TweetCard({ url, impressions, likes }: TweetCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-blue-500/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 text-blue-400">
          <span className="text-sm font-mono">Tweet</span>
          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <p className="text-xs text-gray-400">Impresiones</p>
          <p className="text-lg font-bold text-white">{impressions.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Likes</p>
          <p className="text-lg font-bold text-white">{likes}</p>
        </div>
      </div>
    </a>
  );
}

// Navigation Tabs
interface NavTabsProps {
  active: string;
}

export function NavTabs({ active }: NavTabsProps) {
  const tabs = [
    { id: "overview", label: "Overview", href: "/" },
    { id: "agente-ia", label: "🍌 Ana Banana", href: "/agente-ia" },
    { id: "submissions", label: "Proyectos", href: "/submissions" },
    { id: "convocatoria", label: "Convocatoria", href: "/convocatoria" },
    { id: "mentoras", label: "Mentoras", href: "/mentoras" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            active === tab.id
              ? "bg-purple-500 text-white"
              : "bg-[#1a1a1a] text-gray-400 hover:bg-[#222] hover:text-white border border-[#333]"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
