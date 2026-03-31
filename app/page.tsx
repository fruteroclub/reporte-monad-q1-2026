import { Metadata } from "next";
import { 
  Trophy, Users, BarChart3, Target, TrendingUp, Award,
  Sparkles, Code, Github, ExternalLink
} from "lucide-react";
import { StatCard, SectionTitle, NavTabs } from "@/components/SharedComponents";
import { stats, submissions } from "@/data/reportData";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Monad Blitz CDMX — Reporte Frutero Club",
  description: "Reporte de actividades Frutero Club durante Monad Blitz Ciudad de México, 21 de febrero 2026",
};

export default function Home() {
  const topProjects = submissions.slice(0, 5);

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
              Monad Blitz CDMX — 21 Feb 2026
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
              Reporte{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frutero Club
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
              DevRel as a Service para el ecosistema Monad en Ciudad de México
            </p>
          </div>

          {/* Navigation */}
          <NavTabs active="overview" />

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <StatCard
              icon={<Trophy className="w-4 h-4 md:w-6 md:h-6" />}
              label="Proyectos"
              value={stats.submissions}
              color="purple"
            />
            <StatCard
              icon={<Users className="w-4 h-4 md:w-6 md:h-6" />}
              label="Votos Totales"
              value={stats.totalVotes}
              color="blue"
            />
            <StatCard
              icon={<BarChart3 className="w-4 h-4 md:w-6 md:h-6" />}
              label="Impresiones"
              value={stats.totalImpressions.toLocaleString()}
              color="green"
            />
            <StatCard
              icon={<Target className="w-4 h-4 md:w-6 md:h-6" />}
              label="Mentoras"
              value={stats.mentors}
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* Iniciativa Especial: Ana Banana */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 via-purple-500/5 to-purple-900/10 border border-yellow-500/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-5xl">🍌</div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Soporte Agente IA — Ana Banana
                </h2>
                <p className="text-sm text-gray-400">Primera iniciativa de agente DevRel en hackathon presencial</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Para el Monad Blitz CDMX, Frutero desplegó por primera vez su infraestructura de soporte agente 
              como herramienta activa de acompañamiento a builders. La iniciativa incluyó el diseño, configuración 
              y activación de <strong>Ana Banana 🍌</strong>, un agente DevRel especializado creado específicamente 
              para el evento, con capacidad de auto-configuración mediante un único prompt de bootstrap.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
                <h4 className="text-sm font-bold text-purple-400 mb-2">Cobertura del Servicio</h4>
                <p className="text-sm text-gray-300">
                  Setup de entorno (Foundry, wallets, testnets), arquitectura de contratos, 
                  estrategia de pitch y resolución de pivotes técnicos bajo presión.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-black/30 border border-purple-500/20">
                <h4 className="text-sm font-bold text-purple-400 mb-2">Infraestructura</h4>
                <p className="text-sm text-gray-300">
                  Agente dedicado con identidad propia, repositorio público de configuración 
                  reutilizable y template de proyecto listo para builders.
                </p>
              </div>
            </div>

            <Link
              href="/agente-ia"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium transition-all"
            >
              Ver Detalles Completos
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Projects */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            icon={<Award className="w-6 h-6 md:w-8 md:h-8" />}
            title="Top 5 Proyectos"
            subtitle="Los proyectos mejor calificados del Monad Blitz CDMX"
          />

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {topProjects.map((project) => (
              <div
                key={project.rank}
                className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`px-3 py-1 rounded-lg border font-bold ${
                    project.rank === 1 ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-400" :
                    project.rank === 2 ? "bg-gray-400/20 border-gray-400/30 text-gray-300" :
                    project.rank === 3 ? "bg-orange-600/20 border-orange-600/30 text-orange-400" :
                    "bg-purple-500/10 border-purple-500/20 text-purple-400"
                  }`}>
                    #{project.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-xs text-gray-400 mb-2 line-clamp-1">{project.team}</p>
                    <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-black/30 text-gray-400">
                    ⭐ {project.rating.toFixed(2)}
                  </span>
                  <span className="px-2 py-1 rounded bg-black/30 text-gray-400">
                    👍 {project.votes} votos
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/submissions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all"
          >
            Ver Todos los Proyectos ({stats.submissions})
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            icon={<Code className="w-6 h-6 md:w-8 md:h-8" />}
            title="Categorías"
            subtitle={`${stats.categories} categorías diferentes de proyectos`}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["DeFi", "AI Agents", "Gaming", "ReFi", "Payments", "Healthcare", "Prediction Markets", "P2P"].map((cat) => (
              <div key={cat} className="p-3 md:p-4 rounded-lg bg-[#1a1a1a] border border-[#333] text-center">
                <p className="text-sm md:text-base font-medium text-purple-400">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            DevRel as a Service
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Frutero Club ofrece infraestructura completa de soporte técnico para hackathons: 
            convocatoria, mentorías especializadas y agentes IA de acompañamiento.
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
            <span>Reporte generado por Frutero Club</span>
          </div>
          <p>Monad Blitz CDMX — 21 de febrero 2026</p>
        </div>
      </footer>
    </main>
  );
}
