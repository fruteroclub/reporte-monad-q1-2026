"use client";

import { useState } from "react";
import { Trophy, Users, ExternalLink } from "lucide-react";
import { NavTabs, SectionTitle, ProjectCard } from "@/components/SharedComponents";
import { blitz1Mentors, blitz1Submissions, blitz2Mentors, blitz2Submissions, blitz3Mentors, blitz3Submissions, q1Stats } from "@/data/reportData";
import Link from "next/link";

type BlitzTab = "blitz1" | "blitz2" | "blitz3";

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
      accent: "purple",
      chip: "bg-purple-500/20 border-purple-500/40 text-purple-300",
      border: "bg-purple-500/5 border-purple-500/20",
    },
    blitz2: {
      submissions: blitz2Submissions,
      mentors: blitz2Mentors,
      title: "Monad Blitz Ciudad de México #2",
      label: "Blitz 2",
      date: "March 27, 2026",
      votes: q1Stats.blitz2Votes,
      accent: "pink",
      chip: "bg-pink-500/20 border-pink-500/40 text-pink-300",
      border: "bg-pink-500/5 border-pink-500/20",
    },
    blitz3: {
      submissions: blitz3Submissions,
      mentors: blitz3Mentors,
      title: "Monad Blitz Monterrey",
      label: "Blitz MTY",
      date: "April 18, 2026",
      votes: q1Stats.blitz3Votes,
      accent: "blue",
      chip: "bg-blue-500/20 border-blue-500/40 text-blue-300",
      border: "bg-blue-500/5 border-blue-500/20",
    },
  } as const;

  const current = config[activeTab];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            &larr; Back to Overview
          </Link>

          <SectionTitle icon={<Trophy className="w-8 h-8" />} title="All Projects" subtitle="53 projects across 3 Monad Blitz hackathons" />

          <NavTabs active="submissions" />

          <div className="flex flex-wrap gap-2 mb-8">
            <button onClick={() => setActiveTab("blitz1")} className={`px-5 py-3 rounded-xl text-sm font-medium transition-all border ${activeTab === "blitz1" ? config.blitz1.chip : "bg-[#1a1a1a] border-[#333] text-gray-400 hover:bg-[#222] hover:text-white"}`}><span className="font-bold">Blitz 1</span> — CDMX (Feb 21)<span className="ml-2 px-2 py-0.5 rounded-md bg-black/30 text-xs">18 projects</span></button>
            <button onClick={() => setActiveTab("blitz2")} className={`px-5 py-3 rounded-xl text-sm font-medium transition-all border ${activeTab === "blitz2" ? config.blitz2.chip : "bg-[#1a1a1a] border-[#333] text-gray-400 hover:bg-[#222] hover:text-white"}`}><span className="font-bold">Blitz 2</span> — CDMX #2 (Mar 27)<span className="ml-2 px-2 py-0.5 rounded-md bg-black/30 text-xs">16 projects</span></button>
            <button onClick={() => setActiveTab("blitz3")} className={`px-5 py-3 rounded-xl text-sm font-medium transition-all border ${activeTab === "blitz3" ? config.blitz3.chip : "bg-[#1a1a1a] border-[#333] text-gray-400 hover:bg-[#222] hover:text-white"}`}><span className="font-bold">Blitz MTY</span> — Monterrey (Apr 18)<span className="ml-2 px-2 py-0.5 rounded-md bg-black/30 text-xs">19 projects</span></button>
          </div>

          <div className={`p-4 rounded-xl border mb-8 ${current.border}`}>
            <div className="flex flex-wrap gap-6 text-sm">
              <div><span className="text-gray-400">Event: </span><span className="text-white font-medium">{current.title}</span></div>
              <div><span className="text-gray-400">Date: </span><span className="text-white font-medium">{current.date}</span></div>
              <div><span className="text-gray-400">Projects: </span><span className="text-white font-medium">{current.submissions.length}</span></div>
              <div><span className="text-gray-400">Total Votes: </span><span className="text-white font-medium">{current.votes}</span></div>
              <div><span className="text-gray-400">Mentors: </span><span className="text-white font-medium">{current.mentors.length}</span></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {current.submissions.map((project) => (
              <ProjectCard key={`${activeTab}-${project.rank}`} {...project} />
            ))}
          </div>

          <div className="mt-12 md:mt-16">
            <div className="flex items-start gap-3 mb-6 md:mb-8">
              <div className={`p-2 rounded-lg ${activeTab === "blitz1" ? "bg-purple-500/10 text-purple-400" : activeTab === "blitz2" ? "bg-pink-500/10 text-pink-400" : "bg-blue-500/10 text-blue-400"} shrink-0`}>
                <Users className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{current.label} — Mentors</h2>
                <p className="text-sm md:text-base text-gray-400">{current.mentors.length} mentors guiding builders through {current.title}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {current.mentors.map((mentor) => (
                <div key={mentor.name} className="p-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-purple-500/40 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">{mentor.name.charAt(0)}</div>
                    <div className="flex-1 min-w-0"><h3 className="text-base font-bold text-white truncate">{mentor.name}</h3><p className="text-xs text-purple-400">{mentor.role}</p></div>
                  </div>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-3">{mentor.expertise}</p>
                  {mentor.twitter && <a href={`https://x.com/${mentor.twitter}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors">@{mentor.twitter} <ExternalLink className="w-3 h-3" /></a>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-[#333]"><div className="max-w-7xl mx-auto text-center text-sm text-gray-500"><p>Frutero Club × Monad Foundation — 2026 Blitz Report</p></div></footer>
    </main>
  );
}
