<div align="center">

<img src="assets/favicon.svg" width="72" alt="Mela">

# Mela — Storefront v3

**A polished, front-end-only redesign of [shop.mela.global](https://shop.mela.global)**
<br>Authentic South Asian & Asian groceries, delivered across Hong Kong.

[**Live preview → mela-global.vercel.app**](https://mela-global.vercel.app)

![HTML](https://img.shields.io/badge/HTML-static-013927?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-no%20framework-013927?style=flat-square)
![JS](https://img.shields.io/badge/JS-vanilla-013927?style=flat-square)
![Build](https://img.shields.io/badge/build-none-e6c260?style=flat-square)

</div>

---

## About

This is a **design clone** of the live Mela store. Every page keeps the structure and content of the live site and refines the details: alignment, spacing, type scale, consistent components, hover and focus states, and a proper mobile layout.

It is **front end only**. Search, cart, filters, forms and sign-in look and respond like the real thing, but nothing is sent anywhere. Product images, prices and copy load from the live site.

## Pages

| | Page | File |
|---|---|---|
| 🏠 | Home | [`index.html`](index.html) |
| 🗂️ | Category & sub-category listing | [`listing.html`](listing.html) |
| 🧈 | Product detail | [`product.html`](product.html) |
| 🛒 | Shopping cart | [`cart.html`](cart.html) |
| ♡ | Wishlist | [`wishlist.html`](wishlist.html) |
| 🔐 | Sign in · Create account · Forgot password | [`login.html`](login.html) · [`register.html`](register.html) · [`forgot-password.html`](forgot-password.html) |
| 🪔 | Diwali bundles | [`diwali.html`](diwali.html) |
| 🏷️ | Offers & deals | [`deals.html`](deals.html) |
| ℹ️ | About · Contact · Delivery | [`about.html`](about.html) · [`contact.html`](contact.html) · [`delivery.html`](delivery.html) |
| 📄 | Terms of Service · Privacy Policy | [`terms.html`](terms.html) · [`privacy.html`](privacy.html) |

The full page inventory and catalogue tree are in [`SITEMAP.md`](SITEMAP.md).

## Design system

**Typeface:** [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) — 400 / 500 / 600 / 700

**Colour**

| Token | Swatch | Hex | Use |
|---|---|---|---|
| `--green` | ![](https://img.shields.io/badge/-%20%20%20%20-013927?style=flat-square) | `#013927` | Brand, headings, primary buttons |
| `--gold` | ![](https://img.shields.io/badge/-%20%20%20%20-e6c260?style=flat-square) | `#e6c260` | Promo strip, highlights, secondary CTAs |
| `--orange` | ![](https://img.shields.io/badge/-%20%20%20%20-ec681f?style=flat-square) | `#ec681f` | Discount tags, eyebrows, badges |
| `--leaf` | ![](https://img.shields.io/badge/-%20%20%20%20-2c904c?style=flat-square) | `#2c904c` | In-stock, success, WhatsApp |
| `--ink` | ![](https://img.shields.io/badge/-%20%20%20%20-262622?style=flat-square) | `#262622` | Body text |
| `--grey` | ![](https://img.shields.io/badge/-%20%20%20%20-b6b6b6?style=flat-square) | `#b6b6b6` | Struck-through prices, placeholders |
| `--cream` | ![](https://img.shields.io/badge/-%20%20%20%20-f8f6f1?style=flat-square) | `#f8f6f1` | Section backgrounds, panels |

**Spacing:** one 4 / 8px scale (`--s1` 4px → `--s9` 96px) · **Content width:** 1280px with 24px gutters (16px on mobile) · **Radii:** 8 / 12 / 20px

**Type scale:** 12 · 13 · 15 · 18 · 24 · 32 · 44px

## Project structure

```
.
├── index.html            # one file per page
├── listing.html …
├── assets/
│   ├── styles.css        # tokens, header, footer, cards, buttons — shared by every page
│   ├── site.js           # product card template, sticky header, countdown
│   ├── <page>.css/.js    # page-specific styles and sample data
│   ├── logo.svg · favicon.svg
│   └── app-store.svg · google-play.svg
├── SITEMAP.md
└── README.md
```

## Run locally

No install, no build. Serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Deploy

Deployed on [Vercel](https://vercel.com) as a static site. With no framework or build step, Vercel serves the folder as is.

```bash
vercel --prod
```

---

<div align="center">
<sub>Design prototype for <b>Mela Global Limited</b>, Hong Kong · Product imagery and catalogue data © Mela Global</sub>
</div>
