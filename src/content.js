// Every fact on the site lives here. `null` means "not supplied yet":
// it is hidden on the live site and shown as a TODO box in `npm run dev`.
// Do not fill a value with anything Ifeoma has not confirmed.

export const person = {
  name: 'Ifeoma Peace David',
  foundation: 'IJIDI Foundation',
  role: 'Trustee',
  trusteeSince: '2023',
  bio: null, // TODO: array of paragraphs, in Ifeoma's own words
  portrait: { src: '/images/ifeoma-portrait.webp', alt: 'Ifeoma Peace David' },
}

export const productsIntro = 'Home-made natural products, coming to market soon.'

export const products = [
  {
    id: 'coco-powder',
    name: 'Coco Powder',
    category: null,
    description: 'A home-made cocoa drink powder.',
    image: null,
    shape: 'tin',
  },
  { id: 'yoghurt', name: 'Yoghurt', category: null, description: 'Home-made yoghurt, with a coconut option.', image: null, shape: 'cup' },
  { id: 'custard', name: 'Custard', category: null, description: null, image: null, shape: 'box' },
  { id: 'petroleum-jelly', name: 'Petroleum Jelly', category: null, description: null, image: null, shape: 'tub' },
]

export const contact = {
  email: 'ifeomaagada7@gmail.com',
  instagram: null, // TODO: handle without '@'
  tiktok: null, // TODO: handle without '@'
}
