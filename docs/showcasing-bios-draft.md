# Showcasing Companies – bio tracker

Source of truth for the live page is `lib/showcasing-companies.ts`. This file tracks where each bio came from and what is still open.

Confirmed bios came from the organizers' doc "Brief bio Showcasing" (Kayla Bailey, received 10/24/2026). Pending bios are quoted verbatim from each company's own website and will be swapped when the company responds to Kayla.

| Company | Website | Status | Notes |
|---|---|---|---|
| ARCH Medical Solutions | arch-medical.com | confirmed | |
| Avalign | avalign.com | confirmed | |
| GCG Industries | gcgindustries.com | confirmed | "Heal. Defend. Connect." bolded per their request |
| Instrumental Machine & Development (IMD) | imdortho.com | confirmed | |
| Jatex | jatexinc.net | **pending** | Site quote, expanded with their Capabilities sentence |
| LH Medical | lhindustries.com/lh-medical | **pending** | Site quote, expanded with mission + ISO 13485 / FDA CFR 820 sentences |
| Micropulse | micropulseinc.com | confirmed | |
| P2 Precision | p2precision.com | confirmed | Resolved: "P2" = P2 Precision, Pierceton IN |
| Precision Medical Technologies | premedtec.com | confirmed | Fixed typo "and well as" → "as well as" |
| Qualitex | qualitexne.com | confirmed | Tolerance symbol rendered as ± (garbled in the .docx) |
| Rayco Steel Process | raycosteelprocess.com | **pending** | Kayla: use last year's bio. Not found in this repo; site quote used for now |
| Red Star Contract Manufacturing | redstarcontractmfg.com | confirmed | Added missing final period |
| Tecomet | tecomet.com | **pending** | Kayla: use last year's bio. Not found in this repo; site quote used for now |
| TriPoint Surgical | tripointsurgical.com | confirmed | Shortened from the doc version using its own sentences |

## Open items
- **Last year's bios for Tecomet and Rayco** – the 2025 page in this repo only has video/photo galleries, no bios. If they exist elsewhere, paste them and they'll replace the site quotes.
- **Showcasing company logos** – none received yet. All 14 needed. The page already has a slot for them (`logo` field).
- **Four pending companies** – Kayla gave them until EOB 10/24 and will follow up Monday 10/27.

## Decisions made (from Kayla's doc)
- Names: full names as written in the doc (e.g. "Rayco Steel Process", "ARCH Medical Solutions", "LH Medical").
- Order: alphabetical.
- Location line: not shown.
- Micropulse listed as "Micropulse" (no RMP).
- Tecomet listed as "Tecomet" (no Orchid mention).
