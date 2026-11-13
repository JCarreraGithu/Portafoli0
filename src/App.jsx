import { useState } from 'react';

const email = 'jimmycarrera202@gmail.com';
const github = 'https://github.com/JCarreraGithu';
const linkedin = 'https://www.linkedin.com/in/jimmy-eduardo-carrera-castro-2aa2002a3/';

const skillGroups = [
  ['Monitoreo y soporte', 'Monitoreo de aplicaciones y servicios', 'Análisis de métricas de infraestructura', 'Gestión de incidentes', 'Documentación técnica', 'Validación post-despliegue'],
  ['Lenguajes', 'JavaScript', 'Python'],
  ['Frameworks', 'React', 'Express.js', 'Spring Boot', 'Next.js'],
  ['Bases de datos', 'Oracle', 'MySQL', 'PostgreSQL'],
  ['Herramientas', 'Postman', 'Jira', 'Confluence', 'Git y GitHub', 'Docker (básico)', 'CI/CD (básico)'],
  ['Sistemas operativos', 'Debian', 'Oracle Linux', 'WSL'],
];

const projects = [
  { n: '01', icon: '⌘', title: 'HelpDesk universitario', desc: 'Sistema de gestión de solicitudes e incidentes de soporte técnico.', tags: ['React', 'Node.js', 'Express', 'Oracle'], kind: 'violet', repo: 'https://github.com/JCarreraGithu/Sistema_de_Mesa_de_Ayuda-HelpDesk-' },
  { n: '02', icon: '▧', title: 'Tienda online La Bendición', desc: 'Proyecto de comercio electrónico enfocado en catálogo de productos y carrito de compras.', tags: ['Next.js', 'Express', 'Oracle'], kind: 'cyan', repo: 'https://github.com/JCarreraGithu/Tienda-LaBendicion' },
  { n: '03', icon: '⌁', title: 'Sistema de riego inteligente / Asistente móvil', desc: 'Proyecto académico orientado a la automatización del riego de jardines domésticos y asistencia mediante información sobre plantas.', tags: ['ESP32', 'IoT', 'Sensores', 'Inteligencia artificial'], kind: 'green', repo: 'https://github.com/JCarreraGithu/Aplicacion_Movil_AsistenteMovil' },
];

function SocialIcon({ href, network, className = '' }) {
  const isGithub = network === 'GitHub';
  return (
    <a className={`social-icon ${className}`} href={href} target="_blank" rel="noreferrer" aria-label={network} title={network}>
      {isGithub ? (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.67.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"/></svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9.5h2.97v8.95ZM6.45 8.28a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.17h-2.97V14.1c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3v4.43H9.39V9.5h2.85v1.22h.04c.4-.7 1.37-1.45 2.82-1.45 3.01 0 3.57 1.98 3.57 4.55v4.63Z"/></svg>
      )}
    </a>
  );
}

function External({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Sobre mí', '#about'], ['Experiencia', '#experience'], ['Habilidades', '#skills'], ['Proyectos', '#projects'], ['Formación', '#education']];
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Jimmy Carrera, inicio"><span className="brand-mark">JC</span><span>JIMMY CARRERA<span className="brand-sub">PORTAFOLIO PROFESIONAL</span></span></a>
      <button className="menu-toggle" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Navegación principal">
        {links.map(([text, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{text}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Hablemos <span>↗</span></a>
      </nav>
    </header>
  );
}

function App() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${email}`; }
  }

  return <><Header /><main>
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse" /> DISPONIBLE PARA NUEVOS RETOS</div>
        <p className="hero-kicker">Hola, soy</p>
        <h1>Jimmy Eduardo<br /><span>Carrera Castro.</span></h1>
        <p className="hero-role">Analista de Sistemas <i>·</i> IT Support <i>·</i><br className="mobile-break" /> Desarrollo de Software</p>
        <p className="hero-text">Conecto operaciones confiables con soluciones tecnológicas. Experiencia en producción, monitoreo y soporte de sistemas críticos.</p>
        <div className="hero-actions"><a className="button primary" href="/CV_Jimmy_Carrera.pdf" download>Descargar CV <span>↓</span></a><a className="button secondary" href="#projects">Ver proyectos <span>↘</span></a></div>
        <div className="socials"><SocialIcon href={github} network="GitHub" /><SocialIcon href={linkedin} network="LinkedIn" /><span className="social-location">⌖ &nbsp;San Miguel Petapa, Guatemala</span></div>
      </div>
      <div className="hero-photo-wrap">
        <div className="photo-halo" /><div className="photo-frame"><img src="/images/foto-perfil.jpg" alt="Fotografía de Jimmy Eduardo Carrera Castro" fetchPriority="high" /></div>
        <div className="float-card status"><span className="status-dot" /> PERFIL PROFESIONAL <b>SYS // ONLINE</b></div>
        <div className="photo-caption"><span>JC / 01</span><span>OPERATIONS × DEVELOPMENT</span></div>
        <div className="photo-accent" aria-hidden="true" />
      </div>
      <a className="scroll-hint" href="#about"><span /> DESLIZA PARA EXPLORAR</a>
    </section>

    <section className="section section-wrap" id="about"><div className="section-heading"><span className="section-index">01 / PERFIL</span><h2>Sobre mí</h2></div><div className="about-grid"><p className="about-lead">Me gusta entender cómo funcionan las cosas y hacer que funcionen mejor.</p><div className="about-body"><p>Soy estudiante de Ingeniería en Sistemas con experiencia en monitoreo de aplicaciones y servicios en producción, soporte de sistemas críticos, análisis de infraestructura y gestión de incidentes.</p><p>He coordinado con equipos de proyectos y desarrollo durante mantenimientos y pases a producción. Me interesa seguir creciendo en desarrollo de software, calidad de aplicaciones (QA) y automatización.</p><div className="focus-tags"><span>Operaciones TI</span><span>Mejora continua</span><span>Desarrollo</span></div></div></div></section>

    <section className="section section-wrap" id="experience"><div className="section-heading"><span className="section-index">02 / TRAYECTORIA</span><h2>Experiencia</h2></div><div className="timeline"><article className="job featured"><div className="job-date">MAY 2026 — OCT 2026</div><div className="job-content"><div className="job-title"><div><h3>Especialista de Soporte y Operación</h3><p>FRT <span>·</span> Guatemala</p></div><span className="job-badge">OPERACIONES</span></div><ul><li>Brindé soporte a aplicaciones críticas del negocio, priorizando continuidad operativa y tiempos de resolución.</li><li>Coordiné con equipos de proyectos y desarrollo para validar cambios antes y después de producción.</li></ul></div></article><article className="job featured"><div className="job-date">MAR 2025 — ABR 2026</div><div className="job-content"><div className="job-title"><div><h3>Analista de Sistemas</h3><p>FRT <span>·</span> Guatemala</p></div><span className="job-badge">SISTEMAS</span></div><ul><li>Monitoreé aplicaciones y servicios críticos; analicé CPU, memoria, filesystem y tiempos de respuesta de bases de datos.</li><li>Gestioné y documenté incidentes con Jira y Confluence; coordiné incidentes críticos, mantenimientos y pases a producción.</li></ul></div></article><article className="job compact"><div className="job-date">JUL 2023 — MAR 2025</div><div className="job-content"><h3>Operador de Montacargas <span>— BYB</span></h3></div></article><article className="job compact"><div className="job-date">ENE 2022 — JUN 2023</div><div className="job-content"><h3>Auxiliar de Procesos <span>— BYB</span></h3></div></article></div></section>

    <section className="section section-wrap" id="skills"><div className="section-heading"><span className="section-index">03 / CAJA DE HERRAMIENTAS</span><h2>Habilidades técnicas</h2></div><div className="skills-grid">{skillGroups.map(([title, ...items], i) => <article className="skill-card" key={title}><span className="skill-number">0{i + 1}</span><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>

    <section className="section section-wrap" id="projects"><div className="section-heading"><span className="section-index">04 / TRABAJO SELECCIONADO</span><h2>Proyectos</h2><p className="section-note">Una muestra de proyectos académicos y personales.</p></div><div className="projects-grid">{projects.map(project => <article className={`project-card ${project.kind}`} key={project.title}><div className="project-visual"><span className="project-count">{project.n} / 03</span><span className="project-symbol" aria-hidden="true">{project.icon}</span><div className="visual-grid" /><span className="visual-caption">{project.kind === 'green' ? 'AUTOMATION / IOT' : project.kind === 'cyan' ? 'COMMERCE / WEB' : 'SUPPORT / SYSTEMS'}</span></div><div className="project-info"><h3>{project.title}</h3><p>{project.desc}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><SocialIcon className="repo-github" href={project.repo} network="GitHub" /></div></article>)}</div></section>

    <section className="section section-wrap" id="education"><div className="section-heading"><span className="section-index">05 / FORMACIÓN CONTINUA</span><h2>Formación & certificaciones</h2></div><div className="education-grid"><article className="education-card"><span className="edu-icon">⌂</span><div className="section-index">FORMACIÓN</div><h3>Ingeniería en Sistemas</h3><p>Universidad Mariano Gálvez</p><p>Villa Nueva <span>·</span> 2022—2026</p><span className="edu-line" /></article><div className="cert-list"><div className="section-index">CERTIFICACIONES</div><article className="cert"><span className="cert-mark">01</span><div><h3>Oracle Cloud Infrastructure 2025 Certified AI Foundations</h3><p>Oracle <span>·</span> 2025</p></div><span className="cert-arrow">↗</span></article><article className="cert"><span className="cert-mark">02</span><div><h3>Getting Started in Cybersecurity 3.0</h3><p>Fortinet <span>·</span> 2025</p></div><span className="cert-arrow">↗</span></article><article className="cert"><span className="cert-mark">03</span><div><h3>QA Manual, Automatización, Tester y Performance</h3><p>Udemy</p><span className="course-status">En curso</span></div><span className="cert-arrow">↗</span></article></div></div></section>

    <section className="contact-section section-wrap" id="contact"><div className="contact-glow" /><div className="section-index">06 / CONTACTO</div><h2>¿Hablamos de<br /><span>lo que sigue?</span></h2><p>Estoy abierto a oportunidades donde pueda aportar, aprender y construir soluciones útiles.</p><div className="contact-actions"><a className="button primary" href={`mailto:${email}`}>Escríbeme un correo <span>↗</span></a><button className="button secondary" onClick={copyEmail}>{copied ? 'Correo copiado ✓' : 'Copiar correo'}</button></div><div className="contact-links"><a href={`mailto:${email}`}><span>EMAIL</span>{email} <b>↗</b></a><a href="tel:+50232810512"><span>TELÉFONO</span>+502 3281 0512 <b>↗</b></a><External href={linkedin}><span>LINKEDIN</span>Perfil profesional</External><External href={github}><span>GITHUB</span>JCarreraGithu</External></div></section>
  </main><footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">JC</span><span>JIMMY CARRERA<span className="brand-sub">PORTAFOLIO PROFESIONAL</span></span></a><span>Diseñado con intención. © {new Date().getFullYear()} Jimmy Carrera.</span><div className="footer-social"><SocialIcon href={github} network="GitHub" /><SocialIcon href={linkedin} network="LinkedIn" /><a className="back-top" href="#home" aria-label="Volver al inicio" title="Volver al inicio">↑</a></div></footer></>;
}

export default App;
