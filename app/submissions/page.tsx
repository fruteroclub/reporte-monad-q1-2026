"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Trophy, Users } from "lucide-react";
import { NavTabs, ProjectCard, SectionTitle } from "@/components/SharedComponents";
import {
  blitz1Mentors,
  blitz1Submissions,
  blitz2Mentors,
  blitz2Submissions,
  blitz3Mentors,
  blitz3Submissions,
  blitz4Mentors,
  blitz4Submissions,
  blitzEventMetrics,
  q1Stats,
} from "@/data/reportData";

type BlitzTab = "blitz1" | "blitz2" | "blitz3" | "blitz4";

export default function SubmissionsPage() {
  const [activeTab, setActiveTab] = useState<BlitzTab>("blitz1");

  const config = {
    blitz1: {
      submissions: blitz1Submissions,
      mentors: blitz1Mentors,
      title: "Monad Blitz Ciudad de México",
      label: "Blitz 1",
      date: "February 21, 2026",
      votes: q1Stats.blitz1Votes,
    },
    blitz2: {
      submissions: blitz2Submissions,
      mentors: blitz2Mentors,
      title: "Monad Blitz Ciudad de México #2",
      label: "Blitz 2",
      date: "March 27, 2026",
      votes: q1Stats.blitz2Votes,
    },
    blitz3: {
      submissions: blitz3Submissions,
      mentors: blitz3Mentors,
      title: "Monad Blitz Monterrey",
      label: "Blitz MTY",
      date: "April 18, 2026",
      votes: q1Stats.blitz3Votes,
    },
    blitz4: {
      submissions: blitz4Submissions,
      mentors: blitz4Mentors,
      title: "Monad Blitz Guadalajara",
      label: "Blitz GDL",
      date: "April 24-25, 2026",
      votes: q1Stats.blitz4Votes,
    },
  } as const;

  const current = config[activeTab];
  const metrics = blitzEventMetrics[activeTab];

  return (
    <main className="min-h-screen bg-[#f4ecdf] text-[#241b15]">
      <section className="px-4 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-[#6c6258] transition-colors hover:text-[#241b15]">
            &larr; Back to Overview
          </Link>

          <SectionTitle
            icon={<Trophy className="h-8 w-8" />}
            title="Project archive"
            subtitle="71 approved projects across 4 Blitz events, presented as one visible output of the broader January to April 2026 Builder Success program"
          />

          <NavTabs active="submissions" />

          <div className="mb-8 flex flex-wrap gap-2">
            {([
              ["blitz1", "Blitz 1", "CDMX", "18 projects"],
              ["blitz2", "Blitz 2", "CDMX", "16 projects"],
              ["blitz3", "Blitz MTY", "Monterrey", "19 projects"],
              ["blitz4", "Blitz GDL", "Guadalajara", "18 approved"],
            ] as const).map(([key, label, city, count]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`rounded-full border px-4 py-3 text-sm transition-all ${
                  activeTab === key
                    ? "border-[#241b15] bg-[#241b15] text-[#f7f3ee]"
                    : "border-[#ddd3c8] bg-white/75 text-[#5f5144] hover:bg-white"
                }`}
              >
                <span className="font-semibold">{label}</span> · {city}
                <span className="ml-2 rounded-full border border-black/5 bg-black/5 px-2 py-0.5 text-xs">{count}</span>
              </button>
            ))}
          </div>

          <div className="mb-8 rounded-[28px] border border-[#ddd3c8] bg-white/80 p-5 shadow-[0_10px_30px_rgba(36,27,21,0.05)]">
            <div className="flex flex-wrap gap-6 text-sm text-[#5f5144]">
              <div><span className="text-[#8a7664]">Event: </span><span className="font-medium text-[#241b15]">{current.title}</span></div>
              <div><span className="text-[#8a7664]">Date: </span><span className="font-medium text-[#241b15]">{current.date}</span></div>
              <div><span className="text-[#8a7664]">Projects: </span><span className="font-medium text-[#241b15]">{current.submissions.length}</span></div>
              <div><span className="text-[#8a7664]">Votes: </span><span className="font-medium text-[#241b15]">{current.votes}</span></div>
              <div><span className="text-[#8a7664]">Mentors: </span><span className="font-medium text-[#241b15]">{current.mentors.length}</span></div>
              <div><span className="text-[#8a7664]">Registrations: </span><span className="font-medium text-[#241b15]">{metrics.registrations}</span></div>
              <div><span className="text-[#8a7664]">Check-ins: </span><span className="font-medium text-[#241b15]">{metrics.checkInsDisplay ?? metrics.checkIns}</span></div>
            </div>
            
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {current.submissions.map((project) => (
              <ProjectCard key={`${activeTab}-${project.rank}`} {...project} />
            ))}
          </div>

          <div className="mt-12 md:mt-16">
            <div className="mb-6 flex items-start gap-3 md:mb-8">
              <div className="shrink-0 rounded-2xl border border-[#d9cfc2] bg-white/70 p-2 text-[#6f4cc3]">
                <Users className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold tracking-[-0.02em] md:text-4xl">{current.label} mentors</h2>
                <p className="text-sm text-[#6c6258] md:text-base">{current.mentors.length} mentors supporting builders during {current.title}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {current.mentors.map((mentor) => (
                <div key={mentor.name} className="rounded-[24px] border border-[#ddd3c8] bg-white/80 p-5 shadow-[0_10px_30px_rgba(36,27,21,0.05)]">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8ccee] bg-[#f7f1ff] text-sm font-semibold text-[#6f4cc3]">{mentor.name.charAt(0)}</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-semibold text-[#241b15]">{mentor.name}</h3>
                      <p className="text-xs text-[#8a7664]">{mentor.role}</p>
                    </div>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-[#5f5144]">{mentor.expertise}</p>
                  {mentor.twitter && (
                    <a href={`https://x.com/${mentor.twitter}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#316b9e] transition-colors hover:text-[#214d73]">
                      @{mentor.twitter} <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ddd3c8] px-4 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-[#8a7664]">
          <p>Frutero Club × Monad Foundation - January to April 2026 report</p>
        </div>
      </footer>
    </main>
  );
}
