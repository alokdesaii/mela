# shop.mela.global — Sitemap

Platform: Magento 2 (Alothemes "orfarm7" theme). No public sitemap.xml; built from homepage links (2026-10-23).

## Page templates (what we actually need to design)
| Template | Example URL |
|---|---|
| Home | `/` |
| Category / listing | `/shop/dairy-breakfast.html` |
| Sub-category listing | `/shop/dairy-breakfast/milk.html` |
| Product detail | `/amul-salted-butter-500g.html` |
| Cart | `/checkout/cart/` |
| Login / Register / Forgot password | `/customer/account/login/`, `/create/`, `/forgotpassword/` |
| Wishlist | `/wishlist/` |
| Sales countdown / deals | `/salescountdown/index/view/` |
| Campaign landing | `/diwali-landing` |
| Static content | `/about-us`, `/contact`, `/delivery`, `/terms-and-conditions/`, `/privacy-policy-cookie-restriction-mode/` |

## Catalog tree (`/shop/…`)
- **Atta, Dal & Rice** — atta-flour, rice, pulses-lentils, lentils, millets-grains, papad-fryums, soya-products
- **Vegetables & Fruits** — fresh-vegetables, fresh-fruits
- **Dairy & Breakfast** — milk, paneer-cream, cheese, butter-margarine, flavoured-milk, coconut-milk-cream
- **Breakfast & Instant Foods** — breakfast-cereals, instant-meals, instant-mixes, ready-to-eat, pasta-noodles-vermicelli (› rice-noodles)
- **Bakery & Biscuits** — biscuits-cookies, bakery-products
- **Munchies & Snacks** — chips, namkeen, healthy-snacks
- **Sweets, Desserts & Confectionery** — sweets, candy-mint
- **Spices & Seasonings** — whole-spices, spice-powders, spice-blend, salt-seasoning, sugar-jaggery-honey, baking-cooking-essentials
- **Cooking Oil & Ghee** — edible-oils, premium-oil, traditional-oil, ghee
- **Dry Fruits** — nuts-seeds, dried-fruits
- **Sauces, Spreads & Condiments** — sauce, pickle-chutney, cooking-ingredients
- **Soft Drinks & Juices** — soft-drinks, fruit-juices, water, coffee-drinks, milk-speciality-drinks
- **Tea & Coffee** (`cold-drinks-juices`) — tea, coffee
- **Personal Care** — skin-care, hair-care, oral-care, bath-body
- **Pharma & Wellness** — vitamin-supplement, digestive-care, ayurvedic-products
- **Home & Office Essentials** — laundry-care, paper-products, disposable-tableware, stationery
- **Puja Essentials** — puja-supplies, incense
- **Festive Items** — rakhi

## Notes for the redesign
- Some URL slugs don't match their parent (e.g. `spices-oil-ghee/*` under Cooking Oil, `pantry-staples-condiments/*` under Sweets). That's a backend detail, so the clone keeps the nav labels and normalises the URLs.
- The catalog has about 18 top-level categories and roughly 70 sub-categories, but only **one listing template** and **one product template** need designing.
