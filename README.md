# Beacon of Hope — Website

**NPO 307-989 | beaconofhope118@gmail.com**

A clean, multi-page static website for Beacon of Hope NPO, built with vanilla HTML, CSS, and JavaScript. Designed to open directly in a browser or serve from any web host (Netlify, GitHub Pages, etc.).

---

## Project Structure

```
beacon-of-hope/
├── index.html              ← Home page
├── css/
│   ├── global.css          ← Shared styles, navbar, buttons, footer
│   ├── home.css            ← Hero, stats bar, services, CTA
│   ├── leadership.css      ← Featured leader + team grid
│   ├── about.css           ← About layout + highlights
│   ├── vision.css          ← Vision/Mission cards + values grid
│   ├── contact.css         ← Contact info + form styles
│   └── donate.css          ← Donation impact + form styles
├── js/
│   ├── global.js           ← Navbar scroll, mobile menu, scroll-reveal
│   ├── home.js             ← Animated stat counters
│   ├── contact.js          ← Contact form handler
│   └── donate.js           ← Donation amount selector + pledge handler
├── images/
│   └── (add team photos here — see Leadership page)
└── pages/
    ├── about.html
    ├── vision.html
    ├── leadership.html
    ├── contact.html
    └── donate.html
```

---

## How to Run Locally

1. Open the folder in **Visual Studio Code**
2. Install the **Live Server** extension (Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. The site opens at `http://127.0.0.1:5500`

No build tools, no npm, no dependencies needed.

---

## Adding Team Photos (Leadership Page)

1. Add your photo files (JPG/PNG) to the `images/` folder
2. In `pages/leadership.html`, replace the SVG placeholder inside `.leader-avatar` with:

```html
<img src="../images/your-photo.jpg" alt="Name" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
```

---

## Customising Content

| What to change | Where |
|---|---|
| Phone / email | `css/global.css` footer + each page footer |
| Banking details | `pages/donate.html` — bank-details section |
| Team members | `pages/leadership.html` — leaders-grid |
| Stats numbers | `index.html` — `data-target` attributes on `.stat-num` |
| Brand colours | `css/global.css` — CSS variables at top of file |

---

## Deploying (Free Hosting)

**Netlify (recommended):**
1. Go to [netlify.com](https://netlify.com) → New site → Drag & drop this folder
2. Your site is live in seconds with a free URL

**GitHub Pages:**
1. Push to a GitHub repo
2. Settings → Pages → Deploy from main branch

---

## Brand Colours

| Token | Value | Use |
|---|---|---|
| `--primary` | `#1d5c6e` | Main teal (logo) |
| `--primary-mid` | `#2a7a90` | Mid teal |
| `--primary-light` | `#4db8d0` | Light teal / accents |
| `--gold` | `#f9c74f` | Donate button / hero accent |
| `--dark` | `#071e27` | Navy background |

---

*Built for Beacon of Hope NPO — We Care, We Love*
