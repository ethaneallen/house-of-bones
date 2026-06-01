# House of Bones 🎲🦴

House of Bones is a fast, touch-friendly domino scorekeeper built for real table play.

It includes a modern web app and an Android WebView wrapper, with offline support, match history, stats, and game-night UX touches like haptics, sound, quick actions, and winner celebration effects. ✨

Bones on deck, scores on lock. 🔒

Built for fast rounds, loud tables, and zero scorekeeping drama.

## What This App Does 🎯

- Tracks scores for 2 to 4 players.
- Uses the classic House of Bones visual scoring style (50-point "house" units).
- Supports lightning-fast scoring during live play with tap, presets, long-press custom points, and undo.
- Detects winners automatically at the configured target score.
- Stores game state, history, settings, and stats locally so sessions resume after refresh.

## Core Features 🔥

### Gameplay and scoring 🧮

- New match setup with:
    - player count (2 to 4)
    - player names
    - target score (minimum 50, step of 5)
- Tap score area to add +5 instantly. ⚡
- Long-press score area to open custom score input (1 to 999).
- Preset add buttons per player: +5, +10, +15, +20.
- Quick Undo per player.
- Full score history with per-entry undo.
- Round system with quick rematch flow after a winner so play never stalls.

### Match flow and feedback 🏆

- Winner banner and highlighted winner card.
- Confetti celebration animation. 🎉
- Random "Who goes first" picker. 🎲
- Toast notifications for key actions and confirmations.

### History and stats 📊

- Current game history timeline.
- Past matches history (winner, date/time, final scores).
- Stats panel with:
    - session stats
    - all-time stats
    - per-player win counts
    - clear-all stats action

No paper scraps. No arguing over totals. Just clean history and receipts.

### Device and UX features 📱

- Responsive UI for phones and desktop.
- Orientation-specific mobile layout tuning.
- Light and dark theme toggle.
- Sound effects toggle (Web Audio API). 🔊
- Haptic feedback toggle (if supported).
- Keep-screen-on toggle using Wake Lock API (if supported).
- Share current scoreboard via native share sheet or clipboard fallback.
- Reduced-motion support via media query.

Designed to be thumb-friendly, table-friendly, and distraction-free.

### PWA and offline 🌐

- Installable web app manifest.
- Service worker caching for offline-capable app shell behavior.

## Platforms in This Repo 🧰

### 1) Web app 💻

- Main files in repo root:
    - `domino-house-score-v4.html` (latest UI/features)
    - `manifest.json`
    - `sw.js`

### 2) Android app wrapper 🤖

- Path: `HouseOfBones/`
- Native shell loads local web assets in WebView (`file:///android_asset/www/index.html`).
- Build details:
    - compileSdk 35
    - targetSdk 35
    - minSdk 24
    - Java 17

## Quick Start ⚡

Ready in under a minute. Grab your dominoes and go.

### Run locally (web) 🌍

1. Open `domino-house-score-v4.html` directly in a browser, or serve the folder with a static server.
2. Recommended local server options:

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

3. Visit `http://localhost:8000` and open `domino-house-score-v4.html`.

### Build Android wrapper 🛠️

From `HouseOfBones/`:

```bash
./gradlew assembleDebug
```

On Windows PowerShell:

```powershell
.\gradlew.bat assembleDebug
```

## Data Storage 💾

The app uses local browser storage (no backend required). Everything stays on-device.

Saved keys include:

- `dominoGameState`
- `dominoGameStats`
- `dominoMatchHistory`
- `dominoSettings`

## Notes for Deployment 🚀

- The latest gameplay experience is in `domino-house-score-v4.html`.
- Root PWA config is now aligned to v4 (`manifest.json` + `sw.js`).
- Android bundled assets in `HouseOfBones/app/src/main/assets/www/` are aligned to `index.html`.

Tip: After deploying updates, hard refresh once to ensure clients pick up the newest service worker cache.

## Browser Support ✅

- Modern Chromium browsers (Chrome, Edge, Android Chrome) are the best target.
- Safari/iOS should work for core gameplay; some advanced APIs (Wake Lock/share behavior/haptics) vary by browser.

## Tech Stack 🧱

- HTML5
- CSS3
- Vanilla JavaScript
- Web APIs: LocalStorage, Service Worker, Web Audio, Vibration, Web Share, Wake Lock
- Android WebView wrapper (Java + Gradle)

## Project Structure 📁

```text
.
├── domino-house-score-v4.html
├── domino-house-score-v3.html
├── manifest.json
├── sw.js
├── README.md
└── HouseOfBones/
        ├── app/
        │   ├── src/main/java/com/houseofbones/app/MainActivity.java
        │   └── src/main/assets/www/
        │       ├── index.html
        │       ├── manifest.json
        │       └── sw.js
        └── gradlew.bat
```

## Roadmap Ideas 🗺️

- Export/import match data.
- Team mode and partner scoring presets.
- Optional cloud sync.
- Match notes and tags.
- Lightweight tournament mode.

## License 📄

This project is licensed under the MIT License. See `LICENSE`.
