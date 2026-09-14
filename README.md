# ANBU Marbles — Digital Showroom (MVP)

Premium digital showroom for AnbuMarbels: browse marble/granite/tiles, filter by type & finish, view product details with zoom, build a selection (cart), and order or request quotes directly on WhatsApp.

**Live:** https://saik1105.github.io/anbu-marbles/

## MVP scope
- Editorial dark-luxury design, mobile-first, motion via scroll reveals
- Catalog with category + finish filters (`data.js` — edit products there)
- Product detail modal with image zoom, save/bookmark (localStorage)
- Cart with quantities + estimated total (localStorage)
- WhatsApp deep links everywhere: product enquiry, cart checkout, quote form, floating chat
- Zero build step, zero dependencies — plain HTML/CSS/JS on GitHub Pages

## Configure
- Set the real WhatsApp number in `data.js` (`WHATSAPP_NUMBER`)
- Replace Unsplash placeholder images with real product photos

## Next phase (per proposal)
Online payments/UPI, order tracking, invoices, admin panel (products/orders/customers/reports) — requires a backend (e.g., Supabase/Firebase).
