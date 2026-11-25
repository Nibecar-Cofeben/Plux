# Plux · Open-Source Smart Travel Planner 🌍✈️

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![PWA](https://img.shields.io/badge/PWA-Offline--First-22c55e.svg)](https://plux.nibecarcofeben.com)
[![Web App](https://img.shields.io/badge/Live_App-plux.nibecarcofeben.com-6366f1.svg)](https://plux.nibecarcofeben.com)

**Plux** is a free, offline-first, no-login open-source travel planner and itinerary organizer built as a modern Progressive Web App (PWA).

Organize multi-city trips day by day, calculate multi-currency budgets, import reservation vouchers via Vision AI & OCR, and explore interactive destination guides—all in a fast, privacy-respecting client-side application.

🚀 **Try it now live:** [https://plux.nibecarcofeben.com](https://plux.nibecarcofeben.com)

---

## ✨ Key Features

- 📶 **100% Offline-First PWA**: Built with service workers and local caching. Access your full itinerary, vouchers, notes, and maps anywhere in the world without requiring roaming or Wi-Fi.
- 🔓 **No Mandatory Registration**: Plan trips immediately. All data is saved directly in your browser's local storage. Cloud sync and real-time collaboration are optional.
- 🗺️ **Multi-Destination Routes & Transit Navigation**: Design complex itineraries across multiple cities. Includes native support for cruise navigation days and transit legs without creating dummy destinations.
- 💶 **Multi-Currency Budgeting & Split**: Track trip expenses across different currencies, calculate per-person vs. total costs, and monitor pending payments with live conversions.
- 🤖 **Pluxy AI Assistant**: Integrated travel assistant for smart itinerary recommendations, destination research, packing checklists, and weather insights.
- 🧾 **Universal Voucher Importer & Offline Wallet**: Scan reservation confirmations (PDFs, airline tickets, hotel vouchers, screenshots) with OCR and Vision AI directly into your trip schedule.
- 📤 **Export & Calendar Sync**: Export complete itineraries to PDF, export offline passcards, or sync events directly to your favorite calendar (.ics format / Google Calendar).
- 🎨 **Multiple Themes & Localization**: Choose between 8 built-in themes (Dark, Light, Tokyo Night, The Grid, Terminal, Starship, Ares, Minecraft) and 5 languages (English, Spanish, French, German, Italian).

---

## 🛠️ Quick Start (Run Locally)

Plux is built with modern vanilla web technologies, requiring no complex build tools or compilers.

### Prerequisites
Any static file server or Python 3.

### 1. Clone the repository
```bash
git clone https://github.com/Nibecar-Cofeben/Plux.git
cd Plux
```

### 2. Start a local server
Using Python:
```bash
python -m http.server 8088
```

Or using Node.js (`npx`):
```bash
npx serve -l 8088
```

### 3. Open in your browser
Navigate to:
```
http://localhost:8088
```

---

## 🏗️ Architecture & Tech Stack

- **Frontend Core**: Vanilla JavaScript (ES6+ Modules), HTML5 semantic markup, CSS3 custom properties with responsive layout.
- **Offline & Storage**: Service Worker (`sw.js`) with cache-first strategy for app shell & CDN assets, `localStorage` and `IndexedDB` persistence.
- **Mapping**: Leaflet.js with OpenStreetMap vector and raster tiles.
- **AI & Document Extraction**: Cloudflare Worker Gateway interfacing Vision LLMs with local Tesseract.js fallback for voucher extraction.
- **Collaboration (Optional)**: Firebase Realtime Database and Firestore for peer sync when shared.

---

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)** - see the [LICENSE](LICENSE) file for details.

This ensures that Plux remains permanently free and open source, and that any modifications or network services derived from it remain open to the global travel community.
