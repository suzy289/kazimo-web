"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Smartphone,
  Users,
  BarChart3,
  CreditCard,
  Calculator,
  Eye,
  Zap,
  Lock,
  Globe,
  Bot,
  TrendingUp,
  Sparkles,
  Rocket,
  Target,
  Wallet,
  Network,
  QrCode,
  CloudCog,
  Plug,
  Brain,
} from "lucide-react";
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

function MissionInteractiveSection() {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Digitaliser les opérations",
      desc: "Comptes, crédits, paiements, comptabilité et reporting de bout en bout.",
      icon: CreditCard,
      color: "#2563eb",
      details: [
        "Gestion complète des comptes clients (épargne, courant, dépôts à terme)",
        "Produits de crédit configurables avec workflows d'approbation",
        "Comptabilité en partie double et plan comptable personnalisable",
        "Reporting réglementaire automatisé (COBAC et normes locales)",
        "Suivi en temps réel des transactions et des soldes",
      ],
    },
    {
      title: "Proximité client",
      desc: "Mobile, USSD, réseau d'agents : vos services partout, 24/7.",
      icon: Smartphone,
      color: "#f97316",
      details: [
        "Application mobile Android/iOS intuitive pour vos clients",
        "Accès USSD pour les téléphones basiques",
        "Réseau d'agents connectés pour dépôts et retraits",
        "Notifications en temps réel des opérations",
        "Points de service de proximité pour réduire les déplacements",
      ],
    },
    {
      title: "Données & IA",
      desc: "Visibilité en temps réel, alertes et assistants IA pour décider plus vite.",
      icon: BarChart3,
      color: "#22c55e",
      details: [
        "Tableaux de bord exécutifs avec KPI en temps réel",
        "Vue client à 360° : comptes, prêts, historiques consolidés",
        "Analyses prédictives sur le portefeuille (risque, churn)",
        "Alertes automatiques sur les indicateurs clés",
        "Exports de données pour vos modèles d'analyse",
      ],
    },
    {
      title: "Conformité & sécurité",
      desc: "COBAC, chiffrement, MFA, journaux d'audit et contrôles renforcés.",
      icon: Shield,
      color: "#9333ea",
      details: [
        "Alignement avec les exigences COBAC et régulateurs locaux",
        "Chiffrement AES-256 pour les données au repos",
        "Protocole TLS pour toutes les communications",
        "Authentification multi-facteur et contrôle d'accès basé sur les rôles",
        "Journaux d'audit complets et scans de vulnérabilités réguliers",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div
        className="section relative overflow-hidden rounded-3xl border border-slate-200/70 bg-transparent px-6 py-12 shadow-2xl sm:px-8 lg:px-12"
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

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Colonne gauche : En-tête + Liste des services */}
            <div className="w-full md:w-[40%] space-y-4">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ff7043]/10 px-4 py-2 text-sm font-semibold text-[#ff7043]">
                  Notre mission
                </span>
                <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
                  Sécuriser et accélérer la réussite de votre microfinance
                </h2>
                <p className="text-sm text-slate-700">
                  Nous fournissons aux EMF une solution évolutive, sécurisée et conforme aux réglementations financières en Afrique.
                </p>
              </div>

              {/* Liste des services */}
              <div className="space-y-2">
                {services.map((service, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedService(i)}
                    className={`w-full rounded-xl border p-4 text-left transition-all duration-300 ${
                      selectedService === i
                        ? "border-[#1F5FFF] bg-[#1F5FFF]/10 shadow-lg"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors flex-shrink-0 ${
                          selectedService === i ? "bg-[#1F5FFF]" : "bg-slate-100"
                        }`}
                      >
                        <service.icon
                          className={`h-5 w-5 ${
                            selectedService === i ? "text-white" : "text-slate-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-heading text-base font-semibold transition-colors ${
                            selectedService === i ? "text-[#1F5FFF]" : "text-slate-900"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-slate-600 line-clamp-2">{service.desc}</p>
                      </div>
                      {selectedService === i && (
                        <ArrowRight className="h-4 w-4 text-[#1F5FFF] flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Colonne droite : Détails du service sélectionné */}
            <div className="w-full md:w-[60%] relative min-h-[400px]">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-500 ${
                    selectedService === i
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8 pointer-events-none"
                  }`}
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl h-full">
                    <div className="mb-5 flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-xl flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      >
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-xl font-bold text-slate-900">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">{service.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {service.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span className="text-sm text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
          className="absolute inset-y-0 left-1/2 w-[min(1600px,100%)] -translate-x-1/2"
          style={{
            backgroundImage:
              "url('/futuristic-geometric-modern-blue-professional-260nw-2475853189.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div 
          className="absolute inset-y-0 left-1/2 w-[min(1600px,100%)] -translate-x-1/2"
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
        <div className="section relative z-10 flex w-full flex-col items-center">
          <div className="w-full max-w-4xl text-center px-6 py-6 sm:px-10 sm:py-10">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
            La plateforme de{" "}
            <span className="bg-gradient-to-r from-[#1F5FFF] via-[#4DA3FF] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]">
              core banking modulaire
            </span>{" "}
            <span className="text-slate-900 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">pour la microfinance en Afrique</span>
          </h1>
          <p className="mb-6 text-xl text-slate-700 sm:text-2xl">
            Kazimo est une plateforme de finance numérique modulaire conçue pour les EMF, IMF, coopératives et banques communautaires en Afrique.
          </p>
          <div className="mb-10 grid gap-3 text-left text-sm text-slate-800 sm:grid-cols-2 sm:text-base">
            {[
              "Core banking complet : dépôts, retraits, crédits, comptabilité, reporting réglementaire.",
              "Application mobile clients connectée au Mobile Money et au réseau d’agents.",
              "Conformité réglementaire intégrée (COBAC et normes locales).",
              "Assistant IA disponible 24/7 pour le support client et la distribution de produits.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-32 flex flex-col items-center justify-center gap-4 sm:mt-40 sm:flex-row">
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
        </div>
      </section>

      {/* Pour Qui */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f3a] via-[#0f2747] to-[#0b1f3a] py-20 text-white" id="pour-qui">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-8 h-60 w-60 rotate-12 bg-[#1F5FFF]/18 blur-3xl" />
          <div className="absolute right-[-12%] bottom-4 h-64 w-64 rounded-full bg-[#f59e0b]/14 blur-[130px]" />
        </div>
        <div className="section relative z-10">
          <div className="mb-10 flex flex-col gap-3 text-left sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#fcd34d]">
                Pour qui ?
              </span>
              <h2 className="font-heading text-4xl font-bold sm:text-5xl">
                Kazimo accompagne les EMF à chaque étape
              </h2>
              <p className="text-lg text-white/80">
                Moderniser un existant ou démarrer sur un socle solide : on adapte le déploiement à votre contexte.
              </p>
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#fcd34d] backdrop-blur">
              Migration maîtrisée · Go-live rapide
            </div>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.1fr,1.1fr]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-[#fcd34d]">
                EMF déjà équipées
              </div>
              <h3 className="mb-2 font-heading text-2xl font-semibold text-white">
                Moderniser et étendre sans tout casser
              </h3>
              <p className="mb-4 text-sm text-white/80">
                Substitution progressive du core bancaire ou couche digitale/API autour de l’existant.
              </p>
              <ul className="space-y-2 text-sm text-white/85">
                {[
                  "Migration maîtrisée ou enveloppe API pour Mobile Money, app clients, réseau d’agents.",
                  "Activation contrôlée : assistant IA, modules complémentaires quand vous êtes prêts.",
                  "Maintien de la continuité opérationnelle pendant l’évolution.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/50 bg-white/5 px-4 py-3 text-sm font-semibold text-[#fcd34d] transition hover:bg-white/10"
              >
                Planifier un atelier de diagnostic
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f59e0b]/15 px-3 py-1 text-sm font-semibold text-[#fcd34d]">
                EMF en démarrage
              </div>
              <h3 className="mb-2 font-heading text-2xl font-semibold text-white">
                Démarrer vite avec un socle prêt pour la croissance
              </h3>
              <p className="mb-4 text-sm text-white/80">
                Core banking conforme, modules activables progressivement, modèle économique limitant les coûts initiaux.
              </p>
              <ul className="space-y-2 text-sm text-white/85">
                {[
                  "Core banking prêt à l’emploi, conforme aux standards locaux.",
                  "Modules agents, mobile, assurance, RH activables par étapes.",
                  "Réduction du temps entre agrément et ouverture effective.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/50 bg-white/5 px-4 py-3 text-sm font-semibold text-[#fcd34d] transition hover:bg-white/10"
              >
                Discuter de votre projet de lancement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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

        <div className="relative z-10">
          {/** Ligne horizontale avec points et traits verticaux pour chaque pilier (desktop) */}
          <div className="hidden lg:block">
            <div className="relative h-1 w-full rounded-full bg-slate-200/60">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 grid grid-cols-4">
                {["top", "bottom", "top", "bottom"].map((align, i) => (
                  <div key={i} className="relative flex justify-center">
                    <span className="h-3 w-3 rounded-full bg-[#1F5FFF]" />
                    <span
                      className="absolute top-3 w-[1px] bg-slate-300"
                      style={{ height: align === "top" ? "96px" : "96px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Core banking complet",
                desc: "Dépôts, retraits, crédits, comptabilité, reporting réglementaire.",
                badge: "Ops",
                align: "bottom",
                colors: "from-[#1F5FFF] via-[#4DA3FF] to-[#1F5FFF]",
              },
              {
                icon: Smartphone,
                title: "Application mobile",
                desc: "Mobile Money, USSD, app clients & réseau d'agents connectés.",
                badge: "Canaux",
                align: "top",
                colors: "from-[#f97316] via-[#fb923c] to-[#f59e0b]",
              },
              {
                icon: Lock,
                title: "Conformité COBAC",
                desc: "Réglementaire intégrée, sécurité bancaire (AES-256, TLS, MFA).",
                badge: "Risque",
                align: "bottom",
                colors: "from-[#0ea5e9] via-[#2563eb] to-[#1d4ed8]",
              },
              {
                icon: Bot,
                title: "Assistant IA 24/7",
                desc: "Support client, distribution de produits et qualification des dossiers.",
                badge: "IA",
                align: "top",
                colors: "from-[#8b5cf6] via-[#a855f7] to-[#6366f1]",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`group relative flex flex-col items-start text-left rounded-2xl p-6 transition-all duration-300 lg:items-center lg:text-center ${
                  feature.align === "top" ? "lg:-translate-y-10" : "lg:translate-y-10"
                } hover:bg-[#1F5FFF] hover:text-white`}
              >
                <div className="relative z-10 mb-4 flex items-center gap-3 lg:flex-col">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.colors} text-white shadow-[0_12px_30px_-10px_rgba(31,95,255,0.55)] transition transform group-hover:scale-105`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#1F5FFF] group-hover:bg-white/20 group-hover:text-white transition-colors lg:mt-2">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-slate-900 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-700 group-hover:text-white/90 transition-colors">{feature.desc}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#1F5FFF] group-hover:text-white transition-colors">
                  <span className="inline-block h-2 w-2 rotate-45 bg-[#1F5FFF] group-hover:bg-white shadow-[0_6px_18px_rgba(31,95,255,0.35)] transition-colors" />
                  Sécurisé & prêt au déploiement
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Design interactif */}
      <MissionInteractiveSection />

      {/* Benefits Section - Ticker + cartes */}
      <section className="py-20">
        <div
          className="section relative overflow-hidden rounded-3xl border border-slate-200/70 bg-transparent px-6 py-12 shadow-2xl sm:px-8 lg:px-12"
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
                "Maîtrise des coûts opérationnels : réduction papier & automatisation",
                "Limiter l'ouverture d'agences physiques via le réseau d'agents",
                "Accès 24/7 : mobile, USSD et points de service de proximité",
                "Conformité : sécurité bancaire, MFA, audits, COBAC",
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
                desc: "Réduire le papier, automatiser et capitaliser sur le réseau d'agents.",
                tag: "Efficience",
            },
            {
              icon: Users,
              title: "Proximité client augmentée",
                desc: "Mobile, USSD et points de service de proximité pour servir partout.",
                tag: "Croissance",
            },
            {
              icon: BarChart3,
                title: "Pilotage data & IA",
                desc: "Décisions guidées par dashboards exécutifs et analytics avancés.",
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

        <div className="section">
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
                desc: "KYC complet, segmentation (individus, groupes, PME, coopératives), vue 360° avec historique produits, garanties et interactions.",
                color: "from-[#1F5FFF] to-[#4DA3FF]",
                badge: "Clients",
            },
            {
              icon: CreditCard,
              title: "Gestion des comptes",
                desc: "Épargne, courant, dépôts à terme, règles d’intérêts flexibles, frais paramétrables, soldes temps réel et mini‑relevés.",
                color: "from-[#ff7043] to-[#ff9c66]",
                badge: "Comptes",
            },
            {
              icon: Calculator,
              title: "Gestion des prêts",
                desc: "Produits configurables, workflows d’approbation en chaîne, calendriers de remboursement, pénalités et restructurations.",
                color: "from-[#10b981] to-[#34d399]",
                badge: "Prêts",
            },
            {
              icon: Shield,
              title: "Comptabilité & conformité",
                desc: "Grand Livre, plan comptable local, rapports réglementaires COBAC, contrôles KYC/AML.",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f8ff] via-white to-[#eef4ff] py-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-6 h-52 w-52 rounded-full bg-[#1F5FFF]/12 blur-3xl" />
          <div className="absolute right-[-12%] top-0 h-72 w-72 rounded-full bg-[#4DA3FF]/10 blur-[140px]" />
          <div className="absolute left-[12%] bottom-0 h-44 w-44 rotate-12 bg-[#ff7043]/12 blur-3xl" />
        </div>

        <div className="section relative z-10">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e5edff] px-3 py-1.5 text-xs font-semibold text-[#1F5FFF]">
                Modules complémentaires
              </span>
              <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
                Pay & Connect — l'offre 360°
              </h2>
              <p className="text-base text-slate-600">
                Pay : portefeuilles numériques et Mobile Money. Connect : réseau d'agents piloté en temps réel.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#1F5FFF] shadow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Disponibilité 24/7
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                icon: Wallet,
                title: "Portefeuilles numériques",
                desc: "Gestion complète des portefeuilles clients, soldes temps réel, transferts, notifications push.",
                tags: ["Android/iOS", "Mobile Money", "Notifications"],
                color: "from-[#1F5FFF] to-[#4DA3FF]",
              },
              {
                icon: QrCode,
                title: "Paiement & cash-in/out",
                desc: "QR, USSD, dépôts/retraits via agents, réconciliation automatique.",
                tags: ["QR / USSD", "Réseau d'agents", "Temps réel"],
                color: "from-[#ff7043] to-[#ffa45c]",
              },
              {
                icon: Network,
                title: "Réseau d’agents",
                desc: "Inscription profils, autorisation sécurisée, performance et volumes en temps réel, commissions auto.",
                tags: ["Profils", "Commissions auto", "Suivi live"],
                color: "from-[#22c55e] to-[#16a34a]",
              },
              {
                icon: Smartphone,
                title: "Expérience mobile",
                desc: "Application intuitive clients et dashboards superviseurs, notifications, multi-profils.",
                tags: ["UX simple", "Push alerts", "Superviseurs"],
                color: "from-[#8b5cf6] to-[#a855f7]",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-white/70 bg-white/90 p-4 shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{ backgroundImage: `linear-gradient(to right, var(--start), var(--end))` }}
                  data-start={card.color}
                />
                <div
                  className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
                  style={{ backgroundImage: `linear-gradient(135deg, ${card.color.replace("from", "").replace("to", " to")})` }}
                >
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 font-heading text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mb-3 text-xs text-slate-700 line-clamp-2">{card.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "url('/futuristic-geometric-modern-blue-professional-260nw-2475853189.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10 bg-gradient-to-br from-white/90 to-white/60 p-5 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1F5FFF]/10 px-2.5 py-1 text-xs font-semibold text-[#1F5FFF]">
                Vue opérationnelle
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "TPS moyens sur encaissement", value: "4.2 s" },
                  { label: "Taux de réussite Mobile Money", value: "99.2 %" },
                  { label: "Agents actifs (24h)", value: "342" },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="flex items-center justify-between rounded-lg border border-white/60 bg-white/60 px-3 py-2 shadow-sm"
                  >
                    <span className="text-xs font-semibold text-slate-700">
                      {kpi.label}
                    </span>
                    <span className="text-base font-bold text-[#1F5FFF]">
                      {kpi.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-white/50 bg-white/70 p-3 shadow-sm text-xs text-slate-700">
                "Pay & Connect" harmonise Mobile Money, réseau d'agents et reporting temps réel pour livrer une expérience fluide aux clients et au siège.
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Conformité */}
      <section
        className="relative overflow-hidden bg-slate-900 py-20 text-white"
        id="conformite"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-6 h-64 w-64 rotate-12 bg-[#1F5FFF]/20 blur-3xl" />
          <div className="absolute right-[-10%] bottom-0 h-72 w-72 rounded-full bg-[#22c55e]/14 blur-[140px]" />
        </div>
        <div className="section relative z-10">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#9cc4ff]">
                Conformité, Sécurité & Architecture
              </span>
              <h2 className="font-heading text-4xl font-bold sm:text-5xl">
                Conformité COBAC, sécurité bancaire et architecture moderne
              </h2>
              <p className="text-lg text-slate-200">
                Gouvernance, contrôles et résilience technique pour protéger vos clients et vos opérations.
              </p>
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-200 backdrop-blur">
              Audit & sécurité continus
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Conformité réglementaire",
                points: [
                  "Alignement COBAC et régulateurs locaux",
                  "Rapports réglementaires automatisés",
                  "Résidence des données conforme (zone CEMAC)",
                ],
              },
              {
                icon: Lock,
                title: "Sécurité des données",
                points: [
                  "Chiffrement AES-256 et TLS sur toutes les communications",
                  "MFA et contrôle d’accès basé sur les rôles",
                  "Journaux d’audit, scans de vulnérabilités et pentests",
                ],
              },
              {
                icon: CloudCog,
                title: "Architecture technique",
                points: [
                  "Architecture microservices + API REST sécurisées",
                  "Hébergement cloud ou on-prem selon contraintes locales",
                  "Scalabilité et priorité mobile (Android, USSD, UX intuitive)",
                ],
              },
              {
                icon: Zap,
                title: "Continuité & résilience",
                points: [
                  "Plan de reprise & sauvegardes",
                  "Monitoring 24/7 et SLO suivis",
                  "Tests de charge réguliers",
                ],
              },
            ].map((block, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
              >
                <block.icon className="mb-4 h-10 w-10 text-[#9cc4ff]" />
                <h3 className="mb-3 font-heading text-xl font-semibold text-white">
                  {block.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-200">
                  {block.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 shadow-xl backdrop-blur">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Contrôles clés
            </div>
            <div className="space-y-4 text-sm text-slate-100">
              {[
                {
                  label: "Audit & logs",
                  value: "Intégral + exportable",
                  tone: "emerald",
                },
                {
                  label: "Disponibilité cible",
                  value: "99,5 % / mois",
                  tone: "blue",
                },
                {
                  label: "Chiffrement",
                  value: "Données au repos et en transit",
                  tone: "amber",
                },
                {
                  label: "Conformité",
                  value: "COBAC + exigences locales",
                  tone: "purple",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        item.tone === "emerald"
                          ? "bg-emerald-400"
                          : item.tone === "blue"
                          ? "bg-blue-300"
                          : item.tone === "amber"
                          ? "bg-amber-300"
                          : "bg-purple-300"
                      }`}
                    />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  <span className="text-sm text-slate-100">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Intégrations */}
      <section className="relative overflow-hidden bg-white py-20" id="integrations">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-8 h-52 w-52 rounded-full bg-[#1F5FFF]/12 blur-3xl" />
          <div className="absolute right-[-12%] top-0 h-64 w-64 rounded-full bg-[#4DA3FF]/10 blur-[130px]" />
          <div className="absolute left-[18%] bottom-0 h-40 w-40 rotate-12 bg-[#ff7043]/12 blur-2xl" />
        </div>
        <div className="section relative z-10">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e5edff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
                Intégrations & Écosystème
              </span>
              <h2 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
                Un écosystème ouvert, connecté aux principaux acteurs du marché
              </h2>
              <p className="text-lg text-slate-600">
                Intégrations Mobile Money natives, agrégateurs et cadre d’API ouvertes avec sandbox pour accélérer vos mises en production.
              </p>
            </div>
            <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#1F5FFF] shadow">
              Go-live plus rapide
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <Globe className="h-10 w-10 text-[#1F5FFF]" />
              <div>
                <h3 className="font-heading text-2xl font-semibold text-slate-900">
                  Mobile Money & agrégateurs
                </h3>
                <p className="text-sm text-slate-600">Intégration native (ex. MTN MoMo, Orange Money) et agrégateurs pour étendre le réseau d’agents.</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Intégration native MTN MoMo, Orange Money",
                "Connexion agrégateurs (ex. Smobilpay) pour la couverture",
                "Transactions fluides + réconciliation automatisée",
                "Webhooks pour événements de paiement",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["MTN MoMo", "Orange Money", "Smobilpay", "Visa/Mastercard"].map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Plug,
                title: "Cadre d’API ouvertes",
                bullets: [
                  "API ouvertes, SDK et documentation claire",
                  "Sandbox sécurisée pour partenaires",
                  "Versionnage et SLA API",
                ],
              },
              {
                icon: CloudCog,
                title: "Interop bancaire",
                bullets: [
                  "Connexion core banking / switch",
                  "Exports normalisés (ACH, ISO 20022)",
                  "Connecteurs prêts pour scoring / analytics",
                ],
              },
              {
                icon: Zap,
                title: "Observabilité intégrée",
                bullets: [
                  "Tracing, métriques et logs centralisés",
                  "Alertes techniques et métier",
                  "Rapports de disponibilité",
                ],
              },
              {
                icon: ShieldCheck,
                title: "Sécurité des intégrations",
                bullets: [
                  "OAuth2, clés API, IP allowlist",
                  "Signature des webhooks",
                  "Tests automatiques de conformité",
                ],
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow">
                <card.icon className="mb-3 h-8 w-8 text-[#1F5FFF]" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* IA & Modules */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1f3a] via-[#0f2747] to-[#102a50] py-20 text-white" id="ia">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-8 h-60 w-60 rotate-12 bg-[#1F5FFF]/25 blur-3xl" />
          <div className="absolute right-[-14%] bottom-4 h-72 w-72 rounded-full bg-[#22c55e]/18 blur-[140px]" />
        </div>

        <div className="section relative z-10">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#9cc4ff]">
                IA & Modules innovants
              </span>
              <h2 className="font-heading text-4xl font-bold sm:text-5xl">
                Intelligence artificielle et modules innovants pour aller plus loin
              </h2>
              <p className="text-lg text-slate-200">
                Assistant IA 24/7 (WhatsApp ou autres canaux), automations et analytics avancés pour gagner en vitesse et en qualité de service.
              </p>
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-200 backdrop-blur">
              Assistants + analytics en temps réel
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="mb-6 flex items-center gap-3">
              <Bot className="h-10 w-10 text-[#9cc4ff]" />
              <div>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  Assistant IA Kazimo
                </h3>
                <p className="text-sm text-slate-200">
                  Support 24/7 via WhatsApp ou web, FAQ, présentation produits, préqualification et handover complet à un conseiller.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "WhatsApp, web et mobile",
                "FAQ, préqualification, relances",
                "Handover complet vers un conseiller",
                "Scénarios marketing et campagnes ciblées",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-100">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
              Bénéfices : -35 % de charge front-office, meilleure réactivité, time-to-yes réduit.
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: Sparkles,
                title: "Automation métier",
                bullets: [
                  "Workflows prêts : onboarding, KYC, scoring",
                  "Notifications intelligentes",
                  "Analyse des exceptions",
                ],
              },
              {
                icon: Brain,
                title: "Analytics & IA avancée",
                bullets: [
                  "Prédictif : risque, churn, opportunités",
                  "Tableaux de bord temps réel",
                  "Exports data pour vos modèles",
                ],
              },
              {
                icon: Shield,
                title: "Compliance assistée",
                bullets: [
                  "Contrôles automatiques KYC/KYB",
                  "Alertes anti-fraude et limites dynamiques",
                  "Traçabilité complète",
                ],
              },
              {
                icon: Zap,
                title: "Modules à venir",
                bullets: [
                  "Jonnie – HRMS/DMS : paie, présences, DMS, audit",
                  "Assure – Microassurance : marketplace, primes, réclamations",
                  "Analytics & scoring partenaires",
                ],
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur">
                <card.icon className="mb-3 h-8 w-8 text-[#9cc4ff]" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-100">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="relative overflow-hidden bg-white py-20" id="tarifs">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-0 h-60 w-60 rotate-12 bg-[#1F5FFF]/12 blur-3xl" />
          <div className="absolute right-[-14%] bottom-4 h-72 w-72 rounded-full bg-[#ff7043]/12 blur-[140px]" />
        </div>
        <div className="section relative z-10">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-[#e5edff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
              Modèles de tarification
            </div>
            <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
              Des modèles de tarification adaptés à votre stratégie
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Kazimo propose plusieurs modèles pour s’adapter à la taille, la maturité et les ambitions de votre institution.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Modèle 1 – Faibles frais initiaux",
              accent: "from-[#1F5FFF] to-[#4DA3FF]",
              onboarding: "600 000 XAF",
              revenue: ["Paiements : 50 % / 50 %", "Services bancaires : 30 % / 70 %"],
              ideal: "Idéal pour démarrer ou tester en limitant l’investissement initial.",
            },
            {
              title: "Modèle 2 – Équilibre",
              accent: "from-[#ff7043] to-[#ffa45c]",
              onboarding: "1 200 000 XAF",
              revenue: ["Paiements : 25 % / 75 %", "Services bancaires : 10 % / 90 %"],
              ideal: "Pour les EMF en croissance cherchant un équilibre frais initiaux / partage revenus.",
              featured: true,
            },
            {
              title: "Modèle 3 – Autonomie totale",
              accent: "from-[#22c55e] to-[#16a34a]",
              onboarding: "5 000 000 XAF",
              maintenance: "1 000 000 XAF / an",
              revenue: ["Partage de revenus : Aucun"],
              ideal: "Pour garder 100 % des revenus transactionnels avec pleine propriété.",
            },
          ].map((model, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${
                model.featured ? "ring-2 ring-[#ff7043]/60" : ""
              }`}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundImage: `linear-gradient(to right, ${model.accent.replace("from", "").replace("to", " to")})` }}
              />
              <h3 className="mb-3 font-heading text-xl font-semibold text-slate-900">
                {model.title}
              </h3>
              <p className="mb-4 text-sm font-semibold text-slate-700">
                Frais d’onboarding : {model.onboarding}
              </p>
              {model.maintenance && (
                <p className="mb-3 text-sm text-slate-600">Maintenance : {model.maintenance}</p>
              )}
              <div className="mb-4 space-y-2">
                {model.revenue.map((r) => (
                  <div key={r} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
              <p className="mb-6 text-sm text-slate-600">{model.ideal}</p>
              <Link
                href="/contact"
                className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold text-white transition ${
                  model.featured ? "bg-[#ff7043] hover:bg-[#e85f2f]" : "bg-[#1F5FFF] hover:bg-[#143a8b]"
                }`}
              >
                Parler à un expert
              </Link>
            </div>
          ))}
        </div>
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
