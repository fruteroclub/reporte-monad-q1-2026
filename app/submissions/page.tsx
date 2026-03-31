"use client";

import { useState } from "react";
import { Trophy, Users, ExternalLink } from "lucide-react";
import { NavTabs, SectionTitle, ProjectCard } from "@/components/SharedComponents";
import { blitz1Submissions, blitz2Submissions, blitz2Mentors } from "@/data/reportData";
import Link from "next/link";

type BlitzTab = "blitz1" | "blitz2";

export default function SubmissionsPage() {
  const [activeTab, setActiveTab] = useState<BlitzTab>("blitz2");

  const submissions = activeTab === "blitz1" ? blitz1Submissions : blitz2Submissions;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            &larr; Back to Overview
          </Link>

          <SectionTitle
            icon={<Trophy className="w-8 h-8" />}
            title="All Projects"
            subtitle="34 projects across 2 Blitz hackathons in Q1 2026"
          />

          <NavTabs active="submissions" />

          {/* Blitz Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab("blitz1")}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all border ${
                activeTab === "blitz1"
                  ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
                  : "bg-[#1a1a1a] border-[#333] text-gray-400 hover:bg-[#222] hover:text-white"
              }`}
            >
              <span className="font-bold">Blitz 1</span> — CDMX (Feb 21)
              <span className="ml-2 px-2 py-0.5 rounded-md bg-black/30 text-xs">
                18 projects
              </span>
            </button>
            <button
              onClick={() => setActiveTab("blitz2")}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all border ${
                activeTab === "blitz2"
                  ? "bg-pink-500/20 border-pink-500/40 text-pink-300"
                  : "bg-[#1a1a1a] border-[#333] text-gray-400 hover:bg-[#222] hover:text-white"
              }`}
            >
              <span className="font-bold">Blitz 2</span> — Online (Mar 27)
              <span className="ml-2 px-2 py-0.5 rounded-md bg-black/30 text-xs">
                16 projects
              </span>
            </button>
          </div>

          {/* Event Summary */}
          <div className={`p-4 rounded-xl border mb-8 ${
            activeTab === "blitz1"
              ? "bg-purple-500/5 border-purple-500/20"
              : "bg-pink-500/5 border-pink-500/20"
          }`}>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-gray-400">Event: </span>
                <span className="text-white font-medium">
                  {activeTab === "blitz1" ? "Monad Blitz Ciudad de México" : "Monad Blitz Ciudad de México #2"}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Date: </span>
                <span className="text-white font-medium">
                  {activeTab === "blitz1" ? "February 21, 2026" : "March 27, 2026"}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Projects: </span>
                <span className="text-white font-medium">{submissions.length}</span>
              </div>
              <div>
                <span className="text-gray-400">Total Votes: </span>
                <span className="text-white font-medium">
                  {activeTab === "blitz1" ? "495" : "513"}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {submissions.map((project) => (
              <ProjectCard key={`${activeTab}-${project.rank}`} {...project} />
            ))}
          </div>

          {/* Blitz 2 Mentors Section */}
          {activeTab === "blitz2" && (
            <div className="mt-12 md:mt-16">
              <div className="flex items-start gap-3 mb-6 md:mb-8">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 shrink-0">
                  <Users className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">Blitz 2 — Mentors</h2>
                  <p className="text-sm md:text-base text-gray-400">
                    {blitz2Mentors.length} mentors guiding builders through Monad Blitz Ciudad de México #2
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blitz2Mentors.map((mentor) => (
                  <div
                    key={mentor.name}
                    className="p-5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-pink-500/40 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-sm">
                        {mentor.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white truncate">{mentor.name}</h3>
                        <p className="text-xs text-pink-400">{mentor.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{mentor.expertise}</p>
                    {mentor.twitter && (
                      <a
                        href={`https://x.com/${mentor.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        @{mentor.twitter} <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-[#333]">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>Frutero Club × Monad Foundation — Q1 2026</p>
        </div>
      </footer>
    </main>
  );
}
