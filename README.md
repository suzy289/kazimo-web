# Kazimo - Site Web Officiel

Plateforme de core banking modulaire pour la microfinance en Afrique.

## 🚀 Technologies

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icônes)

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📄 Pages

- `/` - Landing page avec toutes les sections
- `/a-propos` - À propos de Kazimo
- `/pour-qui` - Pour qui est Kazimo
- `/contact` - Formulaire de contact

## 🎨 Design

Design moderne inspiré d'Hercules avec :
- Grille croisée sur le background
- Éléments flottants animés
- Design minimaliste et professionnel
- Responsive (mobile, tablette, desktop)

## 🚀 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre compte GitHub
3. Cliquez sur "New Project"
4. Sélectionnez le repository `kazimo-web`
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

### Option 2 : Via la CLI Vercel

```bash
npm i -g vercel
vercel
```

### Configuration Vercel

Aucune configuration supplémentaire n'est nécessaire. Vercel détectera automatiquement :
- Framework : Next.js
- Build Command : `next build`
- Output Directory : `.next`
- Install Command : `npm install`

## 📝 Notes

- Le logo se trouve dans `/public/Kazimo.png`
- Les composants réutilisables sont dans `/src/components`
- Les styles globaux sont dans `/src/app/globals.css`

## 🔗 Liens

- Repository : [https://github.com/suzy289/kazimo-web](https://github.com/suzy289/kazimo-web)
