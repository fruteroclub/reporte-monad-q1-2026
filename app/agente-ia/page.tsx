import { Metadata } from "next";
import { Bot, Code, Zap, GitBranch, FileCode, Cpu, ExternalLink, Check } from "lucide-react";
import { NavTabs, SectionTitle } from "@/components/SharedComponents";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ana Banana 🍌 — Agente DevRel IA | Monad Blitz CDMX",
  description: "Primera iniciativa de agente DevRel en hackathon presencial",
};

export default function AgenteIAPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-yellow-950/20 via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            ← Volver al Overview
          </Link>

          <div className="text-center mb-12">
            <div className="text-7xl md:text-9xl mb-6">🍌</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Ana Banana
            </h1>
            <p className="text-xl text-purple-400 font-medium mb-2">Agente DevRel IA</p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Primera iniciativa de soporte agente en hackathon presencial — Monad Blitz CDMX
            </p>
          </div>

          <NavTabs active="agente-ia" />
        </div>
      </section>

      {/* Iniciativa */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            icon={<Bot className="w-8 h-8" />}
            title="La Iniciativa"
            subtitle="Innovación en soporte técnico para hackathons"
          />

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Para el <strong className="text-purple-400">Monad Blitz CDMX</strong>, Frutero Club 
              desplegó por primera vez su infraestructura de soporte agente como herramienta activa 
              de acompañamiento a builders. La iniciativa incluyó el diseño, configuración y activación 
              de <strong className="text-yellow-400">Ana Banana 🍌</strong>, un agente DevRel especializado 
              creado específicamente para el evento, con capacidad de auto-configuración mediante un único 
              prompt de bootstrap.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-900/5 border border-purple-500/20">
                <Bot className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-xl font-bold mb-2 text-purple-400">Agente Autónomo</h3>
                <p className="text-gray-300 text-sm">
                  Ana Banana fue configurada con identidad, roles y knowledge base propios. 
                  Se auto-configuró mediante un prompt de bootstrap y operó de forma autónoma durante todo el evento.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-900/5 border border-yellow-500/20">
                <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Soporte en Tiempo Real</h3>
                <p className="text-gray-300 text-sm">
                  Disponible durante todo el evento para resolver dudas técnicas, ayudar con setup 
                  de entorno y guiar decisiones de arquitectura bajo presión de tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura del Servicio */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            icon={<Code className="w-8 h-8" />}
            title="Cobertura del Servicio"
            subtitle="Soporte técnico especializado end-to-end"
          />

          <div className="space-y-4">
            {[
              {
                icon: <FileCode className="w-5 h-5" />,
                title: "Setup de Entorno",
                description: "Foundry, wallets, testnets, configuración de proyectos base",
              },
              {
                icon: <GitBranch className="w-5 h-5" />,
                title: "Arquitectura de Contratos",
                description: "Definición de smart contracts, estructura de proyectos Web3, mejores prácticas",
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: "Integración Monad",
                description: "Conexión con testnet, deployment de contratos, resolución de errores",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Pivotes Técnicos",
                description: "Resolución de problemas bajo presión, cambios de arquitectura de último minuto",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 md:p-6 rounded-xl bg-[#1a1a1a] border border-[#333] hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Acompañados */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            icon={<GitBranch className="w-8 h-8" />}
            title="Proyectos Acompañados"
            subtitle="Equipos que recibieron soporte especializado"
          />

          <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] mb-6">
            <p className="text-gray-300 leading-relaxed">
              Los equipos participantes contaron con soporte especializado para el desarrollo de sus 
              proyectos en el ecosistema Monad, incluyendo implementación de contratos inteligentes 
              (ERC-20, lógica de agente on-chain) e integración de stack web con la testnet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Implementación de tokens ERC-20",
              "Smart contracts de staking",
              "Lógica de agentes on-chain",
              "Integración frontend con Monad testnet",
              "Deployment y verificación",
              "Debugging de transacciones",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] border border-[#333]"
              >
                <Check className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestructura Desplegada */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-purple-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            icon={<Cpu className="w-8 h-8" />}
            title="Infraestructura Desplegada"
            subtitle="Recursos open-source para la comunidad"
          />

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-900/5 border border-yellow-500/20">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">🍌 Ana Banana</h3>
                  <p className="text-sm text-gray-300">
                    Agente DevRel dedicado al evento con identidad, roles y knowledge base propios
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-md bg-black/30 text-xs text-yellow-400 border border-yellow-500/20">
                  Agente IA
                </span>
                <span className="px-3 py-1 rounded-md bg-black/30 text-xs text-yellow-400 border border-yellow-500/20">
                  OpenClaw
                </span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#333] hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Repositorio de Configuración</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Template reutilizable para futuros eventos del ecosistema
                  </p>
                  <code className="text-xs bg-black/50 px-3 py-1 rounded text-purple-400 font-mono">
                    fruteroclub/monad-blitz-agents
                  </code>
                </div>
                <a
                  href="https://github.com/fruteroclub/monad-blitz-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-all border border-purple-500/20 shrink-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#333] hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Monad Blitz Starter</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Template de proyecto listo para builders con setup completo
                  </p>
                  <code className="text-xs bg-black/50 px-3 py-1 rounded text-purple-400 font-mono">
                    fruteroclub/monad-blitz-starter
                  </code>
                </div>
                <a
                  href="https://github.com/fruteroclub/monad-blitz-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-all border border-purple-500/20 shrink-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aprendizaje Clave */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            icon={<Zap className="w-8 h-8" />}
            title="Aprendizaje Clave"
            subtitle="Validación del modelo para futuros eventos"
          />

          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-500/10 via-purple-500/5 to-black border border-green-500/20">
            <p className="text-lg text-gray-300 leading-relaxed">
              Esta primera iteración <strong className="text-green-400">validó el modelo de agente 
              como herramienta de soporte en hackathons presenciales</strong>, sentando base para escalar 
              la iniciativa en próximos eventos del ecosistema. La combinación de mentoría humana + 
              asistencia agente demostró ser efectiva para maximizar el tiempo de los builders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-6 rounded-xl bg-[#1a1a1a] border border-[#333]">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <p className="text-sm text-gray-400">Disponibilidad continua</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#1a1a1a] border border-[#333]">
              <div className="text-3xl font-bold text-purple-400 mb-2">18</div>
              <p className="text-sm text-gray-400">Proyectos apoyados</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#1a1a1a] border border-[#333]">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <p className="text-sm text-gray-400">Escalabilidad futura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#333]">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p>🍌 Ana Banana — Powered by Frutero Club</p>
          <p className="mt-2">Monad Blitz CDMX — 21 de febrero 2026</p>
        </div>
      </footer>
    </main>
  );
}
