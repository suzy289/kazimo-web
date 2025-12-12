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
import { useState, useEffect, type CSSProperties } from "react";

function DashboardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  
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
      setCurrentIndex((prev) => {
        const next = (prev + 1) % dashboards.length;
        setPrevIndex(prev);
        return next;
      });
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
      {dashboards.map((dashboard, index) => {
        const isActive = index === currentIndex;
        const isPrev = index === prevIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 p-8 transition-all duration-[1200ms] ease-in-out ${
              isActive
                ? "opacity-100 translate-x-0 z-20"
                : isPrev
                  ? "opacity-0 -translate-x-full z-10"
                  : "opacity-0 translate-x-full z-0 pointer-events-none"
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
                <p className="text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {dashboard.charts.map((chart, i) => (
              <div key={i}>
                <div className="mb-2 flex items-center justify-between text-base text-slate-600">
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
        );
      })}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {dashboards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setPrevIndex(currentIndex);
              setCurrentIndex(index);
            }}
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
  const services = [
    {
      title: "Digitaliser les opérations",
      desc: "Comptes, crédits, paiements, comptabilité et reporting de bout en bout.",
      icon: CreditCard,
      color: "from-[#1F5FFF] to-[#4DA3FF]",
      gradient: "from-blue-50 to-blue-100",
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
      color: "from-[#f97316] to-[#fb923c]",
      gradient: "from-orange-50 to-orange-100",
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
      color: "from-[#22c55e] to-[#16a34a]",
      gradient: "from-green-50 to-green-100",
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
      color: "from-[#8b5cf6] to-[#a855f7]",
      gradient: "from-purple-50 to-purple-100",
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
    <section
      className="relative overflow-hidden py-20 reveal-init"
      data-reveal
      style={{ "--reveal-delay": "0.1s" } as CSSProperties}
    >
      {/* Formes décoratives en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#1F5FFF]/10 via-[#4DA3FF]/8 to-transparent blur-3xl" />
        <div className="absolute right-[-10%] top-10 h-80 w-80 rounded-full bg-gradient-to-br from-[#d4af37]/12 via-[#f7d774]/10 to-transparent blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#4DA3FF]/8 via-[#1F5FFF]/6 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-tr from-[#8b5cf6]/10 via-transparent to-[#a855f7]/8 blur-3xl" />
      </div>

      <div className="section relative z-10 max-w-[1700px]">
        {/* En-tête */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1F5FFF]/10 to-[#4DA3FF]/10 px-5 py-2.5 text-base font-semibold text-[#1F5FFF] border border-[#1F5FFF]/20">
            <span className="inline-block h-2 w-2 rounded-full bg-[#1F5FFF] animate-pulse" />
            Notre mission
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Sécuriser et accélérer la réussite de votre microfinance
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-700">
            Nous fournissons aux EMF une solution évolutive, sécurisée et conforme aux réglementations financières en Afrique.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const direction = i % 2 === 0 ? "left" : "right";
            return (
              <div
                key={i}
                data-scroll-animate={direction}
                data-animate-index={i}
                style={{ "--animate-delay": `${i * 0.15}s` } as CSSProperties}
                className="group relative overflow-hidden rounded-2xl border-2 border-black/20 bg-white p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-black/40"
              >
                {/* Fond dégradé au survol */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Bordure colorée en haut */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                />

                {/* Contenu */}
                <div className="relative z-10">
                  {/* Icône */}
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform group-hover:scale-110`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div className="text-xs font-bold text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Titre et description */}
                  <h3 className="mb-2 font-heading text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm text-slate-600 line-clamp-2">
                    {service.desc}
                  </p>

                  {/* Liste des détails (visible au survol) */}
                  <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-96">
                    <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                      {service.details.slice(0, 3).map((detail, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-700">
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${service.color}`}
                          />
                          <span className="line-clamp-2">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <span>En savoir plus</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>

                {/* Forme décorative en bas à droite */}
                <div
                  className={`absolute bottom-0 right-0 h-24 w-24 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br ${service.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`}
                />
              </div>
            );
          })}
        </div>

        {/* Ligne de connexion décorative (desktop) */}
        <div className="hidden lg:block mt-8">
          <div className="relative h-1 w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </div>
            {services.map((service, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${(i + 0.5) * (100 / services.length)}%` }}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-gradient-to-br ${service.color} shadow-lg border-2 border-white`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]")) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    nodes.forEach((el) => {
      el.classList.add("reveal-init");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollAnimateNodes = Array.from(document.querySelectorAll("[data-scroll-animate]")) as HTMLElement[];
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    scrollAnimateNodes.forEach((el) => {
      scrollObserver.observe(el);
    });
    return () => scrollObserver.disconnect();
  }, []);

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
        {/* Background avec image et grille croisée - Plus visible */}
        <div
          className="absolute inset-0 w-full"
          style={{
            backgroundImage: `
              url('/stock-market-analysis.jpg'),
              linear-gradient(to right, rgba(31, 95, 255, 0.18) 1px, transparent 1px),
              linear-gradient(to left, rgba(31, 95, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(31, 95, 255, 0.18) 1px, transparent 1px),
              linear-gradient(to top, rgba(31, 95, 255, 0.12) 1px, transparent 1px),
              linear-gradient(45deg, rgba(31, 95, 255, 0.12) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(31, 95, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to right, rgba(31, 95, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(31, 95, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "cover, 40px 40px, 40px 40px, 40px 40px, 40px 40px, 40px 40px, 40px 40px, 10px 10px, 10px 10px",
            backgroundPosition: "center, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0",
            opacity: 1,
          }}
        />
        
        {/* Overlay noir transparent pour adoucir l'éclairage */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-0" />
        
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
          <div
            className="w-full max-w-4xl text-center px-6 py-6 sm:px-10 sm:py-10 reveal-init"
            data-reveal
            style={{ "--reveal-delay": "0s" } as CSSProperties}
          >
          <h1
            className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
            data-reveal
            style={{ "--reveal-delay": "0.05s" } as CSSProperties}
          >
            La plateforme de{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              core banking modulaire
            </span>{" "}
            <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">pour la microfinance en Afrique</span>
          </h1>
          <p
            className="mb-6 text-xl text-white sm:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            data-reveal
            style={{ "--reveal-delay": "0.12s" } as CSSProperties}
          >
            Kazimo est une plateforme de finance numérique modulaire conçue pour les EMF, IMF, coopératives et banques communautaires en Afrique.
          </p>
          <div
            className="mb-10 grid gap-3 text-left text-base text-white sm:grid-cols-2 sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            data-reveal
            style={{ "--reveal-delay": "0.18s" } as CSSProperties}
          >
            {[
              "Core banking complet : dépôts, retraits, crédits, comptabilité, reporting réglementaire.",
              "Application mobile clients connectée au Mobile Money et au réseau d'agents.",
              "Conformité réglementaire intégrée (COBAC et normes locales).",
              "Assistant IA disponible 24/7 pour le support client et la distribution de produits.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{item}</span>
              </div>
            ))}
          </div>
          <div
            className="mt-32 flex flex-col items-center justify-center gap-4 sm:mt-40 sm:flex-row"
            data-reveal
            style={{ "--reveal-delay": "0.26s" } as CSSProperties}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
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
      <section
        className="relative overflow-hidden bg-white py-20 reveal-init"
        id="pour-qui"
        data-reveal
        style={{ "--reveal-delay": "0.05s" } as CSSProperties}
      >
        <div className="section relative z-10">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e5edff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
              Pour qui ?
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
              Kazimo accompagne les EMF à chaque étape
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
              Moderniser un existant ou démarrer sur un socle solide : on adapte le déploiement à votre contexte.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-black/20 bg-white px-4 py-2 text-base font-semibold text-slate-900">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Migration maîtrisée · Go-live rapide
            </div>
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2">
            <div 
              className="group relative overflow-hidden rounded-2xl border-2 border-black/30 bg-white p-10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{
                clipPath: "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F5FFF]/5 via-transparent to-[#4DA3FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1F5FFF] to-[#4DA3FF]" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/20 bg-[#e5edff] px-3 py-1 text-base font-semibold text-[#1F5FFF]">
                  EMF déjà équipées
                </div>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-slate-900">
                  Moderniser et étendre sans tout casser
                </h3>
                <p className="mb-4 text-base text-slate-700">
                  Substitution progressive du core bancaire ou couche digitale/API autour de l'existant.
                </p>
                <ul className="mb-6 space-y-3 text-base text-slate-800">
                  {[
                    "Migration maîtrisée ou enveloppe API pour Mobile Money, app clients, réseau d'agents.",
                    "Activation contrôlée : assistant IA, modules complémentaires quand vous êtes prêts.",
                    "Maintien de la continuité opérationnelle pendant l'évolution.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#1F5FFF] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-[#1F5FFF] hover:border-[#1F5FFF]"
                >
                  Planifier un atelier de diagnostic
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-2xl border-2 border-black/30 bg-white p-10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{
                clipPath: "polygon(0% 0%, 98% 0%, 100% 100%, 2% 100%)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#f7d774]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-[#d4af37] to-[#f7d774]" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/20 bg-[#fef3c7] px-3 py-1 text-base font-semibold text-[#d4af37]">
                  EMF en démarrage
                </div>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-slate-900">
                  Démarrer vite avec un socle prêt pour la croissance
                </h3>
                <p className="mb-4 text-base text-slate-700">
                  Core banking conforme, modules activables progressivement, modèle économique limitant les coûts initiaux.
                </p>
                <ul className="mb-6 space-y-3 text-base text-slate-800">
                  {[
                    "Core banking prêt à l'emploi, conforme aux standards locaux.",
                    "Modules agents, mobile, assurance, RH activables par étapes.",
                    "Réduction du temps entre agrément et ouverture effective.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-[#d4af37] hover:border-[#d4af37]"
                >
                  Discuter de votre projet de lancement
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Nouveau design flottant */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#e9f2ff] via-white to-[#f3f8ff] py-16 shadow-xl reveal-init"
        data-reveal
        style={{ "--reveal-delay": "0.08s" } as CSSProperties}
      >
        <div className="section max-w-[1700px] relative z-10">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-20 top-6 h-56 w-56 rotate-6 bg-gradient-to-br from-[#1F5FFF]/24 via-[#4DA3FF]/18 to-white/12 blur-3xl" />
          <div className="absolute right-[-14%] top-4 h-64 w-64 rounded-full bg-gradient-to-br from-[#4DA3FF]/18 via-white/35 to-[#1F5FFF]/12 blur-[120px]" />
          <div className="absolute left-[8%] bottom-8 h-40 w-40 -rotate-12 bg-gradient-to-br from-[#1F5FFF]/18 via-[#4DA3FF]/14 to-white/10 blur-2xl" />
          <div className="absolute right-[10%] bottom-0 h-48 w-48 rotate-9 bg-gradient-to-br from-[#4DA3FF]/20 via-[#1F5FFF]/16 to-white/12 blur-3xl" />
        </div>

        <div className="relative z-10 mb-10 flex flex-col items-start gap-4 text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.08em] text-[#1F5FFF]">
              Capacité produit
            </p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Les piliers de Kazimo
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-700">
              Une pile core banking sécurisée, mobile-first et conforme COBAC, avec des modules prêts pour vos opérations et vos clients.
            </p>
          </div>
          <div className="hidden rounded-full bg-white/70 px-4 py-2 text-base font-semibold text-[#1F5FFF] shadow-lg backdrop-blur sm:inline-flex items-center gap-2">
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
            ].map((feature, i) => {
              const direction = i % 2 === 0 ? "left" : "right";
              return (
              <div
                key={i}
                data-scroll-animate={direction}
                data-animate-index={i}
                style={{ "--animate-delay": `${i * 0.2}s` } as CSSProperties}
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
                  <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-sm font-semibold text-[#1F5FFF] group-hover:bg-white/20 group-hover:text-white transition-colors lg:mt-2">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-slate-900 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base text-slate-700 group-hover:text-white/90 transition-colors">{feature.desc}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-[#1F5FFF] group-hover:text-white transition-colors">
                  <span className="inline-block h-2 w-2 rotate-45 bg-[#1F5FFF] group-hover:bg-white shadow-[0_6px_18px_rgba(31,95,255,0.35)] transition-colors" />
                  Sécurisé & prêt au déploiement
                </div>
              </div>
              );
            })}
          </div>
        </div>
        </div>
      </section>

      {/* Mission Section - Design interactif */}
      <MissionInteractiveSection />

      {/* Benefits Section - Ticker + cartes */}
      <section
        className="relative overflow-hidden py-20"
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
          <div className="absolute right-[-12%] top-0 h-64 w-64 rounded-full bg-[#d4af37]/18 blur-[120px]" />
          <div className="absolute left-[8%] bottom-0 h-52 w-52 rotate-12 bg-[#4DA3FF]/14 blur-3xl" />
        </div>
        <div className="section max-w-[1700px] relative z-10">

          <div className="relative mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/12 px-4 py-2 text-base font-semibold text-[#d4af37]">
            Trois bénéfices majeurs
              </span>
              <h2 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
                Les fondations d'un déploiement efficace et conforme
          </h2>
              <p className="text-lg text-slate-700">
                Une trajectoire claire : maîtrise des coûts, proximité client, pilotage par la donnée et l'IA.
          </p>
        </div>
            <div className="text-base font-semibold uppercase tracking-[0.08em] text-[#1F5FFF]">
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
                  className="flex min-w-[280px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 shadow-sm"
                >
                  <span className="inline-block h-2 w-2 rotate-45 bg-[#1F5FFF]" />
                  {item}
                </div>,
                <div
                  key={`${idx}-b`}
                  className="flex min-w-[280px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 shadow-sm"
                >
                  <span className="inline-block h-2 w-2 rotate-45 bg-[#d4af37]" />
                  {item}
                </div>,
              ])}
            </div>
          </div>

          {/* Cartes avec animation depuis gauche et droite */}
          <div className="relative grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Maîtrise des coûts opérationnels",
                desc: "Réduire le papier, automatiser et capitaliser sur le réseau d'agents.",
                tag: "Efficience",
                direction: "left",
            },
            {
              icon: Users,
              title: "Proximité client augmentée",
                desc: "Mobile, USSD et points de service de proximité pour servir partout.",
                tag: "Croissance",
                direction: "right",
            },
            {
              icon: BarChart3,
                title: "Pilotage data & IA",
                desc: "Décisions guidées par dashboards exécutifs et analytics avancés.",
                tag: "Décision",
                direction: "left",
              },
            ].map((card, i) => (
            <div
              key={i}
              data-scroll-animate={card.direction}
              className="group relative overflow-hidden rounded-2xl border-2 border-black/20 bg-white/90 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                clipPath: card.direction === "left" 
                  ? "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)"
                  : "polygon(0% 0%, 98% 0%, 100% 100%, 2% 100%)"
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                card.direction === "left" 
                  ? "from-[#1F5FFF]/10 via-transparent to-[#4DA3FF]/5" 
                  : "from-[#d4af37]/10 via-transparent to-[#f7d774]/5"
              } opacity-0 group-hover:opacity-100 transition-opacity`} />
              <span className={`absolute ${card.direction === "left" ? "left-0" : "right-0"} top-0 h-full w-1 bg-gradient-to-b ${
                card.direction === "left"
                  ? "from-[#1F5FFF] to-[#4DA3FF]"
                  : "from-[#d4af37] to-[#f7d774]"
              }`} />
              <div className="mb-3 flex items-center justify-between relative z-10">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${
                    card.direction === "left"
                      ? "from-[#1F5FFF] to-[#4DA3FF]"
                      : "from-[#d4af37] to-[#f7d774]"
                  } text-white shadow-lg`}>
                    <card.icon className="h-5 w-5" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    card.direction === "left"
                      ? "bg-[#eef2ff] text-[#1F5FFF]"
                      : "bg-[#fef3c7] text-[#d4af37]"
                  }`}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-slate-900 relative z-10">
                  {card.title}
              </h3>
                <p className="text-base text-slate-700 relative z-10">{card.desc}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Solution / Core Banking - orbite de services */}
      <section
        className="relative overflow-hidden bg-white py-20 reveal-init"
        id="solution"
        data-reveal
        style={{ "--reveal-delay": "0.12s" } as CSSProperties}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 bottom-[-180px] h-[380px] w-[380px] rounded-full bg-gradient-to-br from-[#1F5FFF]/20 via-[#4DA3FF]/18 to-white/5 blur-3xl" />
          <div className="absolute right-[-160px] top-[-180px] h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-[#d4af37]/18 via-[#f7d774]/16 to-white/8 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1700px] px-6 sm:px-8 lg:px-12 flex flex-col min-h-[800px]">
          {/* Titre en haut au centre */}
          <div className="mb-auto pt-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eef2ff] px-4 py-2 text-base font-semibold text-[#1F5FFF]">
              Solution Kazimo
            </div>
            <h2 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
              <span className="relative inline-block">
                <span className="absolute -inset-x-4 -bottom-2 h-1 rounded-full bg-gradient-to-r from-[#1F5FFF] via-[#4DA3FF] to-[#d4af37]" />
                <span className="bg-gradient-to-r from-[#1F5FFF] via-[#4DA3FF] to-[#d4af37] bg-clip-text text-transparent">
                  Kazimo Core Banking
                </span>
              </span>
              <span className="block text-slate-900 mt-1">le moteur de vos opérations</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-700">
              Un centre unique, quatre services orbitaux : chaque module se lit clairement tout en restant visible.
            </p>
          </div>

        {/* Contenu des cartes en bas */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-xl mt-auto">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-6 h-32 w-32 rotate-6 bg-[#1F5FFF]/10 blur-3xl" />
            <div className="absolute right-[-14%] top-0 h-40 w-40 rounded-full bg-[#d4af37]/12 blur-[110px]" />
            <div className="absolute left-[18%] bottom-0 h-36 w-36 rotate-12 bg-[#4DA3FF]/10 blur-2xl" />
            <svg className="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1200 450" fill="none">
              <defs>
                <linearGradient id="curve-line" x1="0" y1="0" x2="1200" y2="450" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1F5FFF" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#4DA3FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              <path
                d="M80 120 C 300 60, 520 220, 720 170 C 900 120, 1040 240, 1150 190"
                stroke="url(#curve-line)"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="relative mt-6">
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-slate-200 lg:block">
              <div className="absolute top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1F5FFF]" />
              <div className="absolute top-1/3 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d4af37]" />
              <div className="absolute bottom-1/3 h-3 w-3 -translate-x-1/2 rounded-full bg-[#4DA3FF]" />
              <div className="absolute bottom-4 h-3 w-3 -translate-x-1/2 rounded-full bg-[#10b981]" />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between">
              <div className="flex flex-col gap-6 lg:w-[48%]">
              {[
                {
                  icon: Users,
                  title: "Gestion des clients",
                  desc: "KYC complet, segmentation (individus, groupes, PME, coopératives), vue 360° avec historique produits, garanties et interactions. Gestion des groupes, relations hiérarchiques et portefeuilles consolidés.",
                  color: "from-[#1F5FFF] to-[#4DA3FF]",
                  badge: "Clients",
                },
                {
                  icon: Calculator,
                  title: "Gestion des prêts",
                  desc: "Produits configurables, workflows d'approbation en chaîne, calendriers de remboursement, pénalités et restructurations. Suivi des garanties, scoring et analyse de risque intégrés.",
                  color: "from-[#10b981] to-[#34d399]",
                  badge: "Prêts",
                },
              ].map((mod, i) => {
                const direction = "left";
                return (
                  <div
                    key={mod.title}
                    data-scroll-animate={direction}
                    data-animate-index={i * 2}
                    style={{ "--animate-delay": `${i * 0.4}s` } as CSSProperties}
                    className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-slate-400"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${mod.color} text-white shadow-[0_12px_30px_-12px_rgba(31,95,255,0.65)] ring-2 ring-white`}
                      >
                        <mod.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold text-slate-900">{mod.title}</h3>
                        <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                          {i * 2 + 1}/4 • {mod.badge}
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-slate-700">{mod.desc}</p>
                  </div>
                );
              })}
              </div>
              <div className="flex flex-col gap-6 lg:w-[48%] lg:justify-end">
              {[
                {
                  icon: CreditCard,
                  title: "Gestion des comptes",
                  desc: "Épargne, courant, dépôts à terme, règles d'intérêts flexibles, frais paramétrables, soldes temps réel et mini‑relevés.",
                  color: "from-[#d4af37] to-[#f7d774]",
                  badge: "Comptes",
                },
                {
                  icon: Shield,
                  title: "Comptabilité & conformité",
                  desc: "Grand Livre, plan comptable local, rapports réglementaires COBAC, contrôles KYC/AML.",
                  color: "from-[#8b5cf6] to-[#c084fc]",
                  badge: "Conformité",
                },
              ].map((mod, i) => {
                const direction = "right";
                return (
                  <div
                    key={mod.title}
                    data-scroll-animate={direction}
                    data-animate-index={i * 2 + 1}
                    style={{ "--animate-delay": `${(i * 2 + 1) * 0.2}s` } as CSSProperties}
                    className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-slate-400"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${mod.color} text-white shadow-[0_12px_30px_-12px_rgba(31,95,255,0.65)] ring-2 ring-white`}
                      >
                        <mod.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold text-slate-900">{mod.title}</h3>
                        <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                          {i * 2 + 2}/4 • {mod.badge}
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-slate-700">{mod.desc}</p>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Dashboards */}
      <section
        className="section relative py-20 overflow-hidden reveal-init"
        data-reveal
        style={{ "--reveal-delay": "0.14s" } as CSSProperties}
      >
        <div className="pointer-events-none absolute inset-0">
          {/* Halos floutés */}
          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#1F5FFF]/8 blur-3xl" />
          <div className="absolute left-[-10%] top-1/2 h-80 w-80 rounded-full bg-[#4DA3FF]/10 blur-[120px]" />
          <div className="absolute right-[15%] bottom-10 h-56 w-56 rotate-45 bg-[#d4af37]/12 blur-2xl" />
          <div className="absolute left-[20%] top-0 h-48 w-48 -rotate-12 bg-[#1F5FFF]/6 blur-3xl" />
          {/* Formes géométriques */}
          <div className="absolute right-[25%] top-[15%] h-32 w-32 rotate-45 bg-[#1F5FFF]/10 blur-xl" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          <div className="absolute left-[15%] bottom-[20%] h-24 w-24 rotate-12 bg-[#4DA3FF]/12 blur-lg" style={{ clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)' }} />
          <div className="absolute right-[8%] top-[60%] h-40 w-40 -rotate-45 bg-[#d4af37]/10 blur-2xl" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
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
                    <span className="font-bold text-[#d4af37]">{item.highlight}</span>
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
      <section className="relative overflow-hidden py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/futuric.jpg')" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1F5FFF]/14 blur-[140px]" />
          <div className="absolute right-[-10%] top-0 h-80 w-80 rounded-full bg-[#d4af37]/12 blur-[140px]" />
          <div className="absolute left-[30%] bottom-[-10%] h-64 w-64 rotate-12 bg-[#4DA3FF]/12 blur-3xl" />
          <div className="absolute right-[25%] bottom-[10%] h-56 w-56 -rotate-12 bg-[#1F5FFF]/10 blur-3xl" />
          <svg className="absolute inset-0 opacity-40" viewBox="0 0 1600 900" fill="none">
            <path d="M0 200 C 220 260, 380 110, 620 150 C 880 200, 1080 60, 1400 120" stroke="url(#payLine)" strokeWidth="10" strokeLinecap="round" />
            <defs>
              <linearGradient id="payLine" x1="0" y1="0" x2="1400" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1F5FFF" stopOpacity="0.35" />
                <stop offset="0.5" stopColor="#4DA3FF" stopOpacity="0.35" />
                <stop offset="1" stopColor="#d4af37" stopOpacity="0.35" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="section relative z-10 space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e5edff] px-3 py-1.5 text-sm font-semibold text-[#1F5FFF]">
                Modules complémentaires
              </span>
              <h2 className="font-heading text-3xl font-bold sm:text-4xl text-slate-900">
                Pay & Connect — l'offre 360°
              </h2>
              <p className="text-base text-slate-700 max-w-2xl">
                Pay : portefeuilles numériques et Mobile Money. Connect : réseau d'agents piloté en temps réel, avec disponibilité 24/7.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#1F5FFF] shadow-sm border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Disponibilité 24/7
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr] items-stretch">
            {/* Colonne gauche : hero + KPI */}
            <div className="relative overflow-hidden rounded-2xl border border-black bg-white/90 p-6 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/80" />
              {/* Trapezes décoratifs bleu/noir */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-12 top-4 h-40 w-56 skew-x-[-12deg] rounded-2xl bg-gradient-to-br from-[#1F5FFF] via-[#4DA3FF] to-[#1F5FFF]/70 opacity-30 blur-sm" />
                <div className="absolute right-0 -top-10 h-44 w-64 skew-x-[10deg] rounded-2xl bg-gradient-to-br from-black via-slate-900 to-[#1F5FFF]/40 opacity-25 blur-[2px]" />
                <div className="absolute -right-10 bottom-6 h-32 w-48 skew-x-[-8deg] rounded-2xl border border-black/40 bg-gradient-to-br from-white/40 via-[#1F5FFF]/25 to-white/10 opacity-35" />
              </div>
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#1F5FFF]/10 px-3 py-1 text-sm font-semibold text-[#1F5FFF]">
                    360° Pay & Connect
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#d4af37]/15 px-3 py-1 text-sm font-semibold text-[#b8860b]">
                    Mobile Money & Agents
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-slate-900">Accélérez vos encaissements</h3>
                  <p className="text-base text-slate-700">
                    Pilotage temps réel des flux Mobile Money, du réseau d'agents et des portefeuilles clients, avec réconciliation automatique.
                  </p>
                </div>
                {/* Diagramme circulaire */}
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center">
                  {/* Cercle du diagramme */}
                  <div className="relative flex-shrink-0">
                    {(() => {
                      const radius = 80;
                      const circumference = 2 * Math.PI * radius;
                      const segment1 = circumference * 0.25; // 25%
                      const segment2 = circumference * 0.35; // 35%
                      const segment3 = circumference * 0.25; // 25%
                      const segment4 = circumference * 0.15; // 15%
                      const offset1 = 0;
                      const offset2 = -circumference * 0.25;
                      const offset3 = -circumference * 0.6;
                      const offset4 = -circumference * 0.85;
                      
                      return (
                        <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 200 200">
                          <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="20"
                          />
                          {/* Segment TPS moyen cash-in - 25% */}
                          <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="url(#gradient1)"
                            strokeWidth="20"
                            strokeDasharray={`${segment1} ${circumference}`}
                            strokeDashoffset={offset1}
                            strokeLinecap="round"
                          />
                          {/* Segment Succès Mobile Money - 35% */}
                          <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="url(#gradient2)"
                            strokeWidth="20"
                            strokeDasharray={`${segment2} ${circumference}`}
                            strokeDashoffset={offset2}
                            strokeLinecap="round"
                          />
                          {/* Segment Agents actifs - 25% */}
                          <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="url(#gradient3)"
                            strokeWidth="20"
                            strokeDasharray={`${segment3} ${circumference}`}
                            strokeDashoffset={offset3}
                            strokeLinecap="round"
                          />
                          {/* Segment Taux dispo - 15% */}
                          <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke="url(#gradient4)"
                            strokeWidth="20"
                            strokeDasharray={`${segment4} ${circumference}`}
                            strokeDashoffset={offset4}
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1F5FFF" />
                              <stop offset="100%" stopColor="#4DA3FF" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#22c55e" />
                              <stop offset="100%" stopColor="#16a34a" />
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#d4af37" />
                              <stop offset="100%" stopColor="#f7d774" />
                            </linearGradient>
                            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                        </svg>
                      );
                    })()}
                    {/* Texte au centre */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-slate-900">Performance</div>
                      <div className="text-sm text-slate-600 mt-1">Estimations</div>
                    </div>
                  </div>
                  
                  {/* Légende */}
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {[
                      { label: "TPS moyen cash-in", value: "4.2 s", colorFrom: "#1F5FFF", colorTo: "#4DA3FF", percentage: 25 },
                      { label: "Succès Mobile Money", value: "99.2 %", colorFrom: "#22c55e", colorTo: "#16a34a", percentage: 35 },
                      { label: "Agents actifs (24h)", value: "342", colorFrom: "#d4af37", colorTo: "#f7d774", percentage: 25 },
                      { label: "Taux dispo", value: "24/7", colorFrom: "#8b5cf6", colorTo: "#a855f7", percentage: 15 },
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className="h-3 w-3 rounded-full flex-shrink-0"
                            style={{ backgroundImage: `linear-gradient(135deg, ${kpi.colorFrom} to ${kpi.colorTo})` }}
                          />
                          <div className="text-xs font-semibold text-slate-600">{kpi.percentage}%</div>
                        </div>
                        <div className="text-sm font-semibold text-slate-700">{kpi.label}</div>
                        <div
                          className="mt-1 inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-bold text-white"
                          style={{ backgroundImage: `linear-gradient(135deg, ${kpi.colorFrom} to ${kpi.colorTo})` }}
                        >
                          {kpi.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white/80 p-4 text-base text-slate-700">
                  "Pay & Connect" harmonise Mobile Money, réseau d'agents et reporting temps réel pour livrer une expérience fluide aux clients et au siège.
                </div>
              </div>
            </div>

            {/* Colonne droite : cartes fonctionnalités */}
            <div className="relative grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: Wallet,
                  title: "Portefeuilles numériques",
                  desc: "Soldes temps réel, transferts, notifications push, multi-devise.",
                  tags: ["Android/iOS", "Mobile Money", "Push"],
                  colorFrom: "#1F5FFF",
                  colorTo: "#4DA3FF",
                },
                {
                  icon: QrCode,
                  title: "Paiement & cash-in/out",
                  desc: "QR, USSD, dépôts/retraits via agents, réconciliation auto.",
                  tags: ["QR / USSD", "Agents", "Temps réel"],
                  colorFrom: "#d4af37",
                  colorTo: "#f7d774",
                },
                {
                  icon: Network,
                  title: "Réseau d'agents",
                  desc: "Profils, autorisations sécurisées, commissions et volumes live.",
                  tags: ["Profils", "Commissions", "Suivi live"],
                  colorFrom: "#22c55e",
                  colorTo: "#16a34a",
                },
                {
                  icon: Smartphone,
                  title: "Expérience mobile",
                  desc: "App client + dashboards superviseurs, notifications, multi-profils.",
                  tags: ["UX simple", "Alerts", "Superviseurs"],
                  colorFrom: "#8b5cf6",
                  colorTo: "#a855f7",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.35)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_-28px_rgba(15,23,42,0.4)]"
                >
                  <div
                    className="absolute inset-x-4 top-0 h-0.5"
                    style={{ backgroundImage: `linear-gradient(to right, ${card.colorFrom} to ${card.colorTo})` }}
                  />
                  <div
                    className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{ backgroundImage: `linear-gradient(135deg, ${card.colorFrom} to ${card.colorTo})` }}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1.5 font-heading text-base font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mb-3 text-sm text-slate-700 line-clamp-2">{card.desc}</p>
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
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section py-20">
        <div
          className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm reveal-init"
          data-reveal
          style={{ "--reveal-delay": "0.16s" } as CSSProperties}
        >
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
