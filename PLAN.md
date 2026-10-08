# Page plan

Stack: Vite (vanilla JS, multi-page build). One shared layout renders header, footer and page content
from `src/content.js`. Deployed on Vercel at `ifeoma.ijidigroup.com`.

| Route        | File                    | Content                                                                 |
|--------------|-------------------------|-------------------------------------------------------------------------|
| `/`          | `index.html`            | Hero: name, IJIDI Foundation trustee, home-made natural products. Product preview. |
| `/about/`    | `about/index.html`      | Role card: Trustee, IJIDI Foundation. Bio (hidden until supplied).      |
| `/products/` | `products/index.html`   | "Home-made natural products": Coco Powder, Yoghurt, Custard, Petroleum Jelly. |
| `/contact/`  | `contact/index.html`    | Email (mailto), Instagram, TikTok. Each row only if a value exists.    |

## Still needed from Ifeoma (hidden until supplied)

- [ ] Date she became a trustee of the IJIDI Foundation
- [ ] Bio, in her own words
- [ ] Portrait photo
- [ ] Coco Powder: cocoa or coconut? Then its category label and description
- [ ] One plain description for Yoghurt, Custard and Petroleum Jelly
- [ ] Product photos
- [ ] Email address
- [ ] Instagram handle
- [ ] TikTok handle

The Contact page and nav link stay hidden until at least one contact value exists.
