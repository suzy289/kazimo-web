const fields = [
  "Nom de l’institution",
  "Nom et prénom",
  "Fonction",
  "Email professionnel",
  "Téléphone / WhatsApp",
  "Pays",
];

const portfolioOptions = [
  "Moins de 5 000 clients",
  "5 000 - 20 000 clients",
  "20 000 - 100 000 clients",
  "Plus de 100 000 clients",
];

const statutOptions = ["Je démarre", "J’ai déjà une solution et je souhaite évoluer"];

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-20 pt-10">
      <section className="section space-y-4">
        <div className="badge">Contact / Prendre rendez-vous</div>
        <h1 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
          Parlez à un expert Kazimo
        </h1>
        <p className="max-w-3xl text-lg text-slate-700">
          Un échange de 30 minutes suffit pour comprendre vos enjeux, évaluer votre situation
          actuelle et vous proposer un plan de transformation adapté à votre institution.
        </p>
      </section>

      <section className="section grid gap-10 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <form className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field} className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{field}</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#1F5FFF] focus:outline-none"
                  placeholder={field}
                />
              </div>
            ))}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Taille du portefeuille</label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#1F5FFF] focus:outline-none">
                {portfolioOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Statut</label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#1F5FFF] focus:outline-none">
                {statutOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message libre</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#1F5FFF] focus:outline-none"
                placeholder="Décrivez vos enjeux et objectifs"
              />
            </div>

            <div className="sm:col-span-2">
              <button type="button" className="primary-btn w-full sm:w-auto">
                Envoyer / Prendre rendez-vous
              </button>
            </div>
          </form>
        </div>

        <div className="card p-6 space-y-4">
          <h2 className="font-heading text-xl font-semibold text-slate-900">
            Coordonnées
          </h2>
          <p className="text-slate-700">
            Téléphone / WhatsApp : <span className="font-semibold">+237 620 27 57 58</span>
          </p>
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            Nous répondons sous 24h pour organiser une démonstration ou un atelier de diagnostic.
          </div>
        </div>
      </section>
    </div>
  );
}

