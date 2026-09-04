import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Menu, X, Mountain, Users, Sprout, Scale, Radio, ChevronDown } from 'lucide-react'
import './styles.css'

const principles = [
  { icon: Users, number: '01', title: 'La reciprocidad es libertad', text: 'El ayni, la minka, la feria y la comunidad son cooperación voluntaria entre iguales. No son obediencia ni socialismo de Estado.' },
  { icon: Mountain, number: '02', title: 'Abajo, no en medio', text: 'No buscamos un lugar entre izquierdas y derechas. La pregunta decisiva es otra: ¿quién decide, la gente o el poder concentrado?' },
  { icon: Sprout, number: '03', title: 'El territorio debe decidir', text: 'Quien cuida la tierra, el agua y la montaña debe tener voz real sobre su uso, su propiedad y su futuro.' },
  { icon: Scale, number: '04', title: 'Orden sin amo', text: 'La libertad no significa ausencia de reglas. Significa reglas cercanas, legítimas y vigiladas por quienes viven sus consecuencias.' },
]

const chapters = [
  ['01', 'Libertad no es egoísmo', 'El ayni ya lo sabía'],
  ['02', 'Orden sin amo', 'Por qué la feria funciona y el trámite no'],
  ['03', 'El verdadero patrón', 'El centralismo decide, los Andes pagan'],
  ['04', 'Tierra y capital', 'La tierra muerta vuelve a vivir'],
  ['05', 'Autogobierno local', 'Decidir cerca, decidir bien'],
  ['06', 'El celular rompe el cerco', 'Tecnología para descentralizar'],
]

const agenda = [
  ['01', 'Libertad', 'La persona y la comunidad deciden', 'Libertad personal, asociación voluntaria y autogobierno local dentro de una democracia constitucional.'],
  ['02', 'Territorio', 'Tierra, agua y recursos con voz local', 'Quien cuida y vive en un territorio debe participar realmente en sus decisiones y beneficios.'],
  ['03', 'Economía', 'Producir sin pedir permiso infinito', 'Formalización simple, propiedad segura, crédito, compras públicas locales y emprendimiento sin persecución.'],
  ['04', 'Estado', 'Un Estado que sirve y rinde cuentas', 'Seguridad, justicia, salud y educación de calidad, con presupuesto y resultados transparentes.'],
  ['05', 'Educación', 'Pensar, crear y trabajar en el territorio', 'Escuelas de calidad, interculturales y conectadas con la vocación productiva de cada región.'],
  ['06', 'Salud', 'Atención que llegue a cada comunidad', 'Redes de atención primaria, personal estable y tecnología al servicio de los pacientes.'],
  ['07', 'Seguridad', 'Orden cercano, derechos protegidos', 'Policía profesional coordinada con juntas vecinales y rondas, dentro de la Constitución.'],
  ['08', 'Mujeres y jóvenes', 'La comunidad también tiene voz propia', 'Participación real y liderazgo para quienes sostienen el presente y construirán el futuro.'],
  ['09', 'Cultura', 'Modernos sin dejar de ser andinos', 'Quechua, fiestas, memorias y formas propias de organización como parte del futuro peruano.'],
  ['10', 'Transparencia', 'Cada sol y cada decisión a la vista', 'Presupuesto, contrataciones, obras, reuniones y resultados publicados en formatos comprensibles.'],
]

const library = [
  ['Liberalismo Peruano', 'Historia, ideas y futuro', '/liberalismo-peruano/'],
  ['Liberalismo Comunal', 'La doctrina peruana de libertad desde abajo', '/liberalismo-comunal/'],
  ['Libertarismo en el Perú', 'Libertad individual y límites al poder', '/libertarismo-peru/'],
  ['Liberalismo económico', 'Mercado, propiedad y emprendimiento', '/liberalismo-economico-peru/'],
  ['Descentralización', 'Autonomía, presupuesto y territorio', '/descentralizacion-peru/'],
  ['Libertad en los Andes', 'El libro que abre el camino', '#libro'],
]

const topicPages = {
  '/liberalismo-peruano/': ['Liberalismo peruano', 'Historia, ideas y futuro', 'El liberalismo peruano reúne libertad individual, Estado de derecho, propiedad, economía abierta y límites al poder. Liberalismo Comunal propone actualizar esa tradición desde el territorio, la comunidad y el autogobierno local.'],
  '/liberalismo-comunal/': ['Liberalismo Comunal', 'Libertad desde abajo', 'Una propuesta peruana que integra libertad individual, propiedad, mercado, comunidad, reciprocidad andina y autogobierno local.'],
  '/libertarismo-peru/': ['Libertarismo en el Perú', 'Libertad y límites al poder', 'El libertarismo plantea una pregunta esencial: ¿hasta dónde puede llegar el poder sobre la vida de una persona? En el Perú, ese debate incluye libertad económica, propiedad, responsabilidad y democracia constitucional.'],
  '/descentralizacion-peru/': ['Descentralización del Perú', 'El poder debe volver al territorio', 'Descentralizar el Perú significa que las personas y sus gobiernos locales puedan decidir sobre problemas concretos, con recursos, competencias y responsabilidad.'],
  '/liberalismo-economico-peru/': ['Liberalismo económico en el Perú', 'Mercado, propiedad y emprendimiento', 'El liberalismo económico defiende la libertad de producir, intercambiar, contratar y emprender, con propiedad segura, competencia, contratos y justicia.'],
}

function AuthorRoute() {
  document.title = 'Pedro Jesús Guzmán Ramos | Ingeniero, escritor e ideólogo ayacuchano'
  return <div className="route-page author-landing-route"><header className="author-route-nav"><a className="wordmark" href="/">Liberalismo <span>Comunal</span></a><div><a href="#perfil">Perfil</a><a href="#libro">El libro</a><a href="#investigacion">Investigación</a><a href="https://x.com/pjguzmanr" target="_blank" rel="noreferrer">X ↗</a><a href="https://www.linkedin.com/in/jesusguzman01/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></header><section className="author-route-hero"><div><p className="eyebrow">Ingeniero · escritor · ideólogo</p><h1>Pedro Jesús<br /><i>Guzmán Ramos.</i></h1><p className="route-lead">Escritor ayacuchano e ideólogo de Liberalismo Comunal.</p><p>Ingeniero de Tecnologías de la Información y Sistemas por la Universidad ESAN, con tres años de experiencia docente.</p><div className="route-actions"><a className="route-button" href="#perfil">Conocer su trabajo ↓</a><a className="route-link" href="https://x.com/pjguzmanr" target="_blank" rel="noreferrer">Seguir en X ↗</a></div></div><div className="author-route-photo"><img src="/autor-pedro.jpg" alt="Pedro Jesús Guzmán Ramos" /></div></section><section id="perfil" className="author-route-section profile-route"><div><p className="eyebrow">Perfil</p><h2>Una mirada ayacuchana<br /><i>sobre el Perú.</i></h2></div><div><p>Pedro Jesús Guzmán Ramos es ingeniero de Tecnologías de la Información y Sistemas por la Universidad ESAN, escritor ayacuchano e ideólogo de Liberalismo Comunal.</p><p>Cuenta con tres años de experiencia docente y desarrolla su trabajo en la formación tecnológica, la investigación aplicada y la reflexión sobre el Perú, sus regiones y sus formas de organización.</p></div></section><section id="investigacion" className="author-route-section research-route"><p className="eyebrow">Formación e investigación</p><h2>Ingeniería, docencia<br /><i>y tecnología educativa.</i></h2><div className="research-grid"><article><b>Ingeniero de Tecnologías de la Información y Sistemas</b><p>Título profesional registrado por la Universidad ESAN en 2024.</p><a className="source-link" href="https://transparenciauniversitaria.esan.edu.pe/wp-content/uploads/2025/03/Acta-Ses.Ord_.01_07.02.2024_extracto.pdf" target="_blank" rel="noreferrer">Abrir fuente ESAN ↗</a></article><article><b>Docencia y coordinación académica</b><p>Tres años de experiencia docente. Coordinador del área académica de Desarrollo de Sistemas de Información en el IESTP Páucar del Sarasara.</p><a className="source-link" href="https://iestpsarasara.edu.pe/autoridades/" target="_blank" rel="noreferrer">Abrir fuente institucional ↗</a></article><article><b>Investigación y robótica educativa</b><p>Participó en trabajos sobre SumajGAN y TiniScript, una propuesta de lenguaje para robótica educativa.</p><a className="source-link" href="https://arxiv.org/abs/2411.06303" target="_blank" rel="noreferrer">Leer investigación TiniScript ↗</a></article></div></section><section id="libro" className="author-route-section book-route"><div className="book-route-cover"><img src="/tapa-libertad.png" alt="Portada de Libertad en los Andes" /></div><div><p className="eyebrow">El libro</p><h2>Libertad<br /><i>en los Andes.</i></h2><p>Un libro sobre libertad, reciprocidad, comunidad y descentralización en el Perú.</p><p className="book-route-facts">ISBN 978-612-03-2813-2 · 216 páginas · 2026</p><a className="route-button" href="https://www.amazon.com/Libertad-en-los-Andes-Spanish-ebook/dp/B0HCXB894L/" target="_blank" rel="noreferrer">Comprar en Amazon ↗</a></div></section><section className="author-route-project"><p className="eyebrow">El proyecto</p><h2>Liberalismo <i>Comunal.</i></h2><p>Una plataforma para desarrollar estas ideas en el debate público: libertad individual, propiedad, mercado, comunidad, descentralización y autogobierno local.</p><div className="route-socials"><a href="https://x.com/pjguzmanr" target="_blank" rel="noreferrer">X / @pjguzmanr ↗</a><a href="https://www.linkedin.com/in/jesusguzman01/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/jesusguzman28" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/">Ir a la plataforma →</a></div></section><footer className="author-route-footer"><span>© 2026 Pedro Jesús Guzmán Ramos</span><a href="mailto:hola@liberalismocomunal.org">hola@liberalismocomunal.org</a></footer></div>
}

function TopicRoute({data}) {
  const isComunal = data[0] === 'Liberalismo Comunal'
  return <div className="route-page topic-page"><header className="topic-nav"><a className="wordmark" href="/">Liberalismo <span>Comunal</span></a><a className="route-back" href="/">← Volver al inicio</a></header><section className="topic-hero"><div><p className="eyebrow">Biblioteca · Liberalismo Peruano</p><h1>{data[0]}</h1><h2>{data[1]}</h2><p className="route-lead">{data[2]}</p></div><div className="topic-image"><img src={isComunal ? '/tapa-libertad.png' : '/dibujo-andes.png'} alt="Libertad en los Andes" /></div></section><section className="topic-content"><article><h3>La idea central</h3><p>La libertad debe estudiarse desde la realidad peruana. No como una fórmula importada, sino a partir de la persona, la propiedad, la comunidad, el trabajo y el territorio.</p><h3>Una propuesta desde abajo</h3><p>El Liberalismo Comunal reúne libertad individual, propiedad, mercado, reciprocidad, comunidad y descentralización. Su punto de partida es que el poder debe estar cerca de quienes viven sus consecuencias.</p><h3>Lecturas relacionadas</h3><div className="topic-links"><a href="/liberalismo-peruano/">Liberalismo Peruano <span>→</span></a><a href="/libertarismo-peru/">Libertarismo en el Perú <span>→</span></a><a href="/descentralizacion-peru/">Descentralización <span>→</span></a><a href="/pedro-jesus-guzman-ramos/">Pedro Jesús Guzmán Ramos <span>→</span></a></div></article><aside><p className="eyebrow">El libro</p><b>Libertad en los Andes</b><p>Pedro Jesús Guzmán Ramos</p><a className="route-button" href="https://www.amazon.com/Libertad-en-los-Andes-Spanish-ebook/dp/B0HCXB894L/" target="_blank" rel="noreferrer">Ver en Amazon ↗</a></aside></section></div>
}

function Router() {
  const path = window.location.pathname.endsWith('/') ? window.location.pathname : `${window.location.pathname}/`
  if (path === '/pedro-jesus-guzman-ramos/') return <AuthorRoute />
  if (topicPages[path]) return <TopicRoute data={topicPages[path]} />
  return <App />
}

function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const close = () => setOpen(false)

  return <>
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#inicio" onClick={close}><span className="brand-mark">↗</span><span>liberalismo<br/><em>comunal</em></span></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          <a href="#doctrina" onClick={close}>Liberalismo peruano</a>
          <a href="#biblioteca" onClick={close}>Biblioteca</a>
          <a href="#libro" onClick={close}>El libro</a>
          <a href="#agenda" onClick={close}>Agenda</a>
          <a href="#participa" onClick={close}>Participa</a>
          <a className="nav-cta" href="#manifiesto" onClick={close}>Nuestra posición <ArrowUpRight size={16}/></a>
        </div>
      </nav>
    </header>

    <main id="inicio">
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Libertad en los Andes</p>
          <h1>La libertad<br /><i>ya era nuestra.</i></h1>
          <p className="hero-lead">No fue una idea importada al Perú. Ya estaba en el ayni, la minka, la feria, la ronda y la comunidad andina.</p>
          <p className="hero-signature">Pedro Jesús Guzmán Ramos <span>—</span> autor de Libertad en los Andes</p>
          <div className="hero-actions"><a className="button button-dark" href="#manifiesto">Conocer la doctrina <ArrowUpRight size={17}/></a><a className="text-link" href="#libro">Explorar el libro <span>↓</span></a></div>
        </div>
        <div className="hero-art" aria-label="Portada de Libertad en los Andes">
          <img src="/tapa-libertad.png" alt="Personas construyendo un muro en los Andes" />
          <div className="hero-art-caption"><b>LIBERTAD EN LOS ANDES</b><span>Pedro Jesús Guzmán Ramos</span></div>
          <span className="art-note">AYNI<br /><small>hoy por ti,<br />mañana por mí</small></span>
        </div>
      </section>

      <section id="manifiesto" className="manifesto section-dark"><div className="container manifesto-grid"><p className="eyebrow warm"><span></span> La idea central</p><div><blockquote>“No venimos a importar la libertad. Venimos a reconocerla donde ya estaba.”</blockquote><p className="manifesto-text">El libro la busca en el ayni, la minka, la feria, las rondas campesinas, la propiedad y las formas locales de organización. Liberalismo Comunal desarrolla esa tesis como una propuesta peruana de libertad, comunidad y descentralización.</p><a className="light-link" href="#autor">Sobre el autor <ArrowUpRight size={16}/></a></div></div></section>

      <section id="doctrina" className="doctrine section-light"><div className="container"><div className="section-intro"><p className="eyebrow"><span></span> La doctrina</p><h2>Libertad y<br /><i>comunidad.</i></h2><p>El liberalismo peruano reúne libertad individual, propiedad, mercado y Estado de derecho. El Liberalismo Comunal agrega una raíz propia: comunidad voluntaria, reciprocidad andina, descentralización y autogobierno local.</p></div><div className="axis"><div className="axis-top"><b>ARRIBA</b><span>Redistribución forzada · centralismo · decisiones lejanas</span></div><div className="axis-line"><div className="axis-dot"></div><div className="axis-arrow">↓</div></div><div className="axis-bottom"><b>ABAJO</b><span>Libertad · propiedad · comunidad · autogobierno</span></div></div></div></section>

      <section id="principios" className="principles section-paper"><div className="container"><div className="section-heading"><p className="eyebrow"><span></span> Principios</p><h2>Qué defendemos<br /><i>en el Perú.</i></h2></div><div className="principle-grid">{principles.map(({icon: Icon, number, title, text}) => <article className="principle" key={number}><div className="principle-top"><span>{number}</span><Icon size={22} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="autor" className="author-section"><div className="container author-grid"><div className="author-portrait"><img src="/autor-pedro.jpg" alt="Pedro Jesús Guzmán Ramos" /></div><div><p className="eyebrow warm"><span></span> Sobre el autor</p><h2>Pedro Jesús<br /><i>Guzmán Ramos.</i></h2><p>Ingeniero de Tecnologías de la Información y Sistemas por la Universidad ESAN, con tres años de experiencia docente; escritor ayacuchano e ideólogo de Liberalismo Comunal.</p><p>Es autor de <em>Libertad en los Andes</em>, libro que desarrolla una propuesta de libertad, reciprocidad, comunidad y descentralización para el Perú.</p><div className="social-links"><a href="https://x.com/pjguzmanr" target="_blank" rel="noreferrer">X / @pjguzmanr ↗</a><a href="https://www.linkedin.com/in/jesusguzman01/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/jesusguzman28" target="_blank" rel="noreferrer">GitHub ↗</a></div><a className="light-link" href="/pedro-jesus-guzman-ramos/">Ver página del autor <ArrowUpRight size={16}/></a></div></div></section>

      <section id="agenda" className="agenda section-light"><div className="container"><div className="agenda-intro"><div><p className="eyebrow"><span></span> Agenda política</p><h2>Propuestas para<br /><i>el Perú.</i></h2></div><p>No basta con criticar al centralismo. Una doctrina política debe decir qué hará con la tierra, el agua, la seguridad, la escuela y el presupuesto. Estas son las primeras prioridades del proyecto.</p></div><div className="agenda-grid">{agenda.map(([number, label, title, text]) => <article className="agenda-card" key={number}><span className="agenda-label">{number} — {label}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="agenda-footer"><p>Las propuestas se revisarán con ciudadanos, comunidades, trabajadores, productores, jóvenes y autoridades locales.</p><a className="button button-dark" href="mailto:hola@liberalismocomunal.org?subject=Quiero%20participar">Participar <ArrowUpRight size={17}/></a></div></div></section>

      <section id="biblioteca" className="library section-paper"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span></span> Textos y documentos</p><h2>Biblioteca<br /><i>del proyecto.</i></h2></div><p className="library-intro">Historia, conceptos y propuestas para entender el liberalismo peruano, el liberalismo comunal y los problemas del país.</p></div><div className="library-grid">{library.map(([title, description, href], index) => <a className="library-card" href={href} key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight size={18}/></a>)}</div></div></section>

      <section id="libro" className="book-section"><div className="container book-grid"><div className="book-cover"><img src="/tapa-libertad.png" alt="Portada del libro Libertad en los Andes, de Pedro Guzmán Ramos" /></div><div className="book-copy"><p className="eyebrow warm"><span></span> El libro</p><h2>Libertad<br /><i>en los Andes.</i></h2><p>De la feria al comité de riego. De las rondas campesinas a la propiedad de la tierra. El libro sigue una sola pregunta por los Andes: ¿qué ocurre cuando la gente puede decidir cerca?</p><div className="book-facts"><span>Pedro Jesús Guzmán Ramos</span><span>ISBN 978-612-03-2813-2</span><span>216 páginas · 2026</span></div><div className="chapter-list">{chapters.map(([n, title, sub]) => <div className="chapter" key={n}><span>{n}</span><div><b>{title}</b><small>{sub}</small></div><ArrowUpRight size={16}/></div>)}</div><div className="book-actions"><a className="button button-light" href="https://www.amazon.com/Libertad-en-los-Andes-Spanish-ebook/dp/B0HCXB894L/" target="_blank" rel="noreferrer">Comprar en Amazon <ArrowUpRight size={17}/></a><a className="light-link" href="#participa">Recibir novedades</a></div></div></div></section>

      <section id="participa" className="participate section-light"><div className="container participate-grid"><div><p className="eyebrow"><span></span> Participa</p><h2>Escríbenos<br /><i>desde tu región.</i></h2><p className="participate-note">Si quieres recibir los textos y participar en las conversaciones del proyecto, escríbenos directamente.</p></div><div className="join-card"><p>Recibe nuevos artículos, debates y convocatorias.</p><a className="button button-dark" href="mailto:hola@liberalismocomunal.org?subject=Quiero%20participar">Escribir a hola@liberalismocomunal.org <ArrowUpRight size={17}/></a></div></div></section>
    </main>
    <footer><div className="container footer-inner"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">↗</span><span>liberalismo<br/><em>comunal</em></span></a><p>Pedro Jesús Guzmán Ramos · Liberalismo peruano desde abajo</p><div><a href="#doctrina">Doctrina</a><a href="#autor">Autor</a><a href="#biblioteca">Biblioteca</a><a href="/proyecto/">Proyecto</a><a href="/contacto/">Contacto</a><a href="/privacidad/">Privacidad</a><a href="/aviso-legal/">Aviso legal</a></div></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<Router />)
