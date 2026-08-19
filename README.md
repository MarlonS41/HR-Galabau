# HÖRNSCHEMEYER u. RIEPE Garten - Landschaftsbau GmbH

Moderne, performante und conversion-optimierte Website für **HÖRNSCHEMEYER u. RIEPE Garten - Landschaftsbau GmbH** (HR-Galabau) in Osnabrück, umgesetzt mit **[Astro.js](https://astro.build/)**.

---

## 🌿 Highlights & Funktionen

- ⚡ **Astro.js Static Site Generation:** Extrem schnelle Ladezeiten, null unnötiger JavaScript-Overhead, beste Core Web Vitals & SEO.
- 🎨 **Modernes Design:** Frisches, edles Farbschema (Grüntöne, Slate/Dark-Elemente, harmonische Kontraste) passend zum Markenauftritt *„Alles im grünen Bereich“*.
- 📱 **100% Responsive:** Perfekt abgestimmt auf Smartphones, Tablets und große Bildschirme.
- 🔍 **Interaktive Galerie & Lightbox:** Vollständiges Referenz-Portfolio mit Echtzeit-Kategoriefilter (*Gartenneuanlage, Pflaster & Terrassen, Zaunbau*) und Tastatur-/Touch-fähigem Lightbox-Zoom.
- 🚀 **Projekt-Schnellcheck / Konfigurator:** Intuitive Vorauswahl für Interessenten mit direkter Übernahme in das Anfrageformular.
- ⏱️ **60-Sekunden Express-Bewerbung:** Niedrigschwellige Kurzbewerbung für Fachkräfte und Helfer ohne bürokratische Hürden.
- 📍 **Interaktive Standortkarte:** Datenschutzkonforme OpenStreetMap-Integration für den Standort *Moorweg 61, 49090 Osnabrück*.
- ⚖️ **DSGVO & Rechtssicherheit:** Vollständiges Impressum (§ 5 TMG) mit allen Unternehmens- und Registerdaten, Datenschutzerklärung und Cookie-Banner.

---

## 📁 Projektstruktur (Astro)

```
HR-Galabau/
├── astro.config.mjs         # Astro-Konfiguration
├── package.json             # NPM-Abhängigkeiten & Skripte
├── tsconfig.json            # TypeScript-Konfiguration
├── public/                  # Statische Assets (Favicon, Bilder, SVGs)
│   ├── favicon.png
│   └── assets/
│       └── images/          # Original-Fotos, Logos & Vektorgrafiken
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # Zentrales Layout (Meta-Tags, Header, Footer, Lightbox, Skripte)
│   ├── components/          # Wiederverwendbare Astro-Komponenten
│   │   ├── TopBar.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── ServicesGrid.astro
│   │   ├── ProjectCheck.astro
│   │   ├── Gallery.astro
│   │   ├── Process.astro
│   │   ├── About.astro
│   │   ├── CareerTeaser.astro
│   │   ├── Faq.astro
│   │   ├── ContactSection.astro
│   │   ├── Footer.astro
│   │   ├── FloatingActions.astro
│   │   ├── Lightbox.astro
│   │   └── CookieBanner.astro
│   ├── pages/               # Routen & Seiten
│   │   ├── index.astro      # Startseite
│   │   ├── leistungen.astro # Leistungsübersicht im Detail
│   │   ├── referenzen.astro # Vollständige Galerie
│   │   ├── karriere.astro   # Jobangebote & Kurzbewerbung
│   │   ├── kontakt.astro    # Kontakt & Anfahrt
│   │   ├── impressum.astro  # Impressum nach § 5 TMG
│   │   └── datenschutz.astro# Datenschutzerklärung (DSGVO)
│   └── styles/
│       └── global.css       # Designsystem, CSS-Variablen & Responsive Styles
└── dist/                    # Generierte produktionsreife statische Ausgabe
```

---

## 🛠️ Entwicklung & Build

### 1. Entwicklungsserver starten (Hot Reload)
```bash
npm run dev
# Standardmäßig erreichbar unter http://localhost:4321
```

### 2. Produktions-Build erstellen
```bash
npm run build
# Generiert den optimierten statischen Output im Ordner `dist/`
```

### 3. Vorschau des Produktions-Builds
```bash
npm run preview
```

---

## 🏢 Unternehmensdaten

- **Unternehmen:** HÖRNSCHEMEYER u. RIEPE Garten - Landschaftsbau GmbH
- **Standort:** Moorweg 61, 49090 Osnabrück
- **Telefon Büro:** 05407 / 2585
- **Mobil / WhatsApp:** +49 176 4655 0964
- **E-Mail:** info@hr-galabau.com
- **Geschäftsführer:** Jonas Hörnschemeyer
- **Handelsregister:** Amtsgericht Osnabrück, HRB 217065
- **USt-ID-Nr.:** DE349141425
