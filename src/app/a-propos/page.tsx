export default function AProposPage() {
  const orbitImages = [
    {
      src: "/LI_Blog_Four_reasons-202004240933263861987.jpg",
      radius: "clamp(120px, 15vw, 220px)",
      duration: "20s",
      delay: "0s",
      reverse: false,
    },
    {
      src: "/depositphotos_382815564-stock-photo-forex-chart.jpg",
      radius: "clamp(150px, 18vw, 280px)",
      duration: "25s",
      delay: "-5s",
      reverse: true,
    },
    {
      src: "/futuric.jpg",
      radius: "clamp(180px, 21vw, 340px)",
      duration: "30s",
      delay: "-10s",
      reverse: false,
    },
    {
      src: "/forex-gold-trading-background-glowing-260nw-.jpg",
      radius: "clamp(210px, 25vw, 400px)",
      duration: "35s",
      delay: "-15s",
      reverse: true,
    },
    {
      src: "/pngtree-3d-render-of-crypto-currency-and-nft-composition-image_3828737.jpg",
      radius: "clamp(240px, 28vw, 460px)",
      duration: "40s",
      delay: "-20s",
      reverse: false,
    },
  ];

  return (
    <div className="space-y-12 pb-20 pt-10">
      {/* Section Hero avec images en rotation */}
      <section className="section relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-[#0a1628] via-[#1a2747] to-[#0f1f3a] p-8 shadow-2xl md:p-12">
        {/* Effets de fond animés */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#1f5fff]/20 blur-3xl animate-pulse" />
          <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#4da3ff]/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#1f5fff]/20 via-[#4da3ff]/15 to-transparent blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
          {/* Contenu texte */}
          <div className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-[#4da3ff] backdrop-blur-sm border border-white/20">
              <span className="inline-block h-2 w-2 rounded-full bg-[#4da3ff] animate-pulse" />
              À propos
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Kazimo,{" "}
              <span className="bg-gradient-to-r from-[#4da3ff] via-white to-[#4da3ff] bg-clip-text text-transparent">
                partenaire des EMF/IMF
              </span>{" "}
              en Afrique
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Kazimo est une plateforme de core banking modulaire conçue pour les EMF, IMF,
              coopératives et banques communautaires en Afrique. Notre mission est de sécuriser et
              d'accélérer la réussite de la microfinance grâce à une solution évolutive, conforme et
              tournée vers le mobile et l'intelligence artificielle.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Innovation</div>
                <div className="text-sm font-bold text-white">Technologie de pointe</div>
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sécurité</div>
                <div className="text-sm font-bold text-white">Conformité COBAC</div>
              </div>
            </div>
          </div>

          {/* Conteneur d'orbite pour les images */}
          <div className="orbit-container relative min-h-[500px] lg:min-h-[600px]">
            {/* Centre avec logo ou icône */}
            <div className="orbit-center">
              <div className="text-center z-10 relative">
                <div className="text-4xl font-bold text-white mb-2 drop-shadow-[0_0_20px_rgba(77,163,255,0.6)]">K</div>
                <div className="text-xs font-semibold text-[#4da3ff] uppercase tracking-wider">Kazimo</div>
              </div>
            </div>

            {/* Images en orbite */}
            {orbitImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Orbite ${index + 1}`}
                className={`orbit-image ${image.reverse ? "reverse" : ""}`}
                style={{
                  "--orbit-radius": image.radius,
                  "--orbit-duration": image.duration,
                  animationDelay: image.delay,
                } as React.CSSProperties}
              />
            ))}

            {/* Lignes de connexion animées */}
            <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1, pointerEvents: "none" }}>
              {orbitImages.map((_, index) => {
                const angle = (index * 72) * (Math.PI / 180);
                const radiusStr = orbitImages[index].radius;
                const matches = radiusStr.match(/([\d.]+)px/g);
                const radius = matches ? parseFloat(matches[matches.length - 1]) : 220;
                const centerX = 300; // Centre approximatif
                const centerY = 300;
                const x = centerX + Math.cos(angle) * (radius / 2);
                const y = centerY + Math.sin(angle) * (radius / 2);
                return (
                  <line
                    key={index}
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke="rgba(77, 163, 255, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                );
              })}
            </svg>

            {/* Particules flottantes */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-[#4da3ff]/20 blur-sm"
                  style={{
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
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

