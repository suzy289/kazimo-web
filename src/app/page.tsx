"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Smartphone, Users, BarChart3, CreditCard, Calculator, Eye, Zap, Lock, Globe, Bot, TrendingUp, Sparkles, Rocket, Target } from "lucide-react";
import { useState, useEffect } from "react";

function DashboardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const dashboards = [
    {
      title: "Tableau de Bord Exécutif",
      statusColor: "bg-emerald-500",
      metrics: [
        { value: "15.2M", label: "XAF en cours" },
        { value: "1,247", label: "Clients actifs" },
      ],
      charts: [
        { label: "Taux de recouvrement", value: "96.8%", percentage: 96.8, color: "emerald" },
        { label: "Portefeuille à risque", value: "2.1%", percentage: 2.1, color: "orange" },
      ],
    },
    {
      title: "Tableau de Bord Opérationnel",
      statusColor: "bg-blue-500",
      metrics: [
        { value: "8.5M", label: "Transactions mensuelles" },
        { value: "342", label: "Agents actifs" },
      ],
      charts: [
        { label: "Taux de croissance", value: "18.5%", percentage: 18.5, color: "blue" },
        { label: "Satisfaction client", value: "94.2%", percentage: 94.2, color: "emerald" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dashboards.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden mirror-overlay">
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 25%, transparent 50%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.12) 100%)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
        }}
      />
      {dashboards.map((dashboard, index) => (
        <div
          key={index}
          className={`absolute inset-0 p-8 transition-all duration-[2000ms] ease-in-out z-20 ${
            index === currentIndex 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-heading text-lg font-semibold text-slate-900">
              {dashboard.title}
            </h3>
            <span className={`h-2 w-2 rounded-full ${dashboard.statusColor}`} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {dashboard.metrics.map((metric, i) => (
              <div key={i} className="rounded-lg bg-slate-50 p-4 text-center">
                <div className="text-2xl font-bold text-[#1F5FFF]">{metric.value}</div>
                <p className="text-xs text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {dashboard.charts.map((chart, i) => (
              <div key={i}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{chart.label}</span>
                  <span className={`font-semibold ${
                    chart.color === "emerald" ? "text-emerald-600" :
                    chart.color === "orange" ? "text-orange-600" :
                    "text-blue-600"
                  }`}>
                    {chart.value}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${
                      chart.color === "emerald" ? "from-emerald-500 to-emerald-600" :
                      chart.color === "orange" ? "from-orange-500 to-red-500" :
                      "from-blue-500 to-blue-600"
                    }`}
                    style={{ width: `${chart.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {dashboards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-[#1F5FFF]" : "w-2 bg-slate-300"
            }`}
            aria-label={`Afficher le tableau ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Formes décoratives globales (fond page) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-10 h-64 w-64 rotate-6 bg-gradient-to-br from-[#1F5FFF]/28 via-[#4DA3FF]/24 to-[#1F5FFF]/16 blur-3xl" />
        <div className="absolute right-[-12%] top-6 h-80 w-80 rounded-full bg-gradient-to-br from-[#4DA3FF]/18 via-white/45 to-[#1F5FFF]/14 blur-[120px]" />
        <div className="absolute right-[8%] top-[22%] h-36 w-36 rotate-12 bg-gradient-to-br from-[#1F5FFF]/35 via-[#4DA3FF]/30 to-white/18 blur-3xl" />
        <div className="absolute left-1/2 top-[42%] h-96 w-96 -translate-x-1/2 bg-gradient-to-tr from-white/25 via-[#dfeaff]/60 to-white/25 blur-[120px]" />
      </div>
      {/* Hero Section - Style Hercules avec grille croisée et éléments flottants */}
      <section className="relative flex min-h-[clamp(40rem,70vh,80rem)] flex-col items-center justify-center overflow-hidden rounded-2xl px-2 pt-24 pb-4 sm:px-4 sm:pt-28 lg:px-4 lg:pt-32">
        {/* Background avec grille croisée - Plus visible */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/futuristic-geometric-modern-blue-professional-260nw-2475853189.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(31, 95, 255, 0.18) 1px, transparent 1px),
              linear-gradient(to left, rgba(31, 95, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(31, 95, 255, 0.18) 1px, transparent 1px),
              linear-gradient(to top, rgba(31, 95, 255, 0.12) 1px, transparent 1px),
              linear-gradient(45deg, rgba(31, 95, 255, 0.12) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(31, 95, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0",
          }}
        />
        
        {/* Éléments flottants - Stickers/icônes - Taille réduite */}
        <div className="absolute left-[10%] top-[15%] animate-float">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-md">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <div className="absolute right-[12%] top-[20%] animate-float" style={{ animationDelay: '1s' }}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-600 shadow-md">
            <Rocket className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <div className="absolute left-[8%] bottom-[25%] animate-float" style={{ animationDelay: '2s' }}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-md">
            <Target className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <div className="absolute right-[15%] bottom-[20%] animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
            <Zap className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="absolute left-[20%] top-[40%] animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 shadow-md">
            <Shield className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="absolute right-[8%] top-[50%] animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md">
            <Bot className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 w-full max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
            La plateforme de{" "}
            <span className="bg-gradient-to-r from-[#1F5FFF] to-[#4DA3FF] bg-clip-text text-transparent">
              core banking modulaire
            </span>{" "}
            pour la microfinance en Afrique
          </h1>
          <p className="mb-12 text-xl text-slate-600 sm:text-2xl">
            Kazimo est une plateforme de finance numérique modulaire conçue pour les EMF, IMF, coopératives et banques communautaires en Afrique.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1F5FFF] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#143a8b]"
            >
              Demander une démo
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Parler à un expert
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Nouveau design flottant */}
      <section className="section relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-[#e9f2ff] via-white to-[#f3f8ff] py-16 shadow-xl">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-20 top-6 h-56 w-56 rotate-6 bg-gradient-to-br from-[#1F5FFF]/24 via-[#4DA3FF]/18 to-white/12 blur-3xl" />
          <div className="absolute right-[-14%] top-4 h-64 w-64 rounded-full bg-gradient-to-br from-[#4DA3FF]/18 via-white/35 to-[#1F5FFF]/12 blur-[120px]" />
          <div className="absolute left-[8%] bottom-8 h-40 w-40 -rotate-12 bg-gradient-to-br from-[#1F5FFF]/18 via-[#4DA3FF]/14 to-white/10 blur-2xl" />
          <div className="absolute right-[10%] bottom-0 h-48 w-48 rotate-9 bg-gradient-to-br from-[#4DA3FF]/20 via-[#1F5FFF]/16 to-white/12 blur-3xl" />
        </div>

        <div className="relative z-10 mb-10 flex flex-col items-start gap-4 text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1F5FFF]">
              Capacité produit
            </p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Les piliers de Kazimo
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-700">
              Une pile core banking sécurisée, mobile-first et conforme COBAC, avec des modules prêts pour vos opérations et vos clients.
            </p>
          </div>
          <div className="hidden rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#1F5FFF] shadow-lg backdrop-blur sm:inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Disponible 24/7
          </div>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Shield,
              title: "Core banking complet",
              desc: "Dépôts, retraits, crédits, comptabilité, reporting réglementaire.",
              badge: "Ops",
            },
            {
              icon: Smartphone,
              title: "Application mobile",
              desc: "Mobile Money, USSD, app clients & réseau d'agents connectés.",
              badge: "Canaux",
            },
            {
              icon: Lock,
              title: "Conformité COBAC",
              desc: "Réglementaire intégrée, sécurité bancaire (AES-256, TLS, MFA).",
              badge: "Risque",
            },
            {
              icon: Bot,
              title: "Assistant IA 24/7",
              desc: "Support client, distribution de produits et qualification des dossiers.",
              badge: "IA",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-[#1F5FFF]"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1F5FFF] via-[#4DA3FF] to-[#1F5FFF] group-hover:bg-white" />
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-[0_12px_30px_-10px_rgba(31,95,255,0.65)] transition duration-200 group-hover:scale-105 ${
                    i < 2
                      ? "bg-white text-slate-900 group-hover:bg-white group-hover:text-slate-900"
                      : "bg-gradient-to-br from-[#1F5FFF] to-[#4DA3FF] text-white group-hover:bg-white group-hover:text-[#1F5FFF]"
                  }`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#1F5FFF] group-hover:bg-white group-hover:text-[#1F5FFF]">
                  {feature.badge}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-slate-900 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-700 group-hover:text-white/90">{feature.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1F5FFF] group-hover:text-white">
                <span className="inline-block h-2 w-2 rotate-45 bg-[#1F5FFF] shadow-[0_6px_18px_rgba(31,95,255,0.35)] group-hover:bg-white group-hover:shadow-[0_6px_18px_rgba(255,255,255,0.35)]" />
                Sécurisé & prêt au déploiement
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section - Modèle 2x2 avec accents bleu + orangered */}
      <section className="py-20">
        <div
          className="relative mx-auto max-w-[1700px] overflow-hidden rounded-3xl border border-slate-200/70 bg-transparent px-6 py-12 shadow-2xl sm:px-8 lg:px-16"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.75)), url('/futuristic-geometric-modern-blue-professional-260nw-2475853189.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-8 h-48 w-48 rotate-6 bg-[#1F5FFF]/14 blur-3xl" />
            <div className="absolute right-[-12%] top-0 h-64 w-64 rounded-full bg-[#ff7043]/18 blur-[120px]" />
            <div className="absolute left-[14%] bottom-2 h-40 w-40 rotate-12 bg-[#4DA3FF]/14 blur-2xl" />
            <div className="absolute right-[12%] bottom-0 h-52 w-52 -rotate-6 bg-[#ff7043]/16 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr,1.2fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ff7043]/10 px-4 py-2 text-sm font-semibold text-[#ff7043]">
                Notre mission
              </span>
              <h2 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
                Sécuriser et accélérer la réussite de votre microfinance
          </h2>
              <p className="text-lg text-slate-700">
                Une solution évolutive, mobile-first et conforme aux réglementations financières en Afrique.
              </p>
              <div className="flex items-center gap-3 text-sm font-semibold text-[#1F5FFF]">
                <span className="inline-block h-2 w-2 rotate-45 bg-[#ff7043] shadow-[0_6px_18px_rgba(255,112,67,0.35)]" />
                Priorité : sécurité, conformité et expérience digitale
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 overflow-visible">
              {[
                {
                  title: "Digitaliser les opérations",
                  desc: "De bout en bout : comptes, crédits, paiements, compta et reporting.",
                },
                {
                  title: "Proximité client",
                  desc: "Mobile, USSD, réseau d’agents : vos services partout, 24/7.",
                },
                {
                  title: "Données & IA",
                  desc: "Visibilité en temps réel et assistants IA pour décider plus vite.",
                },
                {
                  title: "Conformité & sécurité",
                  desc: "COBAC, chiffrement, MFA, journaux d’audit et contrôles renforcés.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    animation: `fadeUp 0.6s ease-out ${i * 80}ms both, drift 7s ease-in-out ${i * 120}ms infinite`,
                  }}
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#ff7043]" />
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F5FFF] text-white shadow-[0_12px_30px_-12px_rgba(31,95,255,0.65)] transition group-hover:scale-105">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#ff7043]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#ff7043]">
                      {i + 1}/4
                    </span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Ticker + cartes */}
      <section className="py-20">
        <div
          className="relative mx-auto max-w-[1700px] overflow-hidden rounded-3xl border border-slate-200/70 bg-transparent px-6 py-12 shadow-2xl sm:px-8 lg:px-16"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.78)), url('/arriere-plan-particules-technologiques-abstraites-realistes_23-2148431735.avif')",
            backgroundSize: "160% auto, cover",
            backgroundPosition: "0% 50%, center",
            backgroundRepeat: "repeat-x, no-repeat",
            animation: "bg-pan 30s linear infinite",
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-10 h-48 w-48 rotate-6 bg-[#1F5FFF]/14 blur-3xl" />
            <div className="absolute right-[-12%] top-0 h-64 w-64 rounded-full bg-[#ff7043]/18 blur-[120px]" />
            <div className="absolute left-[8%] bottom-0 h-52 w-52 rotate-12 bg-[#4DA3FF]/14 blur-3xl" />
          </div>

          <div className="relative mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ff7043]/12 px-4 py-2 text-sm font-semibold text-[#ff7043]">
            Trois bénéfices majeurs
              </span>
              <h2 className="text-reactive font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
                Les fondations d'un déploiement efficace et conforme
          </h2>
              <p className="text-reactive text-lg text-slate-700">
                Une trajectoire claire : maîtrise des coûts, proximité client, pilotage par la donnée et l'IA.
          </p>
        </div>
            <div className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1F5FFF]">
              Flux continu d'insights
            </div>
          </div>

          {/* Ticker défilant */}
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/90 to-transparent" />
            <div className="flex animate-marquee gap-4 py-4">
              {[
                "Maîtrise des coûts : réduction papier & automatisation",
                "Réseau d'agents : limiter l'ouverture d'agences physiques",
                "Accès 24/7 : mobile, USSD et points de service de proximité",
                "Conformité COBAC : sécurité bancaire, MFA, audits",
                "Pilotage data/IA : décisions éclairées en temps réel",
              ].flatMap((item, idx) => [
                <div
                  key={`${idx}-a`}
                  className="text-reactive flex min-w-[280px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
                >
                  <span className="inline-block h-2 w-2 rotate-45 bg-[#1F5FFF]" />
                  {item}
                </div>,
                <div
                  key={`${idx}-b`}
                  className="text-reactive flex min-w-[280px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
                >
                  <span className="inline-block h-2 w-2 rotate-45 bg-[#ff7043]" />
                  {item}
                </div>,
              ])}
            </div>
          </div>

          {/* Cartes statiques */}
          <div className="relative grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Maîtrise des coûts opérationnels",
                desc: "Automatiser, réduire le papier et capitaliser sur le réseau d'agents.",
                tag: "Efficience",
            },
            {
              icon: Users,
              title: "Proximité client augmentée",
                desc: "Canaux digitaux + points de service pour servir partout, tout le temps.",
                tag: "Croissance",
            },
            {
              icon: BarChart3,
                title: "Pilotage data & IA",
                desc: "Décisions guidées par des dashboards et alertes en temps réel.",
                tag: "Décision",
              },
            ].map((card, i) => (
            <div
              key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-lg backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-[#ff7043]" />
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F5FFF] text-white shadow-[0_12px_30px_-12px_rgba(31,95,255,0.65)]">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1F5FFF]">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-reactive mb-2 font-heading text-xl font-semibold text-slate-900">
                  {card.title}
              </h3>
                <p className="text-reactive text-sm text-slate-700">{card.desc}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Solution / Core Banking - orbite de services */}
      <section className="section py-20" id="solution">
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
            Solution Kazimo
          </div>
          <h2 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            <span className="relative inline-block">
              <span className="absolute -inset-x-4 -bottom-2 h-1 rounded-full bg-gradient-to-r from-[#1F5FFF] via-[#4DA3FF] to-[#ff7043]" />
              <span className="bg-gradient-to-r from-[#1F5FFF] via-[#4DA3FF] to-[#ff7043] bg-clip-text text-transparent">
                Kazimo Core Banking
              </span>
            </span>
            <span className="block text-slate-900 mt-1">le moteur de vos opérations</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-700">
            Un centre unique, quatre services orbitaux : chaque module se lit clairement tout en restant visible.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-6 h-32 w-32 rotate-6 bg-[#1F5FFF]/10 blur-3xl" />
            <div className="absolute right-[-14%] top-0 h-40 w-40 rounded-full bg-[#ff7043]/12 blur-[110px]" />
            <div className="absolute left-[18%] bottom-0 h-36 w-36 rotate-12 bg-[#4DA3FF]/10 blur-2xl" />
          </div>

          <div className="relative flex gap-4 overflow-x-auto pb-4">
            <div className="pointer-events-none absolute left-10 right-10 top-16 hidden h-0.5 bg-gradient-to-r from-[#1F5FFF] via-[#4DA3FF] to-[#ff7043] lg:block" />
          {[
            {
              icon: Users,
              title: "Gestion des clients",
                desc: "KYC complet, segmentation (individus, groupes, PME, coopératives) et vue 360°.",
                color: "from-[#1F5FFF] to-[#4DA3FF]",
                badge: "Clients",
            },
            {
              icon: CreditCard,
              title: "Gestion des comptes",
                desc: "Épargne, courant, dépôts à terme, intérêts flexibles et suivi en temps réel.",
                color: "from-[#ff7043] to-[#ff9c66]",
                badge: "Comptes",
            },
            {
              icon: Calculator,
              title: "Gestion des prêts",
                desc: "Produits configurables, approbations en chaîne et calendriers de remboursement.",
                color: "from-[#10b981] to-[#34d399]",
                badge: "Prêts",
            },
            {
              icon: Shield,
              title: "Comptabilité & conformité",
                desc: "Grand Livre, plan comptable local, rapports COBAC, contrôles KYC/AML.",
                color: "from-[#8b5cf6] to-[#c084fc]",
                badge: "Conformité",
            },
          ].map((mod, i) => (
            <div
                key={mod.title}
                className="group relative min-w-[260px] flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-black"
                style={{ animation: `fadeUp 0.6s ease-out ${i * 120}ms both` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${mod.color} text-white shadow-[0_12px_30px_-12px_rgba(31,95,255,0.65)]`}
                  >
                    <mod.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-slate-900">
                {mod.title}
              </h3>
                    <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                      {i + 1}/4 • {mod.badge}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-700">{mod.desc}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section className="section relative py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {/* Halos floutés */}
          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#1F5FFF]/8 blur-3xl" />
          <div className="absolute left-[-10%] top-1/2 h-80 w-80 rounded-full bg-[#4DA3FF]/10 blur-[120px]" />
          <div className="absolute right-[15%] bottom-10 h-56 w-56 rotate-45 bg-[#ff7043]/12 blur-2xl" />
          <div className="absolute left-[20%] top-0 h-48 w-48 -rotate-12 bg-[#1F5FFF]/6 blur-3xl" />
          {/* Formes géométriques */}
          <div className="absolute right-[25%] top-[15%] h-32 w-32 rotate-45 bg-[#1F5FFF]/10 blur-xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          <div className="absolute left-[15%] bottom-[20%] h-24 w-24 rotate-12 bg-[#4DA3FF]/12 blur-lg" style={{ clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)' }} />
          <div className="absolute right-[8%] top-[60%] h-40 w-40 -rotate-45 bg-[#ff7043]/10 blur-2xl" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
          <div className="absolute left-[30%] top-[25%] h-20 w-20 rotate-30 bg-[#1F5FFF]/8 blur-md" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
          <div className="absolute right-[35%] bottom-[15%] h-36 w-36 rotate-60 bg-[#4DA3FF]/9 blur-xl" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        </div>
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
              Tableaux de bord en temps réel
            </h2>
            <p className="mb-6 text-lg text-slate-600">
              Kazimo fournit des tableaux de bord exécutifs qui offrent une vue claire et synthétique de votre institution, en temps réel.
            </p>
            <ul className="space-y-4">
              {[
                { text: "100 % de visibilité", highlight: "visibilité", rest: " : résumés quotidiens des transactions par agence, produit et canal" },
                { text: "Disponibilité 24/7", highlight: "24/7", rest: " : accès permanent aux indicateurs clés où que vous soyez" },
                { text: "Vue client à 360°", highlight: "360°", rest: " : consolidation des comptes, prêts, historiques et interactions par client" },
                { text: "KPI de performance", highlight: "KPI", rest: " des prêts : portefeuille à risque, taux de recouvrement, productivité des agents, suivi des retards" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Eye className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5FFF]" />
                  <span className="text-slate-700">
                    <span className="font-semibold text-[#1F5FFF]">{item.text.split(item.highlight)[0]}</span>
                    <span className="font-bold text-[#ff7043]">{item.highlight}</span>
                    <span className="text-slate-700">{item.rest}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <DashboardCarousel />
        </div>
      </section>

      {/* Pay & Connect */}
      <section className="section py-20">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
            Modules complémentaires
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Pay & Connect – l'offre 360°
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 font-heading text-2xl font-semibold text-slate-900">
              Pay – Portefeuilles Numériques
            </h3>
            <ul className="space-y-3">
              {[
                "Gestion complète des portefeuilles clients",
                "Application mobile Android/iOS intuitive",
                "Accès aux services bancaires à distance (consultation, mini‑relevés, notifications)",
                "Envoi et réception de fonds via Mobile Money",
                "Dépôts et retraits de compte via le réseau d'agents",
                "Notifications en temps réel des opérations",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 font-heading text-2xl font-semibold text-slate-900">
              Connect – Gestion des Agents
            </h3>
            <ul className="space-y-3">
              {[
                "Inscription et gestion des profils d'agents",
                "Autorisation sécurisée des opérations d'entrée/sortie (dépôts, retraits, paiements)",
                "Suivi en temps réel de la performance et des volumes par agent",
                "Calcul et versement automatisés des commissions",
                "Réduction des coûts liés aux agences physiques et extension rapide de la couverture",
                "Expérience client améliorée grâce aux points de service de proximité",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conformité */}
      <section className="section py-20" id="conformite">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
            Conformité, Sécurité & Architecture
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Conformité COBAC, sécurité bancaire et architecture moderne
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Conformité réglementaire",
              points: [
                "Alignement COBAC et régulateurs locaux",
                "Rapports réglementaires automatisés",
                "Résidence des données conforme en Afrique centrale",
              ],
            },
            {
              icon: Lock,
              title: "Sécurité des données",
              points: [
                "Chiffrement AES-256, TLS pour toutes les communications",
                "MFA et contrôle d'accès basé sur les rôles",
                "Journaux d'audit complets, scans de vulnérabilités et pentests",
              ],
            },
            {
              icon: Zap,
              title: "Architecture technique",
              points: [
                "Microservices exposés via API RESTful",
                "Hébergement cloud sécurisé (AWS, Azure ou local)",
                "Scalabilité et priorité mobile (Android, USSD, UX intuitive)",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <block.icon className="mb-4 h-8 w-8 text-[#1F5FFF]" />
              <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
                {block.title}
              </h3>
              <ul className="space-y-2">
                {block.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Intégrations */}
      <section className="section py-20" id="integrations">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
            Intégrations & Écosystème
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Un écosystème ouvert, connecté aux principaux acteurs du marché
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <Globe className="mb-4 h-8 w-8 text-[#1F5FFF]" />
            <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
              Intégration Mobile Money & agrégateurs
            </h3>
            <ul className="space-y-3">
              {[
                "Intégration native MTN MoMo, Orange Money",
                "Connexion aux agrégateurs (ex. Smobilpay) pour étendre la couverture",
                "Transactions fluides entre systèmes bancaires et portefeuilles mobiles avec réconciliation automatisée",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <Zap className="mb-4 h-8 w-8 text-[#1F5FFF]" />
            <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
              Cadre d'API ouvertes
            </h3>
            <ul className="space-y-3">
              {[
                "API ouvertes pour intégrer assureurs, analytics, fintechs partenaires et solutions de paiement",
                "Documentation technique complète pour les développeurs",
                "Environnement de test sécurisé pour les partenaires",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IA & Modules */}
      <section className="section py-20" id="ia">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
            IA & Modules innovants
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Intelligence artificielle et modules innovants pour aller plus loin
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <Bot className="mb-4 h-8 w-8 text-[#1F5FFF]" />
            <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
              Assistant IA Kazimo
            </h3>
            <ul className="mb-4 space-y-3">
              {[
                "Support 24/7 via WhatsApp ou autres canaux digitaux",
                "FAQ auto, présentation produits, préqualification et collecte d'informations",
                "Transmission des dossiers complets à un responsable",
                "Scénarios marketing et campagnes de relance ciblées",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
              Bénéfices : diminution de la charge front‑office, meilleure réactivité, tests rapides de nouvelles offres.
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <Zap className="mb-4 h-8 w-8 text-[#1F5FFF]" />
            <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
              Modules innovants à venir
            </h3>
            <ul className="space-y-3">
              {[
                "Jonnie – HRMS/DMS : onboarding du personnel, paie, présences, gestion documentaire et pistes d'audit",
                "Assure – Microassurance : marketplace intégrée, primes, réclamations et reporting",
                "Analytics & IA avancée : prédictif (risque, churn, opportunités) et indicateurs avancés",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="section py-20" id="tarifs">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
            Modèles de tarification
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Des modèles de tarification adaptés à votre stratégie
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Plusieurs modèles selon la taille, la maturité et les ambitions de votre institution.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Modèle 1 – Faibles frais initiaux",
              onboarding: "600 000 XAF",
              revenue: [
                "Paiements : 50 % Kazimo / 50 % Partenaire",
                "Services bancaires : 30 % Kazimo / 70 % Partenaire",
              ],
              ideal: "EMF en démarrage ou en test, souhaitant limiter l'investissement initial.",
            },
            {
              title: "Modèle 2 – Équilibre",
              onboarding: "1 200 000 XAF",
              revenue: [
                "Paiements : 25 % Kazimo / 75 % Partenaire",
                "Services bancaires : 10 % Kazimo / 90 % Partenaire",
              ],
              ideal: "EMF en croissance avec volume significatif, équilibre frais initiaux / partage de revenus.",
              featured: true,
            },
            {
              title: "Modèle 3 – Autonomie totale",
              onboarding: "5 000 000 XAF",
              maintenance: "1 000 000 XAF / an",
              revenue: ["Partage de revenus : Aucun"],
              ideal: "Institutions établies souhaitant la pleine propriété des revenus transactionnels.",
            },
          ].map((model, i) => (
            <div
              key={i}
              className={`rounded-xl border border-slate-200 bg-white p-8 shadow-sm ${
                model.featured ? "ring-2 ring-[#1F5FFF]" : ""
              }`}
            >
              <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
                {model.title}
              </h3>
              <div className="mb-4 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">
                  Frais d'onboarding : {model.onboarding}
                </p>
                {model.maintenance && (
                  <p className="mt-1">Maintenance annuelle : {model.maintenance}</p>
                )}
              </div>
              <div className="mb-4 space-y-2">
                {model.revenue.map((r, j) => (
                  <div key={j} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                    <span className="text-sm">{r}</span>
                  </div>
                ))}
              </div>
              <p className="mb-6 text-sm text-slate-600">{model.ideal}</p>
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-[#1F5FFF] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#143a8b]"
              >
                Parler à un expert
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="section py-20">
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <h3 className="mb-4 font-heading text-3xl font-semibold text-slate-900">
            Vous hésitez sur le modèle le plus adapté ?
          </h3>
          <p className="mb-8 text-lg text-slate-600">
            Parlez à un expert Kazimo pour étudier votre cas et construire une offre sur mesure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1F5FFF] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#143a8b]"
          >
            Parler à un expert
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
