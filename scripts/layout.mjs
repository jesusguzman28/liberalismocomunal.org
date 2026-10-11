// Cabecera, pie y recuadro del libro compartidos por todas las páginas estáticas.
// Las páginas marcan dónde van con <!-- NAV:START --> / <!-- NAV:END --> y
// <!-- PIE:START --> / <!-- PIE:END -->; aplicar-layout.mjs rellena esos bloques.

const MENU = [
  ['/liberalismo-comunal/', 'Doctrina'],
  ['/manifiesto/', 'Manifiesto'],
  ['/genealogia-liberalismo-comunal/', 'Genealogía'],
  ['/ensayos/', 'Ensayos'],
  ['/libertad-en-los-andes/', 'Libertad en los Andes'],
  ['/pedro-jesus-guzman-ramos/', 'Autor'],
]

export function nav(path = '') {
  const items = MENU.map(([href, label]) => {
    const current = path === href || (href !== '/' && path.startsWith(href) && href === '/ensayos/')
    return `<li><a href="${href}"${current ? ' aria-current="page"' : ''}>${label}</a></li>`
  }).join('')
  return `<a class="salto" href="#contenido">Saltar al contenido</a><nav class="site-nav" aria-label="Principal"><a class="marca" href="/">Liberalismo <span>Comunal</span></a><ul>${items}</ul></nav>`
}

export const LIBRO = `<aside style="margin-top:56px;padding:26px 24px;background:#132d2d;color:#f4f1e9;display:flex;gap:22px;align-items:center;flex-wrap:wrap"><img src="/tapa-libertad.webp" alt="Portada de Libertad en los Andes" width="90" height="128" loading="lazy" style="box-shadow:6px 6px 0 rgba(0,0,0,.25)"><div style="flex:1;min-width:220px"><span style="font:12px monospace;text-transform:uppercase;color:#e4a83c">Ensayo · Pedro Jesús Guzmán Ramos · 2026</span><p style="font:700 24px/1.2 Georgia;color:#f4f1e9;margin:6px 0">Libertad en los Andes</p><p style="color:#b8c5bb;margin:0 0 12px;font-size:16px">"La libertad no tiene que llegar a los Andes. Solo tiene que bajar de ellos otra vez."</p><a href="/libertad-en-los-andes/" style="color:#e4a83c;font-weight:bold">Índice y primeras páginas →</a> · <a href="https://www.amazon.com/Libertad-en-los-Andes-Spanish-ebook/dp/B0HCXB894L/" style="color:#f4f1e9">Comprar en Amazon ↗</a></div></aside>`

export const PIE = `<footer class="site-footer"><div><b>Doctrina</b><a href="/liberalismo-comunal/">¿Qué es el liberalismo comunal?</a><a href="/manifiesto/">Manifiesto</a><a href="/genealogia-liberalismo-comunal/">Genealogía</a><a href="/liberalismo-peruano/">Liberalismo peruano</a></div><div><b>Temas</b><a href="/descentralizacion-peru/">Descentralización</a><a href="/libertarismo-peru/">Libertarismo en el Perú</a><a href="/liberalismo-economico-peru/">Liberalismo económico</a><a href="/ensayos/">Ensayos</a></div><div><b>Proyecto</b><a href="/libertad-en-los-andes/">Libertad en los Andes</a><a href="/pedro-jesus-guzman-ramos/">Pedro Jesús Guzmán Ramos</a><a href="/prensa/">Prensa</a><a href="/contacto/">Contacto</a></div><p class="firma">© 2026 Liberalismo Comunal · <a href="/privacidad/">Privacidad</a> · <a href="/aviso-legal/">Aviso legal</a> · <a href="/feed.xml">RSS</a> · <a href="mailto:hola@liberalismocomunal.org">hola@liberalismocomunal.org</a></p></footer>`

export const HEAD_EXTRA = '<link rel="stylesheet" href="/site.css">'
