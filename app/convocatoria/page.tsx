import { Metadata } from "next";
import { Twitter, TrendingUp, Heart } from "lucide-react";
import { NavTabs, SectionTitle, TweetCard, StatCard } from "@/components/SharedComponents";
import { tweets, stats } from "@/data/reportData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Convocatoria — Monad Blitz CDMX",
  description: "Difusión y alcance en redes sociales",
};

export default function ConvocatoriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            ← Volver al Overview
          </Link>

          <SectionTitle
            icon={<Twitter className="w-8 h-8" />}
            title="Convocatoria y Difusión"
            subtitle="Alcance en redes sociales durante el evento"
          />

          <NavTabs active="convocatoria" />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <StatCard
              icon={<TrendingUp className="w-6 h-6" />}
              label="Impresiones Totales"
              value={stats.totalImpressions.toLocaleString()}
              color="blue"
            />
            <StatCard
              icon={<Heart className="w-6 h-6" />}
              label="Likes Totales"
              value={stats.totalLikes}
              color="purple"
            />
            <StatCard
              icon={<Twitter className="w-6 h-6" />}
              label="Tweets Publicados"
              value={tweets.length}
              color="blue"
            />
          </div>

          {/* Tweets Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Tweets del Evento</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tweets.map((tweet, i) => (
                <TweetCard key={i} {...tweet} />
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20">
            <h3 className="text-xl font-bold mb-4">Tweets Destacados</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-black/30">
                <p className="text-sm text-gray-400 mb-1">Mayor alcance</p>
                <p className="font-bold text-blue-400">4,525 impresiones</p>
                <a 
                  href="https://x.com/fruteroclub/status/2014067311263510913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:underline mt-2 inline-block"
                >
                  Ver tweet →
                </a>
              </div>
              <div className="p-4 rounded-lg bg-black/30">
                <p className="text-sm text-gray-400 mb-1">Más engagement</p>
                <p className="font-bold text-purple-400">70 likes</p>
                <a 
                  href="https://x.com/fruteroclub/status/2014067311263510913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-400 hover:underline mt-2 inline-block"
                >
                  Ver tweet →
                </a>
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
