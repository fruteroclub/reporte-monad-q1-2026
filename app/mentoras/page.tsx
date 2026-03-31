import { Metadata } from "next";
import { Users } from "lucide-react";
import { NavTabs, SectionTitle, MentorCard } from "@/components/SharedComponents";
import { mentors } from "@/data/reportData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentoras — Monad Blitz CDMX",
  description: "Equipo de mentoras especializadas durante el evento",
};

export default function MentorasPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            ← Volver al Overview
          </Link>

          <SectionTitle
            icon={<Users className="w-8 h-8" />}
            title="Equipo de Mentoras"
            subtitle="Expertas especializadas que acompañaron a los builders"
          />

          <NavTabs active="mentoras" />

          <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-900/5 border border-purple-500/20">
            <p className="text-gray-300 leading-relaxed">
              Frutero Club coordinó un equipo de <strong className="text-purple-400">{mentors.length} mentoras especializadas</strong> para 
              ofrecer soporte en áreas estratégicas durante el Monad Blitz CDMX. El equipo cubrió desde desarrollo 
              técnico hasta estrategia de negocio, marketing y compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mentors.map((mentor, i) => (
              <MentorCard key={i} {...mentor} />
            ))}
          </div>

          {/* Areas de Expertise */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Áreas de Experiencia Cubiertas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Business Models",
                "Smart Contracts",
                "UX/UI Design",
                "Web3 Marketing",
                "Fintech",
                "Growth Strategy",
                "Compliance (KYC/PLD)",
                "Full Stack Dev",
                "Community Building",
                "LATAM GTM",
                "Strategic Comms",
                "Databases",
              ].map((area, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-center">
                  <p className="text-sm text-purple-400 font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Turnos */}
          <div className="mt-12 p-6 rounded-xl bg-[#1a1a1a] border border-[#333]">
            <h3 className="text-xl font-bold mb-4">Turnos de Mentoría</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
                <p className="text-sm text-gray-400 mb-1">Turno 2</p>
                <p className="font-bold text-purple-400">12:00 - 14:00h</p>
              </div>
              <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
                <p className="text-sm text-gray-400 mb-1">Turno 3</p>
                <p className="font-bold text-purple-400">14:00 - 16:00h</p>
              </div>
              <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
                <p className="text-sm text-gray-400 mb-1">Turno 4</p>
                <p className="font-bold text-purple-400">16:00 - 18:00h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-[#333]">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>Reporte generado por Frutero Club 🍌</p>
        </div>
      </footer>
    </main>
  );
}
