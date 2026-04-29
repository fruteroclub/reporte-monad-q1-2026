"use client";

import {
  Trophy,
  Users,
  Sparkles,
  ExternalLink,
  Play,
  Eye,
  Heart,
  X,
  MessageSquare,
  Radio,
  FileText,
  MapPinned,
  Lightbulb,
  NotebookText,
} from "lucide-react";
import { StatCard, SectionTitle, NavTabs } from "@/components/SharedComponents";
import { blitzEventMetrics, q1Stats, socialPosts, socialStats, youtubeStreams } from "@/data/reportData";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

const programScope = [
  {
    month: "January",
    items: [
      "4 coworking sessions in Mexico City",
      "8 office hours sessions",
      "4 universities onboarded",
      "1 Monad Mission support",
      "1 local activation in Mexico City",
    ],
  },
  {
    month: "February",
    items: [
      "2 Blitz events in Mexico City and Guadalajara",
      "1 local activation in Guadalajara",
      "4 coworking sessions",
      "4 workshops",
      "8 office hours sessions",
    ],
  },
  {
    month: "March",
    items: [
      "2 Blitz events in Monterrey and Mexico City",
      "2 local activations in Puebla and Monterrey",
      "4 coworking sessions",
      "4 workshops",
      "8 office hours sessions",
    ],
  },
];

const eventCards = [
  {
    key: "blitz1" as const,
    label: "Blitz 1",
    city: "Ciudad de México",
    dateLabel: "Feb 21",
    projects: q1Stats.blitz1Projects,
    votes: q1Stats.blitz1Votes,
    mentors: 9,
    image: "/blitz-1.jpg",
    imageAlt: "Monad Blitz Ciudad de México",
    imageWidth: 1930,
    imageHeight: 1446,
  },
  {
    key: "blitz2" as const,
    label: "Blitz 2",
    city: "CDMX #2 / Online LATAM",
    dateLabel: "Mar 27",
    projects: q1Stats.blitz2Projects,
    votes: q1Stats.blitz2Votes,
    mentors: 9,
    image: "/blitz-2.jpg",
    imageAlt: "Monad Blitz Ciudad de México #2",
    imageWidth: 4032,
    imageHeight: 2837,
  },
  {
    key: "blitz3" as const,
    label: "Blitz MTY",
    city: "Monterrey",
    dateLabel: "Apr 18",
    projects: q1Stats.blitz3Projects,
    votes: q1Stats.blitz3Votes,
    mentors: 11,
    image: "/blitz-mty.jpg",
    imageAlt: "Monad Blitz Monterrey",
    imageWidth: 1886,
    imageHeight: 1202,
  },
  {
    key: "blitz4" as const,
    label: "Blitz GDL",
    city: "Guadalajara",
    dateLabel: "Apr 24-25",
    projects: q1Stats.blitz4Projects,
    votes: q1Stats.blitz4Votes,
    mentors: 5,
    image: "/blitz-gdl.png",
    imageAlt: "Monad Blitz Guadalajara",
    imageWidth: 1754,
    imageHeight: 1320,
  },
];

export default function Home() {
  const [showPosts, setShowPosts] = useState(false);

  const postGroups = useMemo(
    () => ({
      frutero: socialPosts.filter((post) => post.source === "Frutero"),
      partner: socialPosts.filter((post) => post.source === "Partner"),
      video: socialPosts.filter((post) => post.source === "Video"),
    }),
    []
  );

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="px-4 pt-10 md:pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
              <Image src="/frutero-club-logo.png" alt="Frutero Club" fill priority className="object-contain" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Prepared for Monad Foundation</p>
              <h1 className="text-3xl md:text-6xl font-bold leading-tight">Q1 2026 report</h1>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 mb-8">
            <p className="text-lg md:text-2xl text-gray-200">This report covers the full Builder Success and DevRel support layer Frutero operated for Monad in Mexico during Q1 2026.</p>
            <p className="text-sm md:text-base text-gray-400">The Blitzes mattered, but they were only one part of the work. The broader scope included activations, workshops, office hours, content, livestreams, technical support, and retention-oriented follow-through.</p>
          </div>

          <NavTabs active="overview" />
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <div className="flex items-center gap-2 text-purple-300 mb-3"><FileText className="w-4 h-4" /><span className="text-xs uppercase tracking-[0.2em]">What this report is about</span></div>
            <p className="text-gray-200 leading-relaxed">Frutero was not only producing hackathons. We were operating the support layer around Monad in Mexico: talent activation, builder guidance, content, live education, and ecosystem visibility.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <div className="flex items-center gap-2 text-purple-300 mb-3"><NotebookText className="w-4 h-4" /><span className="text-xs uppercase tracking-[0.2em]">Current reporting note</span></div>
            <p className="text-gray-200 leading-relaxed">Overview totals are confirmed for Luma registrations and total builder check-ins. The exact split of the combined 97 check-ins between Blitz 1 and Blitz 2 still needs source reconciliation, so we are not fabricating that breakdown.</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <StatCard icon={<Users className="w-4 h-4 md:w-6 md:h-6" />} label="Luma registrations" value={q1Stats.totalLumaRegistrations.toLocaleString()} color="blue" />
            <StatCard icon={<Users className="w-4 h-4 md:w-6 md:h-6" />} label="Verified check-ins" value={q1Stats.verifiedBuilderCheckins.toLocaleString()} color="pink" />
            <StatCard icon={<Trophy className="w-4 h-4 md:w-6 md:h-6" />} label="Approved projects" value={q1Stats.totalProjects} color="purple" />
            <StatCard icon={<Sparkles className="w-4 h-4 md:w-6 md:h-6" />} label="Unique mentors" value={q1Stats.uniqueMentors} color="green" />
            <StatCard icon={<Eye className="w-4 h-4 md:w-6 md:h-6" />} label="Social reach" value={q1Stats.totalImpressions.toLocaleString()} color="orange" />
            <StatCard icon={<Play className="w-4 h-4 md:w-6 md:h-6" />} label="Livestreams" value={q1Stats.youtubeStreams} color="purple" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<MapPinned className="w-6 h-6 md:w-8 md:h-8" />} title="Program scope" subtitle="The Q1 retainer covered much more than the public-facing hackathon moments." />
          <div className="grid lg:grid-cols-3 gap-4">
            {programScope.map((block) => (
              <div key={block.month} className="rounded-2xl border border-white/10 bg-[#111] p-5">
                <h3 className="text-xl font-bold mb-4">{block.month}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-purple-300">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<Trophy className="w-6 h-6 md:w-8 md:h-8" />} title="Talent activation through the Blitzes" subtitle="A standardized view of the four talent activation events, shown as one layer of the broader Q1 program." />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {eventCards.map((event) => {
              const metrics = blitzEventMetrics[event.key];
              return (
                <div key={event.key} className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden">
                  <div className="aspect-[4/3] relative border-b border-white/10">
                    <Image src={event.image} alt={event.imageAlt} width={event.imageWidth} height={event.imageHeight} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-purple-300">{event.label}</span>
                      <span className="text-xs text-gray-500">{event.dateLabel}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{event.city}</h3>
                    <p className="text-sm text-gray-400 mb-4">{metrics.title}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between gap-4"><span className="text-gray-500">Projects</span><span className="text-white font-medium">{event.projects}</span></div>
                      <div className="flex justify-between gap-4"><span className="text-gray-500">Votes</span><span className="text-white font-medium">{event.votes}</span></div>
                      <div className="flex justify-between gap-4"><span className="text-gray-500">Mentors</span><span className="text-white font-medium">{event.mentors}</span></div>
                      <div className="flex justify-between gap-4"><span className="text-gray-500">Luma registrations</span><span className="text-white font-medium">{metrics.registrations}</span></div>
                      <div className="flex justify-between gap-4"><span className="text-gray-500">Builder check-ins</span><span className="text-white font-medium">{metrics.checkInsDisplay ?? metrics.checkIns}</span></div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                      <Link href="/submissions" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-black text-sm font-medium transition-all hover:bg-gray-200">View projects <ExternalLink className="w-3 h-3" /></Link>
                      <a href={metrics.lumaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-gray-300 text-sm font-medium transition-all hover:bg-white/5">Luma <ExternalLink className="w-3 h-3" /></a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-gray-500 mt-4">Blitz 1 and Blitz 2 currently share a combined figure of 97 confirmed check-ins while the per-event split is still being reconciled.</p>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <div className="flex items-center gap-2 text-purple-300 mb-3"><Sparkles className="w-4 h-4" /><span className="text-xs uppercase tracking-[0.2em]">Technical support layer</span></div>
            <h3 className="text-2xl font-bold mb-3">Ana Banana</h3>
            <p className="text-gray-300 leading-relaxed">Frutero tested a dedicated AI-native DevRel support layer during the program. Ana Banana was deployed to help builders with setup, technical pivots, and Monad testnet context in live environments.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
            <div className="flex items-center gap-2 text-purple-300 mb-3"><Lightbulb className="w-4 h-4" /><span className="text-xs uppercase tracking-[0.2em]">What we learned</span></div>
            <ul className="space-y-3 text-gray-300 leading-relaxed text-sm md:text-base">
              <li>Regional demand is real. The builder pull was not isolated to one city, which is why the Mexico-wide support layer matters more than any single event.</li>
              <li>Acquisition and retention need different mechanisms. Blitzes create energy, but workshops, office hours, coworking, and follow-through are what extend builder lifetime value.</li>
              <li>The report itself has to reflect the operating model. If the narrative only shows hackathons, it misrepresents the actual contract and the actual work delivered.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<Eye className="w-6 h-6 md:w-8 md:h-8" />} title="Content, visibility, and ecosystem presence" subtitle="Reach and livestream output were another core part of the program, not an appendix to the Blitzes." />
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6"><h4 className="text-sm font-bold text-purple-300 mb-4">Frutero posts</h4><div className="space-y-3"><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Eye className="w-4 h-4" /> Impressions</span><span className="text-lg font-bold">{socialStats.fruteroImpressions.toLocaleString()}</span></div><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span><span className="text-lg font-bold">{socialStats.fruteroLikes}</span></div></div></div>
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6"><h4 className="text-sm font-bold text-purple-300 mb-4">External amplification</h4><div className="space-y-3"><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Eye className="w-4 h-4" /> Impressions</span><span className="text-lg font-bold">{socialStats.partnerImpressions.toLocaleString()}</span></div><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span><span className="text-lg font-bold">{socialStats.partnerLikes}</span></div></div></div>
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6"><h4 className="text-sm font-bold text-purple-300 mb-4">Videos and streams</h4><div className="space-y-3"><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Play className="w-4 h-4" /> Views</span><span className="text-lg font-bold">{socialStats.videoViews.toLocaleString()}</span></div><div className="flex justify-between items-center"><span className="text-sm text-gray-400 flex items-center gap-2"><Heart className="w-4 h-4" /> Likes</span><span className="text-lg font-bold">{socialStats.videoLikes}</span></div></div></div>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <button onClick={() => setShowPosts(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium transition-all hover:bg-gray-200"><MessageSquare className="w-4 h-4" /> Open post references</button>
            <p className="text-sm text-gray-500 self-center">Each item links back to the original post or video source.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{youtubeStreams.map((stream) => (<a key={stream.url} href={stream.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#111] p-5 hover:bg-white/[0.02] transition-all"><div className="flex items-center gap-2 mb-3 text-purple-300"><Radio className="w-4 h-4" /><span className="text-xs uppercase tracking-[0.18em]">{stream.channel}</span></div><h3 className="font-bold text-white mb-2">{stream.title}</h3><p className="text-sm text-gray-400 mb-3">{stream.event}</p><div className="flex justify-between text-sm"><span className="text-gray-500">Views</span><span className="font-bold">{stream.views}</span></div></a>))}</div>
        </div>
      </section>

      {showPosts && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="max-w-5xl mx-auto mt-8 rounded-2xl bg-[#0b0b0b] border border-[#333] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Post references</h2>
                <p className="text-sm text-gray-400 mt-1">Direct links to key X, Instagram, and YouTube references used in this report.</p>
                <a href="https://docs.google.com/spreadsheets/d/1SA1LzaO6m19Or_fzqrrvqbvY1Z5QQ3J_py9qbGWB1cs/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-sm text-purple-300 hover:text-purple-200">Open source metrics sheet <ExternalLink className="w-4 h-4" /></a>
              </div>
              <button onClick={() => setShowPosts(false)} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300"><X className="w-5 h-5" /></button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(postGroups).map(([key, posts]) => (
                <div key={key} className="rounded-xl border border-[#333] bg-black/30 p-4">
                  <h3 className="font-bold mb-4 text-purple-300 capitalize">{key === "partner" ? "External posts" : key === "video" ? "Video posts" : "Frutero posts"}</h3>
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

      <footer className="py-8 px-4 border-t border-[#222]"><div className="max-w-7xl mx-auto text-center text-sm text-gray-500"><p>Frutero Club × Monad Foundation - Q1 2026 report</p></div></footer>
    </main>
  );
}
