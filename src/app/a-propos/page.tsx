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

      <section className="section grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Conformité & sécurité",
            text: "Alignée COBAC, sécurité de niveau bancaire (AES-256, TLS, MFA, audits et pentests).",
          },
          {
            title: "Couverture digitale complète",
            text: "Core banking, Mobile Money, app mobile clients, réseau d’agents, IA et reporting exécutif.",
          },
          {
            title: "Accompagnement",
            text: "Déploiement guidé, diagnostics, ateliers de migration ou de lancement pour EMF nouvelles ou déjà équipées.",
          },
        ].map((item) => (
          <div key={item.title} className="card p-6">
            <h2 className="font-heading text-xl font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="mt-2 text-slate-700">{item.text}</p>
          </div>
        ))}
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

