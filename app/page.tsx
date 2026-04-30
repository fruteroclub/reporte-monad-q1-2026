"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Eye,
  FileText,
  FolderKanban,
  MessageSquare,
  Play,
  Radio,
  Sparkles,
  Trophy,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { NavTabs, StatCard } from "@/components/SharedComponents";
import {
  blitzEventMetrics,
  builderPackLinks,
  continuitySignals,
  deliveryEvidence,
  godinezUsageMetrics,
  q1Stats,
  socialPosts,
  socialStats,
  youtubeStreams,
} from "@/data/reportData";

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

type PanelKey = "activation" | "tooling" | "packs" | "continuity" | "content" | "delivery" | null;

const moduleCards: { key: Exclude<PanelKey, null>; title: string; eyebrow: string; summary: string }[] = [
  {
    key: "activation",
    eyebrow: "Talent activation",
    title: "4 Blitz events, 71 approved projects, 198 verified check-ins",
    summary: "The public-facing acquisition layer, shown with consistent event-level metrics.",
  },
  {
    key: "tooling",
    eyebrow: "Builder support tooling",
    title: "Ana Banana evolved into Godínez as live builder support",
    summary: "Usage peaks during Blitz windows show active technical assistance, not just passive access.",
  },
  {
    key: "packs",
    eyebrow: "Builder enablement",
    title: "Builder Packs reduced setup friction around Monad resources and delivery flow",
    summary: "Three curated packs anchored builders in context, resources, and submission mechanics.",
  },
  {
    key: "continuity",
    eyebrow: "Retention signals",
    title: "Follow-up content highlighted builders continuing after the event window",
    summary: "Frutero Talks documented that builders did not disappear after demo day.",
  },
  {
    key: "content",
    eyebrow: "Reach and visibility",
    title: "93,418 total impressions plus livestreams and ecosystem amplification",
    summary: "Reach, partner amplification, and video output supported the builder funnel.",
  },
  {
    key: "delivery",
    eyebrow: "Program delivery",
    title: "The workstream scope went beyond Blitz: workshops, office hours, coworking, activations",
    summary: "This report is stronger when it shows the support layer as a system, not only as events.",
  },
];

function PaperTexture() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 opacity-60"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(120,95,71,0.05), transparent 22%), radial-gradient(circle at 80% 0%, rgba(120,95,71,0.04), transparent 18%), linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.35)), repeating-linear-gradient(0deg, rgba(87,65,48,0.02) 0px, rgba(87,65,48,0.02) 1px, transparent 1px, transparent 4px)",
      }}
    />
  );
}

export default function Home() {
  const [activePanel, setActivePanel] = useState<PanelKey>(null);

  const postGroups = useMemo(
    () => ({
      frutero: socialPosts.filter((post) => post.source === "Frutero"),
      partner: socialPosts.filter((post) => post.source === "Partner"),
      video: socialPosts.filter((post) => post.source === "Video"),
    }),
    []
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f4ecdf] text-[#241b15]">
      <PaperTexture />

      <section className="relative px-4 pb-8 pt-10 md:pb-10 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 md:h-20 md:w-20">
              <Image src="/frutero-club-logo.png" alt="Frutero Club" fill priority className="object-contain" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#8a7664]">Prepared for Monad Foundation</p>
              <h1 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl">Q1 2026 Builder Success Report</h1>
            </div>
          </div>

          <div className="mb-8 max-w-4xl space-y-4 rounded-[28px] border border-[#ddd3c8] bg-white/65 p-6 shadow-[0_10px_40px_rgba(36,27,21,0.05)] backdrop-blur-sm">
            <p className="text-lg leading-relaxed text-[#3f352d] md:text-2xl">
              This report covers the Builder Success and DevRel support layer Frutero operated for Monad in Mexico during Q1 2026.
            </p>
            <p className="text-sm leading-relaxed text-[#6c6258] md:text-base">
              Blitzes were a visible part of the work, but not the whole operating model. The quarter also included tooling, live support, content, builder enablement, and continuity signals after the event windows.
            </p>
          </div>

          <NavTabs active="overview" />
        </div>
      </section>

      <section className="relative px-4 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            <StatCard icon={<Users className="h-4 w-4 md:h-6 md:w-6" />} label="Luma registrations" value={q1Stats.totalLumaRegistrations.toLocaleString()} color="blue" />
            <StatCard icon={<Users className="h-4 w-4 md:h-6 md:w-6" />} label="Verified check-ins" value={q1Stats.verifiedBuilderCheckins.toLocaleString()} color="pink" />
            <StatCard icon={<Trophy className="h-4 w-4 md:h-6 md:w-6" />} label="Approved projects" value={q1Stats.totalProjects} color="purple" />
            <StatCard icon={<Sparkles className="h-4 w-4 md:h-6 md:w-6" />} label="Unique mentors" value={q1Stats.uniqueMentors} color="green" />
            <StatCard icon={<Eye className="h-4 w-4 md:h-6 md:w-6" />} label="Social reach" value={q1Stats.totalImpressions.toLocaleString()} color="orange" />
            <StatCard icon={<Play className="h-4 w-4 md:h-6 md:w-6" />} label="Livestreams" value={q1Stats.youtubeStreams} color="purple" />
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-start gap-3">
            <div className="rounded-2xl border border-[#d9cfc2] bg-white/70 p-2 text-[#6f4cc3]"><FolderKanban className="h-6 w-6" /></div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-4xl">Explore the work</h2>
              <p className="text-sm text-[#6c6258] md:text-base">Each module opens the evidence behind one part of the Q1 support layer.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {moduleCards.map((card) => (
              <button
                key={card.key}
                onClick={() => setActivePanel(card.key)}
                className="group rounded-[26px] border border-[#ddd3c8] bg-white/75 p-5 text-left shadow-[0_10px_30px_rgba(36,27,21,0.05)] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_rgba(36,27,21,0.08)]"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8a7664]">{card.eyebrow}</p>
                <h3 className="mb-3 text-xl font-semibold leading-snug tracking-[-0.02em]">{card.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-[#6c6258]">{card.summary}</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ddd3c8] bg-[#f8f4ed] px-3 py-1.5 text-sm text-[#3f352d] transition-all group-hover:border-[#241b15]">
                  Open module <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#ddd3c8] bg-white/65 p-6 shadow-[0_10px_40px_rgba(36,27,21,0.05)] md:p-8">
          <div className="mb-6 flex items-start gap-3">
            <div className="rounded-2xl border border-[#d9cfc2] bg-[#f7f1ff] p-2 text-[#6f4cc3]"><Trophy className="h-6 w-6" /></div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-4xl">Blitz footprint</h2>
              <p className="text-sm text-[#6c6258] md:text-base">A quick glance at the four event windows before drilling into the project archive.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {eventCards.map((event) => {
              const metrics = blitzEventMetrics[event.key];
              return (
                <div key={event.key} className="overflow-hidden rounded-[24px] border border-[#e1d7cb] bg-[#fcfaf7]">
                  <div className="relative aspect-[4/3] border-b border-[#e1d7cb]">
                    <Image src={event.image} alt={event.imageAlt} width={event.imageWidth} height={event.imageHeight} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#8a7664]">{event.label}</span>
                      <span className="text-xs text-[#8a7664]">{event.dateLabel}</span>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold">{event.city}</h3>
                    <p className="mb-4 text-sm text-[#6c6258]">{metrics.title}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between gap-3"><span className="text-[#6c6258]">Projects</span><span className="font-medium">{event.projects}</span></div>
                      <div className="flex justify-between gap-3"><span className="text-[#6c6258]">Votes</span><span className="font-medium">{event.votes}</span></div>
                      <div className="flex justify-between gap-3"><span className="text-[#6c6258]">Mentors</span><span className="font-medium">{event.mentors}</span></div>
                      <div className="flex justify-between gap-3"><span className="text-[#6c6258]">Registrations</span><span className="font-medium">{metrics.registrations}</span></div>
                      <div className="flex justify-between gap-3"><span className="text-[#6c6258]">Check-ins</span><span className="font-medium text-right">{metrics.checkInsDisplay ?? metrics.checkIns}</span></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/submissions" className="inline-flex items-center gap-2 rounded-full border border-[#241b15] bg-[#241b15] px-4 py-2 text-sm text-[#f7f3ee] transition-all hover:opacity-90">
              Open project archive <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <p className="text-sm text-[#6c6258]">Blitz 1 and Blitz 2 still share the combined figure of 97 confirmed check-ins while the split is being reconciled.</p>
          </div>
        </div>
      </section>

      {activePanel && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[rgba(36,27,21,0.38)] px-4 py-6 backdrop-blur-[2px] md:py-10">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-[#ddd3c8] bg-[#f8f3ea] p-6 shadow-[0_20px_60px_rgba(36,27,21,0.18)] md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#8a7664]">Module detail</p>
                <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{activePanel === "activation" && "Talent activation through the Blitzes"}{activePanel === "tooling" && "Builder support tooling"}{activePanel === "packs" && "Builder Packs and setup enablement"}{activePanel === "continuity" && "Continuity signals after the Blitzes"}{activePanel === "content" && "Content, reach, and livestream presence"}{activePanel === "delivery" && "Documented Q1 delivery model"}</h2>
              </div>
              <button onClick={() => setActivePanel(null)} className="rounded-full border border-[#ddd3c8] bg-white/70 p-2 text-[#5f5144] transition-all hover:bg-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {activePanel === "activation" && (
              <div className="space-y-6">
                <p className="max-w-3xl text-sm leading-relaxed text-[#5f5144] md:text-base">This is the acquisition layer people saw most clearly: four Blitz windows, 71 approved projects, 423 registrations, and 198 verified check-ins across the quarter.</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {eventCards.map((event) => {
                    const metrics = blitzEventMetrics[event.key];
                    return (
                      <div key={event.key} className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[#8a7664]">{event.label}</p>
                            <h3 className="text-lg font-semibold">{event.city}</h3>
                          </div>
                          <a href={metrics.lumaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-[#6f4cc3]">
                            Luma <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="rounded-2xl border border-[#ece3d8] bg-[#faf7f2] p-3"><p className="text-[#8a7664]">Projects</p><p className="text-xl font-semibold">{event.projects}</p></div>
                          <div className="rounded-2xl border border-[#ece3d8] bg-[#faf7f2] p-3"><p className="text-[#8a7664]">Votes</p><p className="text-xl font-semibold">{event.votes}</p></div>
                          <div className="rounded-2xl border border-[#ece3d8] bg-[#faf7f2] p-3"><p className="text-[#8a7664]">Registrations</p><p className="text-xl font-semibold">{metrics.registrations}</p></div>
                          <div className="rounded-2xl border border-[#ece3d8] bg-[#faf7f2] p-3"><p className="text-[#8a7664]">Check-ins</p><p className="text-base font-semibold">{metrics.checkInsDisplay ?? metrics.checkIns}</p></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activePanel === "tooling" && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5">
                    <p className="mb-3 text-sm leading-relaxed text-[#5f5144]">Frutero tested agent-assisted builder support in live build environments. Ana Banana was the early support experiment, and that support layer later evolved into Godínez as a more utilitarian tool for builders.</p>
                    <p className="text-sm leading-relaxed text-[#5f5144]">The key point is not novelty. It is that builders had a real support surface during high-pressure shipping windows, and usage moved meaningfully during the Blitz dates.</p>
                  </div>
                  <div className="rounded-[24px] border border-[#ddd3c8] bg-[#faf7f2] p-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#8a7664]">Reading note</p>
                    <p className="text-sm leading-relaxed text-[#5f5144]">On March 27, the same day as Blitz 2, Godínez registered 16 users across 17 spaces and 29 conversations. That is strong evidence of active usage during the builder window.</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {godinezUsageMetrics.map((metric) => (
                    <div key={metric.date} className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#8a7664]">{metric.date}</p>
                      <h3 className="mt-1 mb-4 text-lg font-semibold">{metric.label}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-[#6c6258]">Conversations</span><span className="font-medium">{metric.conversations}</span></div>
                        <div className="flex justify-between"><span className="text-[#6c6258]">Spaces</span><span className="font-medium">{metric.spaces}</span></div>
                        <div className="flex justify-between"><span className="text-[#6c6258]">Messages</span><span className="font-medium">{metric.messages}</span></div>
                        <div className="flex justify-between"><span className="text-[#6c6258]">Users</span><span className="font-medium">{metric.users}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activePanel === "packs" && (
              <div className="space-y-6">
                <p className="max-w-3xl text-sm leading-relaxed text-[#5f5144] md:text-base">Builder Packs mattered because they reduced technical and operational friction: Monad resources, agenda, deliverables, pitch expectations, submit flow, and Godínez onboarding lived in one place.</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {builderPackLinks.map((pack) => (
                    <a key={pack.href} href={pack.href} target="_blank" rel="noopener noreferrer" className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5 transition-all hover:-translate-y-0.5 hover:bg-white">
                      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8a7664]">Builder enablement</p>
                      <h3 className="mb-3 text-lg font-semibold leading-snug">{pack.title}</h3>
                      <p className="mb-5 text-sm leading-relaxed text-[#5f5144]">{pack.note}</p>
                      <span className="inline-flex items-center gap-2 text-sm text-[#6f4cc3]">Open Notion <ArrowUpRight className="h-3.5 w-3.5" /></span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {activePanel === "continuity" && (
              <div className="space-y-6">
                <p className="max-w-3xl text-sm leading-relaxed text-[#5f5144] md:text-base">The strongest retention story is not a claim. It is visible builder continuation. Frutero Talks helped surface teams that kept compounding after the Blitz windows.</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {continuitySignals.map((signal) => (
                    <div key={signal.title} className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5">
                      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8a7664]">Builder continuity</p>
                      <h3 className="mb-3 text-xl font-semibold leading-snug">{signal.title}</h3>
                      <p className="text-sm leading-relaxed text-[#5f5144]">{signal.note}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[24px] border border-[#ddd3c8] bg-[#faf7f2] p-5 text-sm leading-relaxed text-[#5f5144]">
                  These continuity signals matter because they show post-event follow-through: builders reappearing in content, improving outcomes, and moving from participation to stronger competitive results.
                </div>
              </div>
            )}

            {activePanel === "content" && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5"><h3 className="mb-4 text-lg font-semibold">Frutero posts</h3><div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-[#6c6258]">Impressions</span><span className="font-medium">{socialStats.fruteroImpressions.toLocaleString()}</span></div><div className="flex justify-between"><span className="text-[#6c6258]">Likes</span><span className="font-medium">{socialStats.fruteroLikes}</span></div></div></div>
                  <div className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5"><h3 className="mb-4 text-lg font-semibold">External amplification</h3><div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-[#6c6258]">Impressions</span><span className="font-medium">{socialStats.partnerImpressions.toLocaleString()}</span></div><div className="flex justify-between"><span className="text-[#6c6258]">Likes</span><span className="font-medium">{socialStats.partnerLikes}</span></div></div></div>
                  <div className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5"><h3 className="mb-4 text-lg font-semibold">Videos and streams</h3><div className="space-y-2 text-sm"><div className="flex justify-between"><span className="text-[#6c6258]">Views</span><span className="font-medium">{socialStats.videoViews.toLocaleString()}</span></div><div className="flex justify-between"><span className="text-[#6c6258]">Likes</span><span className="font-medium">{socialStats.videoLikes}</span></div></div></div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5">
                    <div className="mb-4 flex items-center gap-2"><MessageSquare className="h-4 w-4 text-[#6f4cc3]" /><h3 className="text-lg font-semibold">Post references</h3></div>
                    <div className="space-y-4">
                      {Object.entries(postGroups).map(([key, posts]) => (
                        <div key={key}>
                          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#8a7664]">{key === "partner" ? "External posts" : key === "video" ? "Video posts" : "Frutero posts"}</p>
                          <div className="space-y-2">
                            {posts.slice(0, 3).map((post) => (
                              <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-[#ece3d8] bg-[#faf7f2] p-3 text-sm text-[#5f5144] hover:bg-white">
                                <p className="mb-1 truncate text-xs text-[#8a7664]">{post.url}</p>
                                <div className="flex justify-between gap-3"><span>{post.impressions.toLocaleString()} impressions/views</span><span>{post.likes} likes</span></div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5">
                    <div className="mb-4 flex items-center gap-2"><Radio className="h-4 w-4 text-[#6f4cc3]" /><h3 className="text-lg font-semibold">Livestream archive</h3></div>
                    <div className="space-y-3">
                      {youtubeStreams.map((stream) => (
                        <a key={stream.url} href={stream.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-[#ece3d8] bg-[#faf7f2] p-4 hover:bg-white">
                          <p className="text-xs uppercase tracking-[0.18em] text-[#8a7664]">{stream.channel}</p>
                          <h4 className="mt-1 mb-1 font-semibold">{stream.title}</h4>
                          <div className="flex justify-between text-sm text-[#5f5144]"><span>{stream.event}</span><span>{stream.views} views</span></div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePanel === "delivery" && (
              <div className="space-y-6">
                <p className="max-w-3xl text-sm leading-relaxed text-[#5f5144] md:text-base">This module translates the Q1 workstream scope into a clearer evidence block. It should stay subordinate to stronger proof when more workshop, university, and pipeline details are added.</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {deliveryEvidence.map((item) => (
                    <div key={item.label} className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5">
                      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#8a7664]">Documented delivery</p>
                      <p className="text-3xl font-semibold">{item.value}</p>
                      <p className="mt-2 text-sm text-[#5f5144]">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[24px] border border-[#ddd3c8] bg-[#faf7f2] p-5 text-sm leading-relaxed text-[#5f5144]">
                  We should enrich this module next with concrete workshop titles, university names, and vibe coding bootcamp pipeline details so the broader support layer is as evidence-backed as the Blitz section.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="relative border-t border-[#ddd3c8] px-4 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-[#8a7664]">
          <p>Frutero Club × Monad Foundation - Q1 2026 report</p>
        </div>
      </footer>
    </main>
  );
}
