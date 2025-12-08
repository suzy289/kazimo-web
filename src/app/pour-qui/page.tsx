const segments = [
  {
    title: "EMF déjà équipées",
    subtitle: "Moderniser et étendre votre système existant, sans tout casser",
    text: [
      "Substitution progressive ou couche digitale/API autour de l’existant.",
      "Ajout Mobile Money, application mobile clients, réseau d’agents, assistant IA et modules complémentaires.",
    ],
    cta: "Planifier un atelier de diagnostic de votre système actuel",
  },
  {
    title: "EMF en démarrage",
    subtitle: "Démarrer avec un socle solide, prêt pour la croissance",
    text: [
      "Core banking prêt à l’emploi, conforme aux standards locaux.",
      "Modules activables progressivement (agents, mobile, assurance, RH…).",
      "Modèle économique qui limite les coûts initiaux.",
    ],
    benefits: [
      "Réduction du temps entre l’obtention de l’agrément et l’ouverture effective.",
      "Mise en service rapide avec des outils dignes d’une grande institution.",
    ],
    cta: "Discuter de votre projet de lancement",
  },
];

export default function PourQuiPage() {
  return (
    <div className="space-y-12 pb-20 pt-10">
      <section className="section space-y-4">
        <div className="badge">Pour qui ?</div>
        <h1 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
          Kazimo accompagne les EMF à chaque étape de leur développement
        </h1>
      </section>

      <section className="section grid gap-6 md:grid-cols-2">
        {segments.map((seg) => (
          <div key={seg.title} className="card p-6">
            <h2 className="font-heading text-2xl font-semibold text-slate-900">
              {seg.title}
            </h2>
            <p className="mt-1 text-slate-600">{seg.subtitle}</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              {seg.text.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#1F5FFF]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {seg.benefits && (
              <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Bénéfices :</p>
                <ul className="mt-2 space-y-2">
                  {seg.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#1F5FFF]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <a className="primary-btn mt-6 inline-flex" href="/contact">
              {seg.cta}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

