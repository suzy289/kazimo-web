import Image from "next/image";

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
      {/* Hero revisité avec décor demi-cercle et image */}
      <section className="section relative overflow-hidden rounded-3xl border-2 border-black bg-white/90 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eaf1ff] via-white to-[#dfe8ff]" />
        {/* Cercle/ demi-cercle décoré */}
        <div className="pointer-events-none absolute -right-28 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border-2 border-black bg-gradient-to-br from-[#1F5FFF]/40 via-[#4DA3FF]/35 to-white/65 shadow-[0_25px_70px_-40px_rgba(31,95,255,0.55)]" />
        <div className="pointer-events-none absolute -right-10 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#1F5FFF]/35 bg-[#1F5FFF]/10 blur-[6px]" />
        <div className="pointer-events-none absolute right-6 top-1/2 h-[420px] w-[260px] -translate-y-1/2 skew-x-[-12deg] rounded-3xl border border-black/35 bg-gradient-to-b from-white/70 via-[#1F5FFF]/18 to-white/75 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.4)]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm border border-[#1F5FFF]">
              Contact / Prendre rendez-vous
            </div>
            <h1 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
              Parlez à un expert Kazimo
            </h1>
            <p className="max-w-3xl text-lg text-slate-700">
              Un échange de 30 minutes suffit pour comprendre vos enjeux, évaluer votre situation
              actuelle et vous proposer un plan de transformation adapté à votre institution.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-3 py-1 text-sm font-semibold text-[#1F5FFF] shadow-[0_10px_25px_-18px_rgba(15,23,42,0.4)]">
                Démo personnalisée
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1F5FFF] bg-[#1F5FFF]/10 px-3 py-1 text-sm font-semibold text-slate-900 shadow-[0_10px_25px_-18px_rgba(31,95,255,0.45)]">
                Plan d’action en 30 min
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative mx-auto max-w-[440px] overflow-hidden rounded-[999px] border-2 border-black bg-white shadow-[0_30px_70px_-40px_rgba(15,23,42,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-[#1F5FFF]/20" />
              <Image
                src="/istockphoto-2115141901-612x612.jpg"
                alt="Client utilisant la messagerie mobile"
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="pointer-events-none absolute -left-6 top-8 h-16 w-24 skew-x-[-10deg] rounded-2xl bg-gradient-to-br from-[#1F5FFF] via-[#4DA3FF] to-[#1F5FFF]/60 opacity-70 blur-[1px]" />
            <div className="pointer-events-none absolute right-4 bottom-6 h-12 w-28 skew-x-[12deg] rounded-2xl border border-black/30 bg-gradient-to-br from-white/70 via-[#1F5FFF]/15 to-white/60 opacity-80" />
          </div>
        </div>
      </section>

      <section className="section grid gap-8 lg:grid-cols-3">
        <div className="card p-5 lg:col-span-2 max-w-4xl">
          <form className="grid gap-3 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field} className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{field}</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[#1F5FFF] focus:outline-none"
                  placeholder={field}
                />
              </div>
            ))}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Taille du portefeuille</label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[#1F5FFF] focus:outline-none">
                {portfolioOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Statut</label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[#1F5FFF] focus:outline-none">
                {statutOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message libre</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[#1F5FFF] focus:outline-none"
                placeholder="Décrivez vos enjeux et objectifs"
              />
            </div>

            <div className="sm:col-span-2">
              <button type="button" className="primary-btn w-full sm:w-auto px-4 py-2.5 text-sm">
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

