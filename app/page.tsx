import { Metadata } from "next";
import {
  Trophy, Users, BarChart3, TrendingUp,
  Sparkles, Github, ExternalLink, Play, Eye, Heart, Radio, Handshake, Award
} from "lucide-react";
import { StatCard, SectionTitle, NavTabs } from "@/components/SharedComponents";
import { q1Stats, socialStats, youtubeStreams, blitz2Sponsors } from "@/data/reportData";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Q1 2026 Report — Monad × Frutero Club",
  description: "Q1 2026 quarterly report: 2 hackathons, 34 projects, 62K+ social reach",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-purple-950/20 via-black to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-[90px] h-[90px] md:w-[120px] md:h-[120px]">
                <Image
                  src="/frutero-club-logo.png"
                  alt="Frutero Club"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm mb-6 border border-purple-500/20">
              <Sparkles className="w-4 h-4" />
              January — March 2026
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
              Q1 2026{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Report
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-2">
              Monad × Frutero Club
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
              DevRel as a Service for the Monad ecosystem
            </p>
          </div>

          {/* Navigation */}
          <NavTabs active="overview" />

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <StatCard
              icon={<Trophy className="w-4 h-4 md:w-6 md:h-6" />}
              label="Projects"
              value={q1Stats.totalProjects}
              color="purple"
            />
            <StatCard
              icon={<Users className="w-4 h-4 md:w-6 md:h-6" />}
              label="Total Votes"
              value={q1Stats.totalVotes.toLocaleString()}
              color="blue"
            />
            <StatCard
              icon={<BarChart3 className="w-4 h-4 md:w-6 md:h-6" />}
              label="Social Reach"
              value={q1Stats.totalImpressions.toLocaleString()}
              color="green"
            />
            <StatCard
              icon={<Play className="w-4 h-4 md:w-6 md:h-6" />}
              label="Streams"
              value={q1Stats.youtubeStreams}
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            icon={<Sparkles className="w-6 h-6 md:w-8 md:h-8" />}
            title="Hackathon Events"
            subtitle="2 Blitz hackathons organized in Q1 2026"
          />

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Blitz 1 Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 via-[#1a1a1a] to-[#0a0a0a] border border-purple-500/30 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold">
                  BLITZ 1
                </div>
                <span className="text-sm text-gray-400">February 21, 2026</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Monad Blitz Ciudad de México</h3>
              <p className="text-gray-400 mb-6">In-person hackathon in Mexico City</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-lg bg-black/30">
                  <p className="text-2xl font-bold text-white">{q1Stats.blitz1Projects}</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-black/30">
                  <p className="text-2xl font-bold text-white">{q1Stats.blitz1Votes}</p>
                  <p className="text-xs text-gray-400">Votes</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-black/30">
                  <p className="text-2xl font-bold text-white">6</p>
                  <p className="text-xs text-gray-400">Mentors</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🍌</span>
                  <span className="text-sm font-bold text-yellow-400">AI DevRel Agent: Ana Banana</span>
                </div>
                <p className="text-xs text-gray-400">First AI DevRel agent deployed at a live hackathon</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://reporte-monad-blitz-cdmx.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium transition-all"
                >
                  View Full Report <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://luma.com/6pk4opdb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#222] border border-[#333] text-gray-300 text-sm font-medium transition-all"
                >
                  Luma Event <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Blitz 2 Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 via-[#1a1a1a] to-[#0a0a0a] border border-pink-500/30 hover:border-pink-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-lg bg-pink-500/20 border border-pink-500/30 text-pink-400 text-sm font-bold">
                  BLITZ 2
                </div>
                <span className="text-sm text-gray-400">March 27, 2026</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Monad Blitz Ciudad de México #2</h3>
              <p className="text-gray-400 mb-6">Remote hackathon open to all LATAM</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-lg bg-black/30">
                  <p className="text-2xl font-bold text-white">{q1Stats.blitz2Projects}</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-black/30">
                  <p className="text-2xl font-bold text-white">{q1Stats.blitz2Votes}</p>
                  <p className="text-xs text-gray-400">Votes</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-black/30">
                  <p className="text-2xl font-bold text-white">10</p>
                  <p className="text-xs text-gray-400">Mentors</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-pink-500/5 border border-pink-500/20 mb-6 space-y-2">
                <p className="text-sm text-gray-300">
                  Top categories: <span className="text-pink-400 font-medium">DeFi, AI Agents, Gaming, DePIN, Health, SocialFi</span>
                </p>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <p className="text-sm text-gray-300">
                    <span className="text-yellow-400 font-medium">Etherfuse Bounty</span> — tokenized CETES (Stablebonds) integration
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="/submissions"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium transition-all"
                >
                  View Projects <ExternalLink className="w-4 h-4" />
                </Link>
                <a
                  href="https://luma.com/blitz-cdmx-mar2026?tk=Tu03nM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#222] border border-[#333] text-gray-300 text-sm font-medium transition-all"
                >
                  Luma Event <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Reach Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            icon={<TrendingUp className="w-6 h-6 md:w-8 md:h-8" />}
            title="Social Reach"
            subtitle="Combined Q1 2026 social media performance"
          />

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Frutero X */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]">
              <h4 className="text-sm font-bold text-purple-400 mb-4">Frutero X Posts</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Eye className="w-4 h-4" /> Impressions</span>
                  <span className="text-lg font-bold">{socialStats.fruteroImpressions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span>
                  <span className="text-lg font-bold">{socialStats.fruteroLikes}</span>
                </div>
              </div>
            </div>

            {/* Partner Posts */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]">
              <h4 className="text-sm font-bold text-pink-400 mb-4">Partner / External Posts</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Eye className="w-4 h-4" /> Impressions</span>
                  <span className="text-lg font-bold">{socialStats.partnerImpressions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span>
                  <span className="text-lg font-bold">{socialStats.partnerLikes}</span>
                </div>
              </div>
            </div>

            {/* Video / YouTube */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]">
              <h4 className="text-sm font-bold text-blue-400 mb-4">X Videos + YouTube</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Eye className="w-4 h-4" /> Views</span>
                  <span className="text-lg font-bold">{socialStats.videoViews.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span>
                  <span className="text-lg font-bold">{socialStats.videoLikes}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Totals Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {socialStats.totalImpressions.toLocaleString()}
                </p>
                <p className="text-sm text-gray-400 mt-1">Total Impressions + Views</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {socialStats.totalLikes.toLocaleString()}
                </p>
                <p className="text-sm text-gray-400 mt-1">Total Likes</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2
                </p>
                <p className="text-sm text-gray-400 mt-1">Hackathon Events</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  5
                </p>
                <p className="text-sm text-gray-400 mt-1">YouTube Streams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Streams Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            icon={<Radio className="w-6 h-6 md:w-8 md:h-8" />}
            title="YouTube Streams"
            subtitle="5 live streams across Frutero Club and Mobil3 channels"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubeStreams.map((stream, i) => (
              <a
                key={i}
                href={stream.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-red-500/50 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Play className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">
                    {stream.title}
                  </span>
                  <ExternalLink className="w-3 h-3 text-gray-500 ml-auto group-hover:text-red-400 transition-colors" />
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-gray-400">Views</p>
                    <p className="text-lg font-bold text-white">{stream.views}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Channel</p>
                    <p className="text-sm text-purple-400">{stream.channel}</p>
                  </div>
                  <div className="ml-auto">
                    <span className={`px-2 py-1 text-xs rounded-md border ${
                      stream.event === "Blitz 1"
                        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                        : "bg-pink-500/10 text-pink-400 border-pink-500/20"
                    }`}>
                      {stream.event}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Bounties Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            icon={<Handshake className="w-6 h-6 md:w-8 md:h-8" />}
            title="Partners & Bounties"
            subtitle="Blitz 2 sponsors and bounty partners"
          />

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Monad Foundation */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 via-[#1a1a1a] to-[#0a0a0a] border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase">
                  Main Sponsor
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Monad Foundation</h3>
              <p className="text-gray-400 mb-6">
                Primary sponsor powering both Blitz hackathons, providing ecosystem support and developer tooling for builders in LATAM.
              </p>
              <a
                href="https://monad.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-sm transition-all border border-purple-500/20"
              >
                monad.xyz <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Etherfuse Bounty */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-[#1a1a1a] to-[#0a0a0a] border border-yellow-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase">
                  Bounty Partner
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Etherfuse</h3>
              <p className="text-gray-400 mb-6">
                Special bounty for projects integrating tokenized CETES (Stablebonds) — enabling real-world Mexican government bond yields on-chain.
              </p>
              <a
                href="https://etherfuse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 text-sm transition-all border border-yellow-500/20"
              >
                etherfuse.com <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            DevRel as a Service
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Frutero Club delivers full-stack developer relations infrastructure for the Monad ecosystem:
            hackathon production, technical mentorship, AI DevRel agents, and community amplification.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://github.com/fruteroclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a1a1a] hover:bg-[#222] border border-[#333] text-white transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://twitter.com/fruteroclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a1a1a] hover:bg-[#222] border border-[#333] text-white transition-all"
            >
              <TrendingUp className="w-5 h-5" />
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-[#333]">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/frutero-club-logo.png"
              alt="Frutero Club"
              width={28}
              height={28}
              className="object-contain"
            />
            <span>Frutero Club × Monad Foundation — Q1 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
