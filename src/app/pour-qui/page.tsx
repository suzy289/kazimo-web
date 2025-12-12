"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Rocket, CheckCircle2, Sparkles } from "lucide-react";

const segments = [
  {
    title: "EMF déjà équipées",
    subtitle: "Moderniser et étendre votre système existant, sans tout casser",
    icon: Building2,
    text: [
      "Substitution progressive ou couche digitale/API autour de l'existant.",
      "Ajout Mobile Money, application mobile clients, réseau d'agents, assistant IA et modules complémentaires.",
    ],
    cta: "Planifier un atelier de diagnostic de votre système actuel",
    color: "from-[#1F5FFF] to-[#4DA3FF]",
  },
  {
    title: "EMF en démarrage",
    subtitle: "Démarrer avec un socle solide, prêt pour la croissance",
    icon: Rocket,
    text: [
      "Core banking prêt à l'emploi, conforme aux standards locaux.",
      "Modules activables progressivement (agents, mobile, assurance, RH…).",
      "Modèle économique qui limite les coûts initiaux.",
    ],
    benefits: [
      "Réduction du temps entre l'obtention de l'agrément et l'ouverture effective.",
      "Mise en service rapide avec des outils dignes d'une grande institution.",
    ],
    cta: "Discuter de votre projet de lancement",
    color: "from-[#d4af37] to-[#f7d774]",
  },
];

export default function PourQuiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header Professionnel avec Image */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        {/* Formes géométriques décoratives */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#1F5FFF]/20 blur-3xl" />
          <div className="absolute -left-24 top-1/2 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-[#4DA3FF]/20 blur-3xl" />
        </div>

        {/* Image avec formes géométriques */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative h-full w-full">
            {/* Forme hexagonale pour l'image */}
            <div className="absolute right-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 transform">
              <div className="relative h-full w-full">
                {/* Hexagone principal */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src="/depositphotos_382815564-stock-photo-forex-chart.jpg"
                    alt="Finance moderne"
                    fill
                    className="object-cover opacity-40"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F5FFF]/30 via-transparent to-[#d4af37]/20" />
                </div>
                {/* Bordure hexagonale or */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                  }}
                >
                  <div className="absolute inset-0 border-4 border-[#d4af37]/60" style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)" }} />
                </div>
              </div>
            </div>

            {/* Formes flottantes */}
            <div className="absolute left-[15%] top-[20%] animate-float">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#1F5FFF]/30 to-[#4DA3FF]/30 backdrop-blur-sm border border-white/20 rotate-12" />
            </div>
            <div className="absolute right-[25%] bottom-[25%] animate-float" style={{ animationDelay: "2s" }}>
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d4af37]/30 to-[#f7d774]/30 backdrop-blur-sm border border-white/20 -rotate-12" />
            </div>
          </div>
        </div>

        {/* Contenu du header */}
        <div className="section relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/20 px-5 py-2.5 text-base font-semibold text-[#d4af37] backdrop-blur-sm border border-[#d4af37]/30">
              <Sparkles className="h-4 w-4" />
              Pour qui ?
            </div>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Kazimo accompagne les{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f7d774] to-[#d4af37] bg-clip-text text-transparent">
                EMF
              </span>{" "}
              à chaque étape de leur développement
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Que vous soyez une institution établie cherchant à moderniser ou une nouvelle EMF prête à démarrer, 
              nous avons la solution adaptée à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal en deux colonnes */}
      <section className="section py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {segments.map((seg, index) => (
            <div
              key={seg.title}
              className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Dégradé de fond */}
              <div className={`absolute inset-0 bg-gradient-to-br ${seg.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

              {/* Bordure or animée */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#d4af37]/30 transition-colors" />

              {/* Icône */}
              <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${seg.color} shadow-lg`}>
                <seg.icon className="h-8 w-8 text-white" />
              </div>

              {/* Titre et sous-titre */}
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-3">
                {seg.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6 font-medium">{seg.subtitle}</p>

              {/* Liste de points */}
              <ul className="mb-6 space-y-4">
                {seg.text.map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${seg.color} shadow-md`}>
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-base text-slate-700 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>

              {/* Bénéfices supplémentaires */}
              {seg.benefits && (
                <div className="mb-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
                  <p className="mb-4 font-heading text-lg font-semibold text-slate-900">Bénéfices clés :</p>
                  <ul className="space-y-3">
                    {seg.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0" />
                        <span className="text-base text-slate-700 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <Link
                href="/contact"
              className="group/btn inline-flex items-center gap-3 rounded-xl border border-black bg-black px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 hover:bg-[#1f5fff] hover:border-[#1f5fff] relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"></span>
                <span className="relative z-10">{seg.cta}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1 relative z-10" />
              </Link>

              {/* Éléments décoratifs */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#1F5FFF]/10 to-transparent blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-gradient-to-tr from-[#d4af37]/10 to-transparent blur-xl" />
            </div>
          ))}
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="section pb-20">
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#d4af37]/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-center shadow-2xl">
          {/* Formes décoratives */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#1F5FFF]/20 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#d4af37]/20 blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-4xl font-bold text-white mb-4 sm:text-5xl">
              Prêt à transformer votre EMF ?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et découvrir comment Kazimo peut vous accompagner.
            </p>
            <Link
              href="/contact"
            className="inline-flex items-center gap-3 rounded-xl border border-black bg-black px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 hover:bg-[#1f5fff] hover:border-[#1f5fff] relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500"></span>
              <span className="relative z-10">Nous contacter</span>
              <ArrowRight className="h-5 w-5 relative z-10" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
