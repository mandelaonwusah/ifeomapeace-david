import './style.css'
import { person, products, productsIntro, contact } from './content.js'

const DEV = import.meta.env.DEV

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

// Missing content renders nothing on the live site; in dev it shows where the gap is.
const todo = (text) => (DEV ? `<div class="todo"><b>TODO:</b> ${esc(text)}</div>` : '')

const contactRows = [
  contact.email && { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  contact.instagram && {
    label: 'Instagram',
    value: `@${contact.instagram}`,
    href: `https://www.instagram.com/${encodeURIComponent(contact.instagram)}/`,
  },
  contact.tiktok && {
    label: 'TikTok',
    value: `@${contact.tiktok}`,
    href: `https://www.tiktok.com/@${encodeURIComponent(contact.tiktok)}`,
  },
].filter(Boolean)
const hasContact = contactRows.length > 0

const shapes = {
  tin: '<rect x="22" y="30" width="56" height="58" rx="8" fill="var(--plum-soft)"/><rect x="18" y="20" width="64" height="14" rx="4" fill="var(--marigold)"/><circle cx="50" cy="60" r="11" fill="var(--shell)"/>',
  cup: '<path d="M28 28h44l-6 60H34z" fill="var(--plum-soft)"/><rect x="24" y="20" width="52" height="10" rx="3" fill="var(--marigold)"/><path d="M36 50h28" stroke="var(--shell)" stroke-width="4" stroke-linecap="round"/>',
  box: '<rect x="26" y="26" width="48" height="62" rx="4" fill="var(--marigold)"/><rect x="26" y="40" width="48" height="22" fill="var(--plum-soft)"/><rect x="34" y="16" width="32" height="12" rx="3" fill="var(--plum)"/>',
  tub: '<ellipse cx="50" cy="74" rx="32" ry="12" fill="var(--plum-soft)"/><rect x="18" y="44" width="64" height="30" fill="var(--plum-soft)"/><ellipse cx="50" cy="44" rx="32" ry="12" fill="var(--marigold)"/>',
}

const nav = [
  { key: 'about', href: '/about/', label: 'About' },
  { key: 'products', href: '/products/', label: 'Products' },
  hasContact && { key: 'contact', href: '/contact/', label: 'Contact' },
].filter(Boolean)


function header(page) {
  const [first, middle, last] = person.name.split(' ')
  return `
  <header class="nav">
    <div class="wrap">
      <a class="mark" href="/">${esc(first)} <span>${esc(middle)}</span> ${esc(last)}</a>
      <nav aria-label="Main"><ul>
        ${nav.map((n) => `<li><a href="${n.href}"${n.key === page ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('')}
      </ul></nav>
    </div>
  </header>`
}

function footer() {
  return `
  <footer>
    <div class="wrap"><span><b>${esc(person.name)}</b> · ifeoma.ijidigroup.com</span><span>Part of the IJIDI family</span></div>
  </footer>`
}

function productCard(p) {
  const desc = p.description ? `<p>${esc(p.description)}</p>` : todo(`${p.name}: ${p.id === 'coco-powder' ? 'cocoa or coconut? Then one plain line.' : 'one plain line on what it is.'}`)
  const art = p.image
    ? `<img src="${esc(p.image.src)}" alt="${esc(p.image.alt)}" loading="lazy" />`
    : `<svg viewBox="0 0 100 100" aria-hidden="true">${shapes[p.shape]}</svg>`
  return `
    <article class="product">
      <div class="art">${art}</div>
      <div class="body">
        ${p.category ? `<span class="tag">${esc(p.category)}</span>` : ''}
        <h3>${esc(p.name)}</h3>
        ${desc}
      </div>
    </article>`
}

function shelf() {
  return `<div class="shelf">${products.map(productCard).join('')}</div>
    ${products.some((p) => !p.image) ? todo('real product photos.') : ''}`
}

function home() {
  const [first, middle, last] = person.name.split(' ')
  const portrait = person.portrait
    ? `<img class="portrait" src="${esc(person.portrait.src)}" alt="${esc(person.portrait.alt)}" />`
    : DEV
      ? `<div class="portrait placeholder">TODO: portrait photo of Ifeoma</div>`
      : ''
  return `
  <section class="hero${portrait ? '' : ' solo'}">
    <div class="sun" aria-hidden="true"></div>
    <div class="wrap">
      <div>
        <div class="eyebrow">Part of the IJIDI family</div>
        <h1>${esc(first)} <em>${esc(middle)}</em> ${esc(last)}</h1>
        <p>${esc(person.role)} of the ${esc(person.foundation)} and maker of home-made natural products: ${products.map((p) => esc(p.name)).join(', ').replace(/, ([^,]*)$/, ' and $1')}.</p>
        <div class="btns">
          <a class="btn primary" href="/products/">See the products</a>
          ${hasContact ? '<a class="btn ghost" href="/contact/">Get in touch</a>' : ''}
        </div>
      </div>
      ${portrait}
    </div>
  </section>
  <section class="page">
    <div class="wrap">
      <div class="sec-head"><h2>Home-made natural products</h2><a class="more" href="/products/">All products</a></div>
      ${shelf()}
    </div>
  </section>`
}

function about() {
  const since = person.trusteeSince ? `<p>Trustee since ${esc(person.trusteeSince)}.</p>` : todo('trustee since ___')
  const bio = person.bio
    ? `<div class="bio">${person.bio.map((p) => `<p>${esc(p)}</p>`).join('')}</div>`
    : todo("bio from Ifeoma, in her own words (2–3 short paragraphs). We won't write one for her.")
  return `
  <section class="page first">
    <div class="wrap">
      <div class="sec-head"><h1>About Ifeoma</h1></div>
      <div class="about${person.bio || DEV ? '' : ' solo'}">
        <div class="role">
          <div class="eyebrow">Role</div>
          <h2>${esc(person.role)}</h2>
          <p>${esc(person.foundation)}</p>
          ${since}
        </div>
        ${person.bio || DEV ? `<div>${bio}</div>` : ''}
      </div>
    </div>
  </section>`
}

function productsPage() {
  return `
  <section class="page first">
    <div class="wrap">
      <div class="sec-head"><h1>Products</h1></div>
      <p class="intro">${esc(productsIntro)}</p>
      ${shelf()}
    </div>
  </section>`
}

function contactPage() {
  const rows = contactRows
    .map(
      (r) => `<a class="link" href="${esc(r.href)}"${r.label === 'Email' ? '' : ' target="_blank" rel="noopener"'}>
        <span>${r.label}</span><span class="val">${esc(r.value)}</span></a>`,
    )
    .join('')
  const missing = ['email', 'instagram', 'tiktok'].filter((k) => !contact[k])
  return `
  <section class="page first">
    <div class="wrap">
      <div class="sec-head"><h1>Contact</h1></div>
      <div class="contact">
        <p class="lead">To get in touch with Ifeoma, use any of the links here.</p>
        <div class="links">${rows}${missing.length ? todo(`contact ${missing.join(', ')}. Each row appears only once a real value is added.`) : ''}</div>
      </div>
    </div>
  </section>`
}

const page = document.body.dataset.page
// With no contact details yet, the contact page has nothing to show on the live site.
if (page === 'contact' && !hasContact && !DEV) location.replace('/')

const views = { home, about, products: productsPage, contact: contactPage }
document.getElementById('app').innerHTML = `
  ${DEV ? '<div class="notice"><div class="wrap"><b>Dev view.</b> Yellow boxes mark missing content. They do not appear on the live site.</div></div>' : ''}
  ${header(page)}
  <main>${(views[page] ?? home)()}</main>
  ${footer()}`
