# DESIGN.md — Ifeoma Peace David

A warm, personal site that sits inside the IJIDI family without copying it.
IJIDI uses obsidian, ivory and gold. Ifeoma's site uses plum and marigold:
the marigold is a near relative of IJIDI gold, so the family link shows, but
the overall look is her own.

Approved: plum + marigold palette, Young Serif + Figtree.

## Colour tokens

| Token          | Light     | Dark      | Use                                |
|----------------|-----------|-----------|------------------------------------|
| `--plum`       | `#3a1d36` | `#2a1427` | Header, hero and footer ground     |
| `--plum-soft`  | `#5a3352` | `#5a3352` | Portrait frame, product art        |
| `--marigold`   | `#d9902a` | `#eba948` | Accent, primary button, eyebrows   |
| `--marigold-ink` | `#8a5410` | `#f2bd6b` | Accent text on light surfaces    |
| `--shell`      | `#f7f1ee` | `#1c1219` | Page background                    |
| `--shell-sunk` | `#ece2dd` | `#25171f` | Product art tiles                  |
| `--card`       | `#fffaf7` | `#2a1b25` | Cards and contact rows             |
| `--ink`        | `#2a1827` | `#f3e6ec` | Body text                          |
| `--muted`      | `#6e5a68` | `#bba5b3` | Secondary text                     |
| `--line`       | `#e0d2cc` | `#3d2a37` | Borders and dividers               |

Dark mode follows the visitor's system setting.

## Type

- Display: **Young Serif** (400), for headings and the wordmark.
- Body: **Figtree** (400/500/600), for everything else.
- Scale: hero `clamp(2.6rem, 6vw, 4.6rem)`, section `clamp(1.9rem, 3.5vw, 2.6rem)`, card 1.3–1.5rem, body 1rem, labels 0.78rem uppercase with 0.14em tracking.

## Layout and motion

- Single column, max width 68rem, side gutter at least 16px.
- Plum hero with a soft marigold glow in one corner; arched portrait frame.
- Products as a four-up shelf, two-up on tablets, one-up on phones.
- One motion moment: hero text rises in on load. Disabled under `prefers-reduced-motion`.

## Content rules

- No invented content: no bios, stats, testimonials, reviews, phone numbers or counters.
- Missing content lives as `null` in `src/content.js`. Anything `null` is **not rendered** on the live site.
  In `npm run dev` a yellow TODO box shows in its place so gaps are easy to see.
- Never show LIVE / ACTIVE / ONLINE / "In stock".
- Products are "home-made natural products". No NAFDAC mention, no health or medical claims,
  no certification wording, no claims about how they are made until Ifeoma describes it.
- Contact rows render only when a real email or handle exists.

## Borrowed vs Mine

No `design-reference/` folder exists in this repo, so nothing was borrowed from one.

| Element                 | Borrowed from IJIDI | Mine (Ifeoma)                         |
|-------------------------|---------------------|---------------------------------------|
| Colours                 | None                | Plum, marigold, warm shell neutrals   |
| Fonts                   | None                | Young Serif, Figtree                  |
| Copy                    | None                | Written from approved facts only      |
| Images / logos          | None                | Simple product-shape illustrations    |
| Family link             | The "IJIDI family" reference and a gold-adjacent accent | — |
