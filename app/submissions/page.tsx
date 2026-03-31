import { Metadata } from "next";
import { Trophy } from "lucide-react";
import { NavTabs, SectionTitle, ProjectCard } from "@/components/SharedComponents";
import { submissions } from "@/data/reportData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyectos — Monad Blitz CDMX",
  description: "18 proyectos presentados en el Monad Blitz Ciudad de México",
};

export default function SubmissionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            ← Volver al Overview
          </Link>

          <SectionTitle
            icon={<Trophy className="w-8 h-8" />}
            title="Proyectos Presentados"
            subtitle={`${submissions.length} proyectos aprobados en el Monad Blitz CDMX`}
          />

          <NavTabs active="submissions" />

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {submissions.map((project) => (
              <ProjectCard key={project.rank} {...project} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-[#333]">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>Reporte generado por Frutero Club 🍌</p>
        </div>
      </footer>
    </main>
  );
}
