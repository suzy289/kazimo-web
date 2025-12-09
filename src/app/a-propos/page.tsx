export default function AProposPage() {
  return (
    <div className="space-y-12 pb-20 pt-10">
      <section className="section space-y-4">
        <div className="badge">À propos</div>
        <h1 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
          Kazimo, partenaire des EMF/IMF en Afrique
        </h1>
        <p className="max-w-4xl text-lg text-slate-700 leading-relaxed">
          Kazimo est une plateforme de core banking modulaire conçue pour les EMF, IMF,
          coopératives et banques communautaires en Afrique. Notre mission est de sécuriser et
          d’accélérer la réussite de la microfinance grâce à une solution évolutive, conforme et
          tournée vers le mobile et l’intelligence artificielle.
        </p>
      </section>

      <section className="section relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-[#e8f1ff] via-white to-[#f3f8ff] p-8 shadow-xl md:p-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#1f5fff]/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-48 w-48 rounded-full bg-[#4da3ff]/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rotate-6 bg-gradient-to-tr from-white/20 via-[#e0ecff]/60 to-white/10 opacity-80 blur-3xl" />
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1f5fff]">
              Ce qui nous distingue
            </p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Conformité, sécurité et déploiement terrain
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-700">
              Une architecture pensée pour la réglementation COBAC, la sécurité bancaire
              et une couverture digitale bout en bout pour vos équipes et vos clients.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Conformité & sécurité",
              text: "Alignée COBAC, sécurité bancaire (AES-256, TLS, MFA), audits et pentests réguliers, journalisation avancée.",
            },
            {
              title: "Couverture digitale complète",
              text: "Core banking, Mobile Money, app mobile clients, réseau d’agents, IA, reporting exécutif et connecteurs ouverts.",
            },
            {
              title: "Accompagnement",
              text: "Déploiement guidé, diagnostics, ateliers de migration ou de lancement pour EMF/IMF nouvelles ou déjà équipées.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1f5fff] via-[#4da3ff] to-[#1f5fff]" />
              <h3 className="font-heading text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-700">{item.text}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1f5fff]">
                <span className="inline-block h-2 w-2 rotate-45 bg-[#1f5fff] shadow-[0_6px_18px_rgba(31,95,255,0.35)]" />
                Priorité opérationnelle & régulatoire
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section card space-y-4 p-6">
        <h2 className="font-heading text-2xl font-semibold text-slate-900">
          Prenez rendez-vous
        </h2>
        <p className="text-slate-700">
          Parlez à un expert Kazimo pour une démonstration ou un atelier de diagnostic adapté à
          votre institution.
        </p>
        <a className="primary-btn w-full sm:w-auto" href="/contact">
          Contacter un expert
        </a>
      </section>
    </div>
  );
}

