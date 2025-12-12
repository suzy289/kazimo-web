import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Wallet, 
  Users, 
  Bot, 
  Building2, 
  Lock, 
  Plug, 
  DollarSign, 
  Info,
  CreditCard,
  Network,
  Sparkles
} from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative mt-16 overflow-hidden bg-slate-900 text-slate-100"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(10,20,40,0.92), rgba(10,20,40,0.96)), url('/depositphotos_382815564-stock-photo-forex-chart.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F5FFF]/15 via-transparent to-[#d4af37]/18" />
      </div>
      <svg
        className="absolute left-0 top-[-60px] w-full text-slate-900/95 z-0"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,96L80,122.7C160,149,320,203,480,218.7C640,235,800,213,960,186.7C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
      <div className="section space-y-10 py-16 relative z-10">
        {/* Version condensée mobile */}
        <div className="grid gap-6 md:hidden">
          <div className="space-y-3">
            <Image
              src="/Kazimo.png"
              alt="Kazimo Logo"
              width={440}
              height={150}
              className="h-28 w-auto drop-shadow-[0_10px_28px_rgba(212,175,55,0.55)]"
              priority
            />
            <p className="text-base text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              La plateforme de core banking modulaire pour la microfinance en
              Afrique.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-heading text-base font-semibold text-[#d4af37] flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#d4af37]" />
                Solutions
              </h4>
            <ul className="space-y-2 text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#solution">
                  <Shield className="h-4 w-4 text-[#d4af37]" />
                  Core Banking
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#ia">
                  <Bot className="h-4 w-4 text-[#d4af37]" />
                  Assistant IA
                </Link>
              </li>
            </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-base font-semibold text-[#d4af37] flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#d4af37]" />
                Entreprise
              </h4>
            <ul className="space-y-2 text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/pour-qui">
                  <Users className="h-4 w-4 text-[#d4af37]" />
                  Pour qui ?
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#tarifs">
                  <DollarSign className="h-4 w-4 text-[#d4af37]" />
                  Tarifs
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="space-y-3 rounded-xl border border-[#d4af37]/20 bg-white/5 p-4">
            <h4 className="font-heading text-base font-semibold text-[#d4af37] flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#d4af37]" />
              Contact
            </h4>
            <ul className="space-y-3 text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#d4af37]" />
                <a className="hover:text-[#d4af37] transition-colors font-medium" href="tel:+237620275758">
                  +237 620 27 57 58
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#d4af37]" />
                <a className="hover:text-[#d4af37] transition-colors font-medium" href="mailto:contact@kazimo.com">
                  contact@kazimo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Version complète desktop */}
        <div className="hidden grid-cols-2 gap-10 md:grid lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/Kazimo.png"
              alt="Kazimo Logo"
              width={560}
              height={190}
              className="h-36 w-auto drop-shadow-[0_14px_36px_rgba(212,175,55,0.6)] sm:h-40 lg:h-44"
              priority
            />
            <p className="text-base text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              La plateforme de core banking modulaire pour la microfinance en
              Afrique. Sécurisée, conforme et évolutive.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#d4af37]" />
              Solutions
            </h4>
            <ul className="space-y-2 text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#solution">
                  <Shield className="h-4 w-4 text-[#d4af37]" />
                  Core Banking
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#solution">
                  <Wallet className="h-4 w-4 text-[#d4af37]" />
                  Portefeuilles Numériques
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#solution">
                  <Network className="h-4 w-4 text-[#d4af37]" />
                  Gestion des Agents
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#ia">
                  <Bot className="h-4 w-4 text-[#d4af37]" />
                  Assistant IA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[#d4af37]" />
              Entreprise
            </h4>
            <ul className="space-y-2 text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/pour-qui">
                  <Users className="h-4 w-4 text-[#d4af37]" />
                  Pour qui ?
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#conformite">
                  <Lock className="h-4 w-4 text-[#d4af37]" />
                  Conformité & Sécurité
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#integrations">
                  <Plug className="h-4 w-4 text-[#d4af37]" />
                  Intégrations
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/#tarifs">
                  <DollarSign className="h-4 w-4 text-[#d4af37]" />
                  Tarifs
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#d4af37] transition-colors font-medium flex items-center gap-2" href="/a-propos">
                  <Info className="h-4 w-4 text-[#d4af37]" />
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-lg font-semibold text-[#d4af37] flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#d4af37]" />
              Contact
            </h4>
            <ul className="space-y-3 text-base text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#d4af37]" />
                <a className="hover:text-[#d4af37] transition-colors font-medium" href="tel:+237620275758">
                  +237 620 27 57 58
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#d4af37]" />
                <a className="hover:text-[#d4af37] transition-colors font-medium" href="mailto:contact@kazimo.com">
                  contact@kazimo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#d4af37]" />
                <span className="font-medium">Afrique Centrale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <svg
        className="absolute bottom-[-60px] left-0 w-full rotate-180 text-slate-900/95 z-0"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,96L80,122.7C160,149,320,203,480,218.7C640,235,800,213,960,186.7C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
      <div className="border-t border-white/10 relative z-10">
        <div className="section flex flex-col gap-4 py-6 text-base text-[#f7d774] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Kazimo. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

