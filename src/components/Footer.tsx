import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-100">
      <div className="section space-y-10 py-16">
        {/* Version condensée mobile */}
        <div className="grid gap-6 md:hidden">
          <div className="space-y-3">
            <Image
              src="/Kazimo.png"
              alt="Kazimo Logo"
              width={220}
              height={70}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm text-slate-300">
              La plateforme de core banking modulaire pour la microfinance en
              Afrique.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-heading text-base font-semibold">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link className="hover:text-white" href="/#solution">
                    Core Banking
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/#ia">
                    Assistant IA
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-heading text-base font-semibold">Entreprise</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link className="hover:text-white" href="/pour-qui">
                    Pour qui ?
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/#tarifs">
                    Tarifs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <h4 className="font-heading text-base font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#4DA3FF]" />
                <a className="hover:text-white" href="tel:+237620275758">
                  +237 620 27 57 58
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#4DA3FF]" />
                <a className="hover:text-white" href="mailto:contact@kazimo.com">
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
              width={260}
              height={90}
              className="h-20 w-auto brightness-0 invert sm:h-24"
            />
            <p className="text-sm text-slate-300">
              La plateforme de core banking modulaire pour la microfinance en
              Afrique. Sécurisée, conforme et évolutive.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-lg font-semibold">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link className="hover:text-white" href="/#solution">
                  Core Banking
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/#solution">
                  Portefeuilles Numériques
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/#solution">
                  Gestion des Agents
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/#ia">
                  Assistant IA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-lg font-semibold">Entreprise</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link className="hover:text-white" href="/pour-qui">
                  Pour qui ?
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/#conformite">
                  Conformité & Sécurité
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/#integrations">
                  Intégrations
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/#tarifs">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/a-propos">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#4DA3FF]" />
                <a className="hover:text-white" href="tel:+237620275758">
                  +237 620 27 57 58
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#4DA3FF]" />
                <a className="hover:text-white" href="mailto:contact@kazimo.com">
                  contact@kazimo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#4DA3FF]" />
                <span>Afrique Centrale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section flex flex-col gap-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Kazimo. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-white">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

