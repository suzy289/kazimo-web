"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Smartphone, Users, BarChart3, CreditCard, Calculator, Eye, Zap, Lock, Globe, Bot, TrendingUp, Sparkles, Rocket, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Style Hercules avec grille croisée et éléments flottants */}
      <section className="relative flex min-h-[clamp(40rem,70vh,80rem)] flex-col items-center justify-center overflow-hidden rounded-2xl px-2 pt-24 pb-4 sm:px-4 sm:pt-28 lg:px-4 lg:pt-32">
        {/* Background avec grille croisée - Plus visible */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(31, 95, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(31, 95, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
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

      {/* Features Grid */}
      <section className="section py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Shield,
              title: "Core banking complet",
              desc: "Dépôts, retraits, crédits, comptabilité, reporting réglementaire",
            },
            {
              icon: Smartphone,
              title: "Application mobile",
              desc: "Connectée au Mobile Money et au réseau d'agents",
            },
            {
              icon: Lock,
              title: "Conformité COBAC",
              desc: "Réglementaire intégrée et normes locales",
            },
            {
              icon: Bot,
              title: "Assistant IA 24/7",
              desc: "Support client et distribution de produits",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <feature.icon className="mb-4 h-8 w-8 text-[#1F5FFF]" />
              <h3 className="mb-2 font-heading text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="section py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Notre mission : sécuriser et accélérer la réussite de votre microfinance
          </h2>
          <p className="mb-8 text-lg text-slate-600">
            Nous fournissons aux EMF une solution évolutive, sécurisée et conforme aux réglementations financières en Afrique.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              "Digitaliser l'ensemble des opérations",
              "Rapprocher les services des clients",
              "Exploiter les données et l'IA",
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-white p-4">
                <CheckCircle2 className="mx-auto mb-2 h-6 w-6 text-[#1F5FFF]" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Trois bénéfices majeurs
          </h2>
          <p className="text-lg text-slate-600">
            Les fondations d'un déploiement efficace et conforme pour votre EMF
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Maîtrise des coûts opérationnels",
              points: [
                "Réduisez la dépendance au papier et aux processus manuels",
                "Limitez l'ouverture de nouvelles agences physiques grâce au réseau d'agents",
              ],
            },
            {
              icon: Users,
              title: "Proximité client augmentée",
              points: [
                "Offrez à vos clients un accès simple à leurs comptes via mobile, USSD et points de service de proximité",
              ],
            },
            {
              icon: BarChart3,
              title: "Pilotage par la donnée et l'IA",
              points: [
                "Suivez en temps réel la performance de vos agences, produits et portefeuilles",
                "Appuyez vos décisions sur des tableaux de bord exécutifs et des analyses avancées",
              ],
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <benefit.icon className="mb-4 h-10 w-10 text-[#1F5FFF]" />
              <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <ul className="space-y-3">
                {benefit.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F5FFF]" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Solution / Core Banking */}
      <section className="section py-20" id="solution">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#1F5FFF]">
            Solution Kazimo
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
            Kazimo Core Banking – le moteur de vos opérations
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Kazimo couvre l'ensemble du cycle de vie de vos activités de microfinance : de l'ouverture de compte au remboursement de crédit, en passant par la comptabilité et la conformité réglementaire.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Users,
              title: "Gestion des clients",
              points: [
                "Inscription KYC complète",
                "Segmentation : individus, groupes, PME, coopératives",
                "Vue 360° client avec historique des produits, garanties et interactions",
              ],
            },
            {
              icon: CreditCard,
              title: "Gestion des comptes",
              points: [
                "Comptes d'épargne, comptes courants, dépôts à terme",
                "Règles d'intérêts flexibles et frais paramétrables",
                "Suivi des soldes en temps réel et mini‑relevés",
              ],
            },
            {
              icon: Calculator,
              title: "Gestion des prêts",
              points: [
                "Configuration des produits de crédit (montants, durées, taux, garanties)",
                "Workflows d'approbation personnalisables (agent → chef d'agence → siège)",
                "Calendriers de remboursement, pénalités, restructurations",
              ],
            },
            {
              icon: Shield,
              title: "Comptabilité & conformité",
              points: [
                "Grand Livre en partie double",
                "Plan comptable personnalisable selon les exigences locales",
                "Rapports réglementaires automatisés (dont COBAC)",
                "Outils KYC/AML et suivi des transactions sensibles",
              ],
            },
          ].map((mod, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <mod.icon className="mb-4 h-8 w-8 text-[#1F5FFF]" />
              <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">
                {mod.title}
              </h3>
              <ul className="space-y-2">
                {mod.points.map((p, j) => (
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

      {/* Dashboards */}
      <section className="section py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
              Une visibilité complète sur la performance de votre institution
            </h2>
            <p className="mb-6 text-lg text-slate-600">
              Kazimo fournit des tableaux de bord exécutifs qui offrent une vue claire et synthétique de votre institution, en temps réel.
            </p>
            <ul className="space-y-4">
              {[
                "100 % de visibilité : résumés quotidiens des transactions par agence, produit et canal",
                "Disponibilité 24/7 : accès permanent aux indicateurs clés où que vous soyez",
                "Vue client à 360° : consolidation des comptes, prêts, historiques et interactions par client",
                "KPI de performance des prêts : portefeuille à risque, taux de recouvrement, productivité des agents, suivi des retards",
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Eye className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5FFF]" />
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-heading text-lg font-semibold text-slate-900">
                Tableau de Bord Exécutif
              </h3>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <div className="text-2xl font-bold text-[#1F5FFF]">15.2M</div>
                <p className="text-xs text-slate-500">XAF en cours</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <div className="text-2xl font-bold text-[#1F5FFF]">1,247</div>
                <p className="text-xs text-slate-500">Clients actifs</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Taux de recouvrement</span>
                  <span className="font-semibold text-emerald-600">96.8%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100">
                  <div className="h-2 w-[96.8%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Portefeuille à risque</span>
                  <span className="font-semibold text-orange-600">2.1%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100">
                  <div className="h-2 w-[2.1%] rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                </div>
              </div>
            </div>
          </div>
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
