"use client";

import {
  Trophy, Users, BarChart3, TrendingUp,
  Sparkles, ExternalLink, Play, Eye, Heart, Handshake, Award, X, MessageSquare, Radio
} from "lucide-react";
import { StatCard, SectionTitle, NavTabs } from "@/components/SharedComponents";
import { q1Stats, socialStats, youtubeStreams, blitz2Sponsors, socialPosts, blitz1Mentors, blitz2Mentors, blitz3Mentors } from "@/data/reportData";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {
  const [showPosts, setShowPosts] = useState(false);
  const mentorCounts = {
    blitz1: blitz1Mentors.length,
    blitz2: blitz2Mentors.length,
    blitz3: blitz3Mentors.length,
  };

  const postGroups = useMemo(() => ({
    frutero: socialPosts.filter((post) => post.source === "Frutero"),
    partner: socialPosts.filter((post) => post.source === "Partner"),
    video: socialPosts.filter((post) => post.source === "Video"),
  }), []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-purple-950/20 via-black to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-[90px] h-[90px] md:w-[120px] md:h-[120px]">
                <Image src="/frutero-club-logo.png" alt="Frutero Club" fill priority className="object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm mb-6 border border-purple-500/20">
              <Sparkles className="w-4 h-4" />
              2026 Blitz Report
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
              Monad × Frutero Club {" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Overview</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-2">Builder support across three Monad Blitz hackathons</p>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">DevRel as a Service for the Monad ecosystem</p>
          </div>

          <NavTabs active="overview" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <StatCard icon={<Trophy className="w-4 h-4 md:w-6 md:h-6" />} label="Projects" value={q1Stats.totalProjects} color="purple" />
            <StatCard icon={<Users className="w-4 h-4 md:w-6 md:h-6" />} label="Builders Supported" value={q1Stats.buildersSupported} color="blue" />
            <StatCard icon={<Users className="w-4 h-4 md:w-6 md:h-6" />} label="Mentors Deployed" value={q1Stats.mentorsDeployed} color="pink" />
            <StatCard icon={<BarChart3 className="w-4 h-4 md:w-6 md:h-6" />} label="Total Votes" value={q1Stats.totalVotes.toLocaleString()} color="green" />
            <StatCard icon={<Eye className="w-4 h-4 md:w-6 md:h-6" />} label="Social Reach" value={q1Stats.totalImpressions.toLocaleString()} color="orange" />
            <StatCard icon={<Play className="w-4 h-4 md:w-6 md:h-6" />} label="Streams" value={q1Stats.youtubeStreams} color="purple" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<Sparkles className="w-6 h-6 md:w-8 md:h-8" />} title="Hackathon Events" subtitle="3 Blitz hackathons supported in 2026" />

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-[#1a1a1a] to-[#0a0a0a] border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4"><div className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold">BLITZ 1</div><span className="text-sm text-gray-400">Feb 21, 2026</span></div>
              <h3 className="text-2xl font-bold mb-2">Monad Blitz Ciudad de México</h3>
              <p className="text-gray-400 mb-6">In-person hackathon in Mexico City</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{q1Stats.blitz1Projects}</p><p className="text-xs text-gray-400">Projects</p></div>
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{q1Stats.blitz1Votes}</p><p className="text-xs text-gray-400">Votes</p></div>
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{mentorCounts.blitz1}</p><p className="text-xs text-gray-400">Mentors</p></div>
              </div>
              <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20 mb-6"><div className="flex items-center gap-2 mb-2"><span className="text-2xl">🍌</span><span className="text-sm font-bold text-yellow-400">AI DevRel Agent: Ana Banana</span></div><p className="text-xs text-gray-400">First AI DevRel agent deployed at a live hackathon</p></div>
              <div className="flex flex-wrap gap-2">
                <a href="https://reporte-monad-blitz-cdmx.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium transition-all">View Full Report <ExternalLink className="w-4 h-4" /></a>
                <a href="https://luma.com/6pk4opdb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#222] border border-[#333] text-gray-300 text-sm font-medium transition-all">Luma Event <ExternalLink className="w-4 h-4" /></a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 via-[#1a1a1a] to-[#0a0a0a] border border-pink-500/30">
              <div className="flex items-center gap-3 mb-4"><div className="px-3 py-1 rounded-lg bg-pink-500/20 border border-pink-500/30 text-pink-400 text-sm font-bold">BLITZ 2</div><span className="text-sm text-gray-400">Mar 27, 2026</span></div>
              <h3 className="text-2xl font-bold mb-2">Monad Blitz Ciudad de México #2</h3>
              <p className="text-gray-400 mb-6">Remote hackathon open to all LATAM</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{q1Stats.blitz2Projects}</p><p className="text-xs text-gray-400">Projects</p></div>
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{q1Stats.blitz2Votes}</p><p className="text-xs text-gray-400">Votes</p></div>
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{mentorCounts.blitz2}</p><p className="text-xs text-gray-400">Mentors</p></div>
              </div>
              <div className="p-4 rounded-lg bg-pink-500/5 border border-pink-500/20 mb-6 space-y-2"><p className="text-sm text-gray-300">Top categories: <span className="text-pink-400 font-medium">DeFi, AI Agents, Gaming, DePIN, Health, SocialFi</span></p><div className="flex items-center gap-2"><Award className="w-4 h-4 text-yellow-400" /><p className="text-sm text-gray-300"><span className="text-yellow-400 font-medium">Etherfuse Bounty</span> — tokenized CETES (Stablebonds) integration</p></div></div>
              <div className="flex flex-wrap gap-2"><Link href="/submissions" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium transition-all">View Projects <ExternalLink className="w-4 h-4" /></Link><a href="https://luma.com/blitz-cdmx-mar2026?tk=Tu03nM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#222] border border-[#333] text-gray-300 text-sm font-medium transition-all">Luma Event <ExternalLink className="w-4 h-4" /></a></div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 via-[#1a1a1a] to-[#0a0a0a] border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4"><div className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold">BLITZ MTY</div><span className="text-sm text-gray-400">Apr 18, 2026</span></div>
              <h3 className="text-2xl font-bold mb-2">Monad Blitz Monterrey</h3>
              <p className="text-gray-400 mb-6">In-person hackathon in Monterrey</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{q1Stats.blitz3Projects}</p><p className="text-xs text-gray-400">Projects</p></div>
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{q1Stats.blitz3Votes}</p><p className="text-xs text-gray-400">Votes</p></div>
                <div className="text-center p-3 rounded-lg bg-black/30"><p className="text-2xl font-bold text-white">{mentorCounts.blitz3}</p><p className="text-xs text-gray-400">Mentors</p></div>
              </div>
              <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 mb-6"><p className="text-sm text-gray-300">Attendance: <span className="text-blue-400 font-medium">92 registered</span> · Builder check-ins: <span className="text-blue-400 font-medium">50</span></p></div>
              <div className="flex flex-wrap gap-2"><Link href="/submissions" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-all">View Projects <ExternalLink className="w-4 h-4" /></Link><a href="https://luma.com/blitz-mty-apr-2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#222] border border-[#333] text-gray-300 text-sm font-medium transition-all">Luma Event <ExternalLink className="w-4 h-4" /></a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<TrendingUp className="w-6 h-6 md:w-8 md:h-8" />} title="Social Reach" subtitle="Combined social media performance across the Blitz campaigns" />
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]"><h4 className="text-sm font-bold text-purple-400 mb-4">Frutero X Posts</h4><div className="space-y-3"><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Eye className="w-4 h-4" /> Impressions</span><span className="text-lg font-bold">{socialStats.fruteroImpressions.toLocaleString()}</span></div><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span><span className="text-lg font-bold">{socialStats.fruteroLikes}</span></div></div></div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]"><h4 className="text-sm font-bold text-pink-400 mb-4">Partner / External Posts</h4><div className="space-y-3"><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Eye className="w-4 h-4" /> Impressions</span><span className="text-lg font-bold">{socialStats.partnerImpressions.toLocaleString()}</span></div><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span><span className="text-lg font-bold">{socialStats.partnerLikes}</span></div></div></div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333]"><h4 className="text-sm font-bold text-blue-400 mb-4">Videos & Streams</h4><div className="space-y-3"><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Play className="w-4 h-4" /> Views</span><span className="text-lg font-bold">{socialStats.videoViews.toLocaleString()}</span></div><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span><span className="text-lg font-bold">{socialStats.videoLikes}</span></div></div></div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setShowPosts(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium transition-all"><MessageSquare className="w-4 h-4" /> Open posts modal</button>
            <p className="text-sm text-gray-500 self-center">Includes direct links to campaign posts with impression and like counts.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<Play className="w-6 h-6 md:w-8 md:h-8" />} title="YouTube Streams" subtitle="5 live streams produced across Frutero Club and Mobil3 channels" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{youtubeStreams.map((stream) => (<a key={stream.url} href={stream.url} target="_blank" rel="noopener noreferrer" className="p-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-purple-500/30 transition-all"><div className="flex items-center gap-2 mb-3 text-purple-400"><Radio className="w-4 h-4" /><span className="text-xs font-bold uppercase tracking-wide">{stream.channel}</span></div><h3 className="font-bold text-white mb-2">{stream.title}</h3><p className="text-sm text-gray-400 mb-3">{stream.event}</p><div className="flex justify-between text-sm"><span className="text-gray-500">Views</span><span className="font-bold">{stream.views}</span></div></a>))}</div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<Handshake className="w-6 h-6 md:w-8 md:h-8" />} title="Partners & Bounties" subtitle="Blitz 2 sponsors and bounty partners" />
          <div className="grid md:grid-cols-2 gap-4">{blitz2Sponsors.map((partner) => (<a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-purple-500/30 transition-all"><div className="flex items-center gap-2 mb-3"><Handshake className="w-4 h-4 text-purple-400" /><span className="text-xs font-bold uppercase tracking-wide text-purple-400">{partner.role}</span></div><h3 className="text-xl font-bold mb-2">{partner.name}</h3>{partner.description && <p className="text-sm text-gray-400">{partner.description}</p>}</a>))}</div>
        </div>
      </section>

      {showPosts && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="max-w-5xl mx-auto mt-8 rounded-2xl bg-[#0b0b0b] border border-[#333] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Campaign Posts</h2>
                <p className="text-sm text-gray-400 mt-1">Direct links to key X and YouTube posts with performance metrics.</p>
              </div>
              <button onClick={() => setShowPosts(false)} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300"><X className="w-5 h-5" /></button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(postGroups).map(([key, posts]) => (
                <div key={key} className="rounded-xl border border-[#333] bg-black/30 p-4">
                  <h3 className="font-bold mb-4 text-purple-300 capitalize">{key === "partner" ? "Partner posts" : key === "video" ? "Video posts" : "Frutero posts"}</h3>
                  <div className="space-y-3">
                    {posts.map((post) => (
                      <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-white/5 p-3 hover:border-purple-500/30 transition-all">
                        <p className="text-xs text-gray-400 break-all mb-2">{post.url}</p>
                        <div className="flex justify-between text-xs text-gray-300"><span>{post.impressions.toLocaleString()} impressions/views</span><span>{post.likes} likes</span></div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="py-8 px-4 border-t border-[#333]"><div className="max-w-7xl mx-auto text-center text-sm text-gray-500"><p>Frutero Club × Monad Foundation — 2026 Blitz Report</p></div></footer>
    </main>
  );
}
