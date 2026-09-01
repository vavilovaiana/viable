# Iana Vavilova — Portfolio Website

A static, dependency-free implementation of the Figma design (`Viable_personal-brand`, node `portfolio-website-1920`). Plain HTML/CSS/JS — no build step, no framework. Just open `index.html` in a browser, or serve the folder with any static file server.

## Running locally

```
python3 -m http.server 8000
```

then open http://localhost:8000

## Placeholder images to replace

This session's network access couldn't reach Figma's asset-hosting servers, so five images are temporary placeholders (light purple diagonal-stripe boxes with a label) instead of your real photos/screenshots. They're already sized and positioned exactly like the design — just replace the files below and everything will line up:

| File | Used for | Design size |
|---|---|---|
| `assets/img/placeholders/portrait.svg` | Your hero portrait photo | 600 × 680 |
| `assets/img/placeholders/project-1.svg` | Nornickel Mining Platform card image | 780 × 340 |
| `assets/img/placeholders/project-2.svg` | Turrón BNPL card image | 780 × 340 |
| `assets/img/placeholders/project-3.svg` | Crypto Wallet card image | 780 × 340 |
| `assets/img/placeholders/project-4.svg` | Space data analytics card image | 780 × 340 |
| `assets/img/placeholders/logo.svg` | Header logo mark | 64 × 40 |

To swap one in: export the image from Figma (right-click the layer → Export), then either replace the file directly (keep the same filename) or add your new file and update its `src` in `index.html`/`css`.

## Icons used

Real icons are already in place for AI tools and contact methods, via the open-source `simple-icons` (brand marks: Figma, Claude, Cursor, Telegram, WhatsApp) and `lucide` (generic marks: smile, mail, network) icon sets — found in `assets/img/icons/`. No ChatGPT logo is publicly licensed for reuse, so that row uses a generic "sparkles" icon instead.

## Not yet wired up

- The **Presentation** and **CV** header buttons are placeholders (they log to the console instead of navigating) — point them at real files/links whenever you have them.
- The **Telegram / WhatsApp / Email** contact cards already link to `t.me/viable`, WhatsApp, and your email — double check the Telegram handle is correct.
- The small "cursor + tooltip" decorative detail on the Crypto Wallet card (visible in Figma) was left out as a minor cosmetic flourish.

## Structure

```
index.html
css/styles.css
js/main.js
assets/img/icons/        real brand + generic icons
assets/img/placeholders/ placeholder images (see table above)
```
