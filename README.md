# Personal Profile Page

A personal portfolio/profile webpage built with plain HTML, vanilla JavaScript, and Tailwind CSS v4 — no framework, no JS bundler.

The page is split into a Home/hero section, an About Me section, an Interests grid, a Favorites grid, and a "Let's Connect" footer with social links. A sliding pill indicator highlights the active nav link on both desktop and mobile.

---

## Tech Stack

- **HTML5**
- **Vanilla JavaScript** (ES6+, no framework, no bundler)
- **Tailwind CSS v4** (compiled via the Tailwind CLI)
- **Prettier** + `prettier-plugin-tailwindcss` for formatting

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Installation

```bash
git clone https://github.com/marklhesterpile-dev/personal_profile_page.git
cd personal_profile_page
npm install
```

### Build the CSS

```bash
npm run build
```

This runs the Tailwind CLI in watch mode, compiling `public/assets/css/input.css` → `public/assets/css/output.css`. Keep it running while you work — `output.css` is the file `index.html` actually links to, and it's auto-generated, so don't edit it by hand.

### Run the site

There's no dev server configured. Either:

- Open `index.html` directly in your browser, or
- Serve the folder with any static server (e.g. the VS Code "Live Server" extension) for live reload while editing.

### Important Notes

- `--watch` keeps the CLI running and rebuilds automatically whenever files change.
- `input.css` is your **source** file — this is where Tailwind is imported.
- `output.css` is **auto-generated — do NOT edit it manually**.
- `output.css` includes:
  - Preflight (CSS reset)
  - Theme variables
  - Utility classes
- Use `npm run build` to start the Tailwind CLI in watch mode and automatically rebuild styles whenever changes are detected.

---

## Project Structure

```
personal_profile_page/
├── index.html              # Page shell — empty section containers + script tags
├── package.json             # npm scripts & dependencies
├── .prettierrc               # Prettier + Tailwind class sorting config
│
├── components/                # Vanilla JS — each file renders one piece of the page
│   ├── headerNav.js            # Builds the nav links + pill indicator markup
│   ├── headerNavPill.js         # Animates/positions the active-link pill
│   ├── responsiveNav.js          # Mobile slide-in menu open/close logic
│   ├── heroPicture.js              # Renders the hero profile photo
│   ├── socialLinkButton.js          # Social icon buttons under the hero text
│   ├── aboutCards.js                 # About Me: traits, values, photo
│   ├── seeMoreToggle.js                # "See More/Less" toggle in About Me
│   ├── interestCards.js                 # My Interests grid content
│   ├── favoriteCards.js                  # My Favorites grid content
│   └── footer.js                           # "Let's Connect" footer socials
│
└── public/assets/
    ├── css/
    │   ├── input.css            # Tailwind source — edit this
    │   └── output.css            # Compiled CSS — generated, don't edit
    └── visual_assets/
        ├── icons/                  # UI icons (menu, traits, interests, favorites)
        │   └── social_media/         # Platform logo SVGs
        └── images/
            ├── illustrations/          # Per-category interest/favorite artwork
            └── photos/                   # Profile photo + favicon
```

---

## How the Components Work

There's no framework here — each file in `components/` follows the same simple pattern:

1. Define some data (an array of strings or objects).
2. Define a small template-literal function that turns one data item into an HTML string.
3. Join the results and assign them to a container element's `.innerHTML`.

All ten component scripts are loaded with `defer` in `index.html`, so they run in source order right after the page is parsed. **Order matters in a couple of places** — most notably, `headerNav.js` must run before `headerNavPill.js`, since the pill indicator doesn't exist in the DOM until `headerNav.js` injects it.

---

## Customization

The Tailwind theme lives in `public/assets/css/input.css`:

- A custom `night-100` → `night-1200` grayscale palette, defined in OKLCH
- Custom breakpoints: `3xs` (320px), `2xs` (375px), `xs` (475px)
- A `.pill` transition utility for the nav indicator

To swap in your own content (bio, interests, favorites, socials), edit the data arrays at the top of the relevant file in `components/` — the rendering logic underneath doesn't need to change.

---

## Author

**Mark Lhester Pile**
[GitHub](https://github.com/marklhesterpile-dev)
