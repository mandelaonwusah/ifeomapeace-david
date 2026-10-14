# Page plan

Stack: Vite (vanilla JS, multi-page build). One shared layout renders header, footer and page content
from `src/content.js`. Deployed on Vercel at `ifeoma.ijidigroup.com`.

| Route        | File                    | Content                                                                 |
|--------------|-------------------------|-------------------------------------------------------------------------|
| `/`          | `index.html`            | Hero: name, IJIDI Foundation trustee, home-made natural products. Product preview. |
| `/about/`    | `about/index.html`      | Role card: Trustee, IJIDI Foundation. Bio (hidden until supplied).      |
| `/products/` | `products/index.html`   | "Home-made natural products": Coco Powder, Yoghurt, Custard, Petroleum Jelly, Soap. |
| `/contact/`  | `contact/index.html`    | Phone (tel), WhatsApp (wa.me), Email (mailto), Instagram, TikTok. Each row only if a value exists.    |

## Still needed from Ifeoma (hidden until supplied)

- [x] Date she became a trustee of the IJIDI Foundation
- [ ] Bio, in her own words
- [x] Portrait photo
- [x] Coco Powder: cocoa (drink powder)
- [x] Yoghurt and Soap descriptions
- [ ] One plain description for Custard and Petroleum Jelly
- [ ] Product photos
- [x] Email address
- [x] Phone and WhatsApp
- [ ] Instagram handle
- [ ] TikTok handle

The Contact page and nav link stay hidden until at least one contact value exists.
