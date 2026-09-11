// Genera public/ensayos/ a partir de los archivos .md en content/ensayos/.
// Se ejecuta automáticamente antes de cada build (ver "prebuild" en package.json).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const contentDir = join(root, 'content', 'ensayos')
const outDir = join(root, 'public', 'ensayos')
const sitemapPath = join(root, 'public', 'sitemap.xml')
const siteUrl = 'https://liberalismocomunal.org'

const PAGE_HEAD = ({ title, description, canonical }) => `<!doctype html><html lang="es-PE"><head><script async src="https://www.googletagmanager.com/gtag/js?id=G-Q20SJXYPDR"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-Q20SJXYPDR');</script><script src="/analytics.js" defer></script><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="index, follow"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="article"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><style>body{max-width:780px;margin:0 auto;padding:60px 24px;font:18px/1.7 Arial;color:#132d2d;background:#f4f1e9}h1{font:700 44px/1.15 Georgia}h2{font:700 26px Georgia;color:#e7653e;margin-top:2em}a{color:#e7653e}nav{font-weight:bold;margin-bottom:50px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}p{color:#4e625d}blockquote{margin:1.6em 0;padding:0 0 0 20px;border-left:3px solid #e7653e;font:italic 22px/1.5 Georgia;color:#173536}.meta{font:14px monospace;text-transform:uppercase;color:#e7653e;letter-spacing:.03em;margin-bottom:8px}.essay-list{list-style:none;padding:0}.essay-list li{padding:28px 0;border-bottom:1px solid #dcd6c4}.essay-list h3{font:700 26px Georgia;margin:6px 0}article p{margin:1.1em 0}article ul{margin:1.1em 0;padding-left:22px}article li{margin:.5em 0;color:#4e625d}</style></head><body>`

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!m) throw new Error('Falta el bloque de frontmatter (---) al inicio del archivo')
  const [, fmBlock, body] = m
  const data = {}
  for (const line of fmBlock.split(/\r?\n/)) {
    if (!line.trim()) continue
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    value = value.replace(/^["'](.*)["']$/, '$1')
    data[key] = value
  }
  return { data, body: body.trim() }
}

// Markdown mínimo: párrafos, ## / ###, **negrita**, *cursiva*, [texto](url), > cita
function mdToHtml(md) {
  const blocks = md.split(/\r?\n\r?\n+/)
  return blocks.map(block => {
    const b = block.trim()
    if (!b) return ''
    if (b.startsWith('### ')) return `<h3>${inline(b.slice(4))}</h3>`
    if (b.startsWith('## ')) return `<h2>${inline(b.slice(3))}</h2>`
    if (b.startsWith('> ')) return `<blockquote>${inline(b.replace(/^>\s?/gm, ''))}</blockquote>`
    if (b.split(/\r?\n/).every(l => l.trim().startsWith('- '))) {
      const items = b.split(/\r?\n/).map(l => `<li>${inline(l.trim().slice(2))}</li>`).join('')
      return `<ul>${items}</ul>`
    }
    return `<p>${inline(b)}</p>`
  }).join('\n')
}

function inline(text) {
  return esc(text)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/\n/g, ' ')
}

function fmtFechaLarga(fecha) {
  const [y, m, d] = fecha.split('-').map(Number)
  const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  return `${d} de ${meses[m - 1]} de ${y}`
}

if (!existsSync(contentDir)) {
  console.log('No hay content/ensayos/, se omite la generación.')
  process.exit(0)
}

if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

const files = readdirSync(contentDir).filter(f => f.endsWith('.md'))
const ensayos = files.map(file => {
  const slug = file.replace(/\.md$/, '')
  const raw = readFileSync(join(contentDir, file), 'utf8')
  const { data, body } = parseFrontmatter(raw)
  for (const req of ['title', 'fecha', 'autor', 'resumen']) {
    if (!data[req]) throw new Error(`${file}: falta el campo "${req}" en el frontmatter`)
  }
  return { slug, ...data, html: mdToHtml(body) }
}).sort((a, b) => (a.fecha + (a.hora || '')) < (b.fecha + (b.hora || '')) ? 1 : -1)

for (const e of ensayos) {
  const dir = join(outDir, e.slug)
  mkdirSync(dir, { recursive: true })
  const canonical = `${siteUrl}/ensayos/${e.slug}/`
  const page = `${PAGE_HEAD({ title: `${e.title} | Liberalismo Comunal`, description: e.resumen, canonical })}<nav><a href="/">Liberalismo Comunal</a><a href="/ensayos/">← Todos los ensayos</a></nav><article><div class="meta">${fmtFechaLarga(e.fecha)}${e.hora ? ` · ${e.hora}` : ''} · Publicado por ${esc(e.autor)}</div><h1>${esc(e.title)}</h1>${e.html}</article></body></html>`
  writeFileSync(join(dir, 'index.html'), page)
}

const listItems = ensayos.map(e => `<li><div class="meta">${fmtFechaLarga(e.fecha)}${e.hora ? ` · ${e.hora}` : ''} · ${esc(e.autor)}</div><h3><a href="/ensayos/${e.slug}/">${esc(e.title)}</a></h3><p>${esc(e.resumen)}</p></li>`).join('\n')
const indexPage = `${PAGE_HEAD({ title: 'Ensayos | Liberalismo Comunal', description: 'Ensayos breves sobre la coyuntura peruana desde la doctrina de Liberalismo Comunal, escritos por Pedro Jesús Guzmán Ramos.', canonical: `${siteUrl}/ensayos/` })}<nav><a href="/">Liberalismo Comunal</a></nav><span class="meta">Ensayos</span><h1>Coyuntura, leída desde abajo</h1><p>Notas cortas sobre la actualidad peruana, escritas al calor del día, desde los principios de Liberalismo Comunal.</p><ul class="essay-list">${listItems}</ul></body></html>`
writeFileSync(join(outDir, 'index.html'), indexPage)

// --- sitemap.xml: reemplaza el bloque gestionado entre marcadores ---
if (existsSync(sitemapPath)) {
  let sitemap = readFileSync(sitemapPath, 'utf8')
  const today = new Date().toISOString().slice(0, 10)
  const managed = ensayos.map(e => `  <url><loc>${siteUrl}/ensayos/${e.slug}/</loc><lastmod>${e.fecha}</lastmod><changefreq>never</changefreq><priority>0.6</priority></url>`).join('\n')
  const block = `<!-- ENSAYOS:START -->\n  <url><loc>${siteUrl}/ensayos/</loc><lastmod>${today}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>\n${managed}\n<!-- ENSAYOS:END -->`
  if (sitemap.includes('<!-- ENSAYOS:START -->')) {
    sitemap = sitemap.replace(/<!-- ENSAYOS:START -->[\s\S]*?<!-- ENSAYOS:END -->/, block)
  } else {
    sitemap = sitemap.replace('</urlset>', `  ${block}\n</urlset>`)
  }
  writeFileSync(sitemapPath, sitemap)
}

console.log(`Generados ${ensayos.length} ensayo(s) en public/ensayos/`)
