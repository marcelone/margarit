# Margarit Restaurant — Web Editorial en Astro

Aquest projecte és el lloc web de producció per al restaurant **Margarit** a Barcelona, construït de forma completament fidel a la identitat visual, proporcions editorials, tipografia de rètol clàssic i textura de paper de la captura de referència.

El lloc està desenvolupat en **Astro (última versió estable)**, utilitzant **TypeScript** i **CSS modular**, optimitzat per a un rendiment extraordinari (zero JS innecessari) i preparat per al seu desplegament a **Cloudflare Pages**.

---

## 🛠️ Requisits previs
- Node.js (versió >= 22.12.0)
- npm (gestor de paquets de Node)

---

## 🚀 Començar

### 1. Instal·lar les dependències
Executa la següent comanda per descarregar i instal·lar totes les dependències necessàries del projecte:
```sh
npm install
```

### 2. Iniciar el servidor de desenvolupament local
Inicia el servidor local amb recàrrega en calent (Hot Module Replacement) per veure els canvis immediatament al navegador:
```sh
npm run dev
```
Obre [http://localhost:4321](http://localhost:4321) per veure el lloc web en funcionament.

### 3. Compilar per a producció (Cloudflare Pages ready)
Per generar la compilació estàtica de producció totalment optimitzada (les imatges es processaran automàticament a format WebP comprimit de pocs kilobytes), executa:
```sh
npm run build
```
Això generarà el directori `./dist/` preparat per ser connectat a Cloudflare Pages o qualsevol servei d'allotjament estàtic.

### 4. Previsualitzar la compilació localment
Abans de pujar els canvis a producció, pots previsualitzar localment la versió compilada executant:
```sh
npm run preview
```

---

## 📁 Estructura del Projecte

```text
/
├── public/             # Favicon i recursos estàtics purs
├── src/
│   ├── assets/         # Imatges del local (façana, equip, plat, interior i textura de paper)
│   ├── components/     # Components modulars d'Astro (Header, Hero, Carta, Galeria, Reserva, Footer)
│   ├── data/           # menu.json (dades dinàmiques dels plats)
│   ├── layouts/        # Layout.astro (HTML base, SEO i Schema JSON-LD de Restaurant)
│   ├── pages/          # index.astro (pàgina principal estructurada en format editorial)
│   └── styles/         # global.css (colors corporatius, tipografia Bebas Neue i Cormorant Garamond, gra de paper)
├── package.json
└── tsconfig.json
```
