// Every fact on the site lives here. `null` means "not supplied yet":
// it is hidden on the live site and shown as a TODO box in `npm run dev`.
// Do not fill a value with anything Ifeoma has not confirmed.

export const person = {
  name: 'Ifeoma Peace David',
  foundation: 'IJIDI Foundation',
  role: 'Trustee',
  trusteeSince: null, // TODO: year she became a trustee
  bio: null, // TODO: array of paragraphs, in Ifeoma's own words
  portrait: null, // TODO: { src: '/images/ifeoma.jpg', alt: '...' }
}

export const productsIntro = 'Home-made natural products.'

export const products = [
  {
    id: 'coco-powder',
    name: 'Coco Powder',
    category: null, // TODO: confirm cocoa vs coconut before adding a label
    description: null, // TODO: confirm cocoa vs coconut, then one plain line
    image: null,
    shape: 'tin',
  },
  { id: 'yoghurt', name: 'Yoghurt', category: null, description: null, image: null, shape: 'cup' },
  { id: 'custard', name: 'Custard', category: null, description: null, image: null, shape: 'box' },
  { id: 'petroleum-jelly', name: 'Petroleum Jelly', category: null, description: null, image: null, shape: 'tub' },
]

export const contact = {
  email: null, // TODO: e.g. 'name@example.com'
  instagram: null, // TODO: handle without '@'
  tiktok: null, // TODO: handle without '@'
}
