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
    <div class="wrap"><span><b>${esc(person.name)}</b> · ifeoma.ijidigroup.com</span><span><a href="/privacy/">Privacy</a> · Part of the IJIDI family</span></div>
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

// Privacy policy, adapted from the IJIDI Foundation's (ijidi.org/privacy.html). Only facts from this
// repo: no forms, accounts, cookies, analytics or ads; fonts load from Google Fonts; hosted on Vercel;
// contact details appear only once real values are added in content.js.
function privacyPage() {
  const rows = contactRows
    .map(
      (r) => `<li><a href="${esc(r.href)}"${r.label === 'Email' ? '' : ' target="_blank" rel="noopener"'}>${r.label}: ${esc(r.value)}</a></li>`,
    )
    .join('')
  const reach = hasContact
    ? `<p>Questions about this policy or your data can be sent through any of these:</p><ul>${rows}</ul>`
    : DEV
      ? todo('privacy contact: appears once a contact email or handle is added in content.js.')
      : '<p>Contact details for privacy questions will appear here once they are published.</p>'
  return `
  <section class="page first">
    <div class="wrap">
      <div class="sec-head"><h1>Privacy</h1></div>
      <div class="policy">
        <p class="updated">Last updated: October 2026 · Applies to ifeoma.ijidigroup.com</p>
        <p>This is the personal website of ${esc(person.name)}. This policy explains what personal data the site handles and what rights you have over it.</p>

        <h2>1. What this site collects</h2>
        <p>Nothing directly. The site has no forms, no accounts, no cookies, no analytics and no advertising scripts.</p>

        <h2>2. Services the site relies on</h2>
        <ul>
          <li><b>Google Fonts.</b> The site's fonts load from Google, so your browser sends your IP address and browser details to Google when a page opens. Google's privacy policy applies.</li>
          <li><b>Hosting.</b> The site is hosted on Vercel, which processes standard technical data, such as your IP address and browser type, to deliver the pages to you.</li>
        </ul>

        <h2>3. If you get in touch</h2>
        <p>If you contact ${esc(person.name)} using a link on this site, your message goes through that service (for example your email provider, Instagram or TikTok), whose own privacy policy applies. What you send is used only to reply to you, and is never sold, rented or traded.</p>

        <h2>4. Legal basis</h2>
        <p>Any message you send is handled on the basis of your consent (by choosing to send it). This policy is intended to align with the Nigeria Data Protection Act 2023 and the Nigeria Data Protection Regulation (NDPR).</p>

        <h2>5. Retention</h2>
        <p>Messages are kept only as long as reasonably needed to reply to you. You may ask for them to be deleted at any time.</p>

        <h2>6. Your rights</h2>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          <li>Ask for access to the personal data held about you</li>
          <li>Ask for inaccurate data to be corrected</li>
          <li>Ask for your data to be deleted</li>
          <li>Withdraw consent for future processing</li>
        </ul>

        <h2>7. Children</h2>
        <p>This site is not directed at children and does not knowingly collect personal data from minors.</p>

        <h2>8. Changes</h2>
        <p>This policy will be updated before the site starts collecting anything new, with a new "Last updated" date.</p>

        <h2>9. Contact</h2>
        ${reach}
      </div>
    </div>
  </section>`
}

const page = document.body.dataset.page
// With no contact details yet, the contact page has nothing to show on the live site.
if (page === 'contact' && !hasContact && !DEV) location.replace('/')

const views = { home, about, products: productsPage, contact: contactPage, privacy: privacyPage }
document.getElementById('app').innerHTML = `
  ${DEV ? '<div class="notice"><div class="wrap"><b>Dev view.</b> Yellow boxes mark missing content. They do not appear on the live site.</div></div>' : ''}
  ${header(page)}
  <main>${(views[page] ?? home)()}</main>
  ${footer()}`
