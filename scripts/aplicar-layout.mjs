// Rellena la cabecera y el pie compartidos en cada public/**/index.html que
// tenga los marcadores. Se ejecuta antes de cada build (ver "prebuild").
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { nav, PIE, LIBRO } from './layout.mjs'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const publicDir = join(root, 'public')

function* paginas(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) yield* paginas(full)
    else if (name === 'index.html') yield full
  }
}

let n = 0
for (const file of paginas(publicDir)) {
  const path = '/' + relative(publicDir, dirname(file)).split(sep).join('/') + '/'
  let html = readFileSync(file, 'utf8')
  if (!html.includes('<!-- NAV:START -->')) continue
  html = html
    .replace(/<!-- NAV:START -->[\s\S]*?<!-- NAV:END -->/, `<!-- NAV:START -->${nav(path)}<!-- NAV:END -->`)
    .replace(/<!-- PIE:START -->[\s\S]*?<!-- PIE:END -->/, `<!-- PIE:START -->${html.includes('data-sin-libro') ? '' : LIBRO}${PIE}<!-- PIE:END -->`)
  writeFileSync(file, html)
  n++
}
console.log(`Cabecera y pie aplicados en ${n} página(s)`)
