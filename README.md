# Iana Vavilova — Portfolio Website

A static, dependency-free implementation of the Figma design (`Viable_personal-brand`, node `portfolio-website-1920`). Plain HTML/CSS/JS — no build step, no framework. Just open `index.html` in a browser, or serve the folder with any static file server.

## Running locally

```
python3 -m http.server 8000
```

then open http://localhost:8000

## Real images

All photos/screenshots are in `assets/img/photos/`: `portrait.jpg`, `logo.png`, `project-nornickel.png`, `project-turron.jpg`, `project-crypto-wallet.jpg`, `project-space-data.jpg`. To swap any of them later, just replace the file (keep the same filename) or add a new file and update its `src` in `index.html`.

## Icons used

Real icons are already in place for AI tools and contact methods, via the open-source `simple-icons` (brand marks: Figma, Claude, Cursor, Telegram, WhatsApp) and `lucide` (generic marks: smile, mail, network) icon sets — found in `assets/img/icons/`. No ChatGPT logo is publicly licensed for reuse, so that row uses a generic "sparkles" icon instead.

## Language switcher

The vertical **"Change language" / "Сменить язык"** control next to the hero photo (visible from ~1200px viewport width up) toggles the whole page between English and Russian. It's implemented with `data-ru` / `data-ru-html` attributes on each translatable element in `index.html` (Russian copy lives right next to the English text) and a small script in `js/main.js` that swaps `textContent`/`innerHTML` on click, updates `<html lang>`, the page `<title>` and meta description, and remembers the choice in `localStorage` so it persists across visits. To add a new translatable string, add a `data-ru="…"` attribute to that element (or `data-ru-html="…"` if it needs inline markup like `<br>`/`<em>`) — no other code changes needed.

## Not yet wired up

- The **Presentation** button opens your Figma prototype in a new tab. The **CV** button downloads `assets/cv/Iana-Vavilova-CV.pdf` directly (this avoids new-tab popup blockers).
- The **Telegram / WhatsApp / Email** contact cards already link to `t.me/viable`, WhatsApp, and your email — double check the Telegram handle is correct.
- The small "cursor + tooltip" decorative detail on the Crypto Wallet card (visible in Figma) was left out as a minor cosmetic flourish.

## Structure

```
index.html
css/styles.css
js/main.js
assets/img/icons/   brand + generic icons
assets/img/photos/  your real photos/screenshots
```
