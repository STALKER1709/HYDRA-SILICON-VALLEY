import { useEffect, useRef, useState } from 'react';

const assets = {
  logoLight: 'https://raw.githubusercontent.com/STALKER1709/HYDRA-SILICON-VALLEY/main/ressources/logo%20hydra%20v2_Plan%20de%20travail%201.png',
  logoDark: 'https://raw.githubusercontent.com/STALKER1709/HYDRA-SILICON-VALLEY/main/ressources/logo%20hydra%20%20blanc%201.png',
  mark: '/ressources/Propri%C3%A9t%C3%A9%201=Variante4.png',
  map: '/ressources/Frame%208219.png',
  presence: 'https://raw.githubusercontent.com/STALKER1709/HYDRA-SILICON-VALLEY/main/ressources/afrique%201.png',
  tech: '/ressources/pixel_technology.png',
  health: '/ressources/ix_health.png',
  agro: '/ressources/material-symbols_agriculture-outline-sharp.png'
};

const team = [
  { image: 'https://raw.githubusercontent.com/STALKER1709/HYDRA-SILICON-VALLEY/main/ressources/Equipe/ING.%20Prosper%20Patrick%20MVOGO.png', name: 'ING. Prosper Patrick MVOGO', role: 'Fondateur & Chief Executive Officer' },
  { image: 'https://raw.githubusercontent.com/STALKER1709/HYDRA-SILICON-VALLEY/main/ressources/Equipe/ING.%20Bienvenu%20KUETCHE%20CHENDJOU.png', name: 'ING. Bienvenu KUETCHE CHENDJOU', role: 'Co-Fondateur & Chief Operating Officer' },
  { image: 'https://raw.githubusercontent.com/STALKER1709/HYDRA-SILICON-VALLEY/main/ressources/Equipe/William%20ALIMA%20ZOGO.png', name: 'William ALIMA ZOGO', role: 'Directeur Artistique' },
  { image: 'https://raw.githubusercontent.com/STALKER1709/HYDRA-SILICON-VALLEY/main/ressources/Equipe/ING.%20Daphney%20Julienne%20MENGUE.png', name: 'ING. Daphney Julienne MENGUE', role: 'Responsable Communication & Marketing' },
  { image: 'https://raw.githubusercontent.com/STALKER1709/HYDRA-SILICON-VALLEY/main/ressources/Equipe/ING.%20Levis%20Jores%20NJIMI%20NJEUMEN.png', name: 'ING. Levis Jores NJIMI NJEUMEN', role: 'Directeur Technique & Chief Technology Officer' }
];

const translations = {
  fr: {
    nav: ['Accueil', 'Écosystème', 'Corporation', 'Actualité'],
    contact: 'Contact',
    heroKicker: 'UN GROUPE PANAFRICAIN MULTISECTORIEL',
    heroTitle: <>Enracinés en <em>Afrique.</em><br />Élevés au niveau mondial.</>,
    heroText: 'Nous bâtissons des solutions, des entreprises et des opportunités qui contribuent à transformer les secteurs clés du continent.',
    heroButton: 'Découvrir notre écosystème',
    ecoTitle: <>Notre <em>écosystème</em></>,
    ecoLead: 'Des filiales stratégiques pour couvrir tous les leviers de la transformation numérique africaine.',
    sectors: [
      ['HSV - TECH', 'Solutions logicielles et enterprise pour l’Afrique et l’international.', 'Logiciels & Transformation Digital'],
      ['HSV - HEALTH', 'Solutions de santé numérique et télémédecine.', 'Santé & Télémédecine'],
      ['HSV - AGRO', 'Technologies pour l’agriculture intelligente et l’agroalimentaire.', 'Agriculture & Agroalimentaire']
    ],
    presenceTitle: <>Notre présence internationale<br />nourrit <em>l’innovation.</em></>,
    presenceText: 'Grâce à des équipes engagées et des talents solides, nous construisons des écosystèmes et des opportunités économiques à impact. Nos ambitions : renforcer nos capacités et ouvrir nos horizons pour créer de la valeur durable.',
    presenceStats: [['0', 'Pays de présence'], ['0', 'Filiales présentes'], ['0+', 'Talents mobilisés'], ['0+', 'Partenaires stratégiques']],
    teamTitle: <>Notre <em>équipe</em></>,
    teamLead: 'Une équipe dirigeante expérimentée au service d’une ambition continentale.',
    newsTitle: <>Actualités</>,
    newsLead: 'Les dernières annonces de la corporation.',
    news: [
      { tag: 'Octobre 2026', title: <>Imprimez mieux.<br /><em>Portez la marque.</em></>, text: 'Un service d’impression de supports pour le développement de votre sélection d’accessoires HSV.', image: '/ressources/visuels/service-impression.jpeg', alt: 'Service d’impression HSV à 20 FCFA la page' },
      { tag: 'Juin - Août 2026', title: 'Stages académiques', text: 'Formation et encadrement en Génie logiciel, Graphic Design, Systèmes et réseaux.', image: '/ressources/visuels/stages-academiques.jpeg', alt: 'Programme de stages académiques HSV' },
      { tag: 'Juillet - Août 2026', title: 'Vacances utiles', text: 'Un programme de vacances pour découvrir les compétences numériques.', image: '/ressources/visuels/vacances-utiles.jpeg', alt: 'Programme Vacances utiles numériques HSV' }
    ],
    explore: 'Explorer',
    contactTitle: <>Contactez <em>nous</em></>,
    contactLead: 'Relations investisseurs, partenariats stratégiques, médias.',
    firstName: 'Prénom', name: 'Nom', email: 'Email', organization: 'Organisation', subject: 'Sujet', message: 'Message',
    send: 'Envoyer le message', social: 'Siège social', investors: 'Investisseurs',
    office: 'Awae Escalier, Yaoundé, Cameroun',
    footerText: 'Corporation technologique panafricaine. Nous créons des solutions innovantes pour bâtir l’Afrique de demain.',
    rights: 'Tous droits réservés.', navigation: 'Navigation'
  },
  en: {
    nav: ['Home', 'Ecosystem', 'Corporation', 'News'],
    contact: 'Contact',
    heroKicker: 'A PAN-AFRICAN MULTI-SECTOR GROUP',
    heroTitle: <>Rooted in <em>Africa.</em><br />Rising to global heights.</>,
    heroText: 'We build solutions, businesses and opportunities that help transform key sectors across the continent.',
    heroButton: 'Explore our ecosystem',
    ecoTitle: <>Our <em>ecosystem</em></>,
    ecoLead: 'Strategic subsidiaries building the foundations for digital transformation and sustainable development.',
    sectors: [
      ['HSV - TECH', 'Technology solutions and services for tomorrow’s challenges.', 'Technology & digital transformation'],
      ['HSV - HEALTH', 'Digital health solutions and innovative approaches.', 'Health & wellbeing'],
      ['HSV - AGRO', 'Technology for smart and sustainable agriculture.', 'Agriculture & agribusiness']
    ],
    presenceTitle: <>Our international presence<br />fuels <em>innovation.</em></>,
    presenceText: 'From Cameroon, we nurture collaborations and perspectives beyond borders. Our ambition is to connect talent, ideas and markets.',
    presenceStats: [['3', 'Strategic sectors'], ['CMR', 'Cameroon roots'], ['PAN', 'Pan-African ambition'], ['INT', 'International outlook']],
    teamTitle: <>Our <em>team</em></>,
    teamLead: 'Complementary talents united by a shared ambition.',
    newsTitle: <>Latest news</>,
    newsLead: 'The latest updates from the corporation.',
    news: [
      { tag: 'Student services', title: 'Print better. Wear the brand.', text: 'Hydra Silicon Valley supports students with fast, professional printing for internship reports and academic work. 20 FCFA per page.', image: '/ressources/visuels/service-impression.jpeg', alt: 'HSV printing service at 20 FCFA per page' },
      { tag: 'Academic internships', title: 'Academic internship programme', text: 'Three months of training and mentoring across Software Engineering, Graphic Design, Systems & Networks and Software Development.', image: '/ressources/visuels/stages-academiques.jpeg', alt: 'HSV academic internship programme' },
      { tag: 'Useful holidays', title: 'Useful digital holidays', text: 'A six-week programme with three sessions per week covering computer basics, office tools, Internet, design and programming.', image: '/ressources/visuels/vacances-utiles.jpeg', alt: 'HSV useful digital holidays programme' }
    ],
    explore: 'Explore',
    contactTitle: <>Get in <em>touch</em></>,
    contactLead: 'Partners, investors, talent and project owners: let’s connect.',
    firstName: 'First name', name: 'Last name', email: 'Email', organization: 'Organization', subject: 'Subject', message: 'Message',
    send: 'Send message', social: 'Head office', investors: 'Investors',
    office: 'Awae Escalier, Yaoundé, Cameroon',
    footerText: 'Building today the solutions that will shape Africa’s tomorrow.',
    rights: 'All rights reserved.', navigation: 'Navigation'
  }
};

function SolarEclipse() {
  const eclipseRef = useRef(null);

  useEffect(() => {
    const node = eclipseRef.current;
    if (!node) return undefined;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionPreference.matches) return undefined;

    let frame = 0;
    const handlePointerMove = (event) => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const bounds = node.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
          resetPointer();
          return;
        }
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
        node.style.setProperty('--eclipse-shift-x', `${Math.max(-1, Math.min(1, x)) * 18}px`);
        node.style.setProperty('--eclipse-shift-y', `${Math.max(-1, Math.min(1, y)) * 12}px`);
      });
    };
    const resetPointer = () => {
      node.style.setProperty('--eclipse-shift-x', '0px');
      node.style.setProperty('--eclipse-shift-y', '0px');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={eclipseRef} className="hero-eclipse" aria-hidden="true">
      <span className="eclipse-corona" />
      <span className="eclipse-sun" />
      <span className="eclipse-moon" />
      <span className="eclipse-flare eclipse-flare-left" />
      <span className="eclipse-flare eclipse-flare-right" />
    </div>
  );
}

function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('hsv-language') === 'en' ? 'en' : 'fr'; }
    catch { return 'fr'; }
  });
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('hsv-theme') === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('hsv-language', lang); } catch { /* Storage may be unavailable. */ }
  }, [lang]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollPosition = () => setShowBackToTop(window.scrollY > 0);
    updateScrollPosition();
    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionPreference.matches) return undefined;

    const targets = document.querySelectorAll(
      '.ecosystem, .presence, .team, .news, .contact, .site-footer, .section-heading, .sector-card, .presence-stat, .team-card, .news-feature, .news-card, .contact-form, .contact-map, .footer-brand-block, .footer-navigation'
    );

    targets.forEach((element) => element.classList.add('reveal-on-scroll'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('hsv-theme', theme); } catch { /* Storage may be unavailable. */ }
    return () => { delete document.documentElement.dataset.theme; };
  }, [theme]);

  const submitContact = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Prénom : ${form.get('firstName') || ''}`,
      `Nom : ${form.get('lastName') || ''}`,
      `Organisation : ${form.get('organization') || ''}`,
      `E-mail : ${form.get('email') || ''}`,
      `Sujet : ${form.get('subject') || ''}`,
      '',
      form.get('message') || ''
    ].join('\n');
    window.location.href = `mailto:hydrasiliconvalley@gmail.com?subject=${encodeURIComponent(form.get('subject') || 'Prise de contact HSV')}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`site-shell theme-${theme}`}>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hydra Silicon Valley, accueil">
          <img src={theme === 'light' ? assets.logoLight : assets.logoDark} alt="Hydra Silicon Valley" />
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu')}><span /><span /></button>
        <nav id="primary-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}>
          {t.nav.map((label, index) => <a key={label} href={['#home', '#ecosystem', '#corporation', '#news'][index]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-tools">
          <button className="theme-switch" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-pressed={theme === 'dark'} aria-label={theme === 'light' ? (lang === 'fr' ? 'Activer le thème sombre' : 'Enable dark theme') : (lang === 'fr' ? 'Activer le thème clair' : 'Enable light theme')}>
            <span className="theme-switch-knob">{theme === 'light' ? '☼' : '☾'}</span>
          </button>
          <button className="language-switch" type="button" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label={lang === 'fr' ? 'Switch language to English' : 'Passer le site en français'} lang={lang === 'fr' ? 'en' : 'fr'}>{lang === 'fr' ? 'EN' : 'FR'}</button>
          <a className="header-contact" href="#contact">{t.contact}</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-pattern" aria-hidden="true"><iframe src="/ressources/Pattern%20Hydra.html" title="" tabIndex="-1" loading="eager" /></div>
          <div className="hero-glow" />
          <SolarEclipse />
          <div className="hero-mark"><img src={assets.mark} alt="" /></div>
          <div className="hero-inner">
            <h1>{t.heroTitle}</h1>
            <p className="hero-description">{t.heroText}</p>
            <a className="hero-cta" href="#ecosystem">{t.heroButton}<span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="ecosystem section" id="ecosystem">
          <div className="ecosystem-mark" aria-hidden="true"><img src={assets.mark} alt="" /></div>
          <div className="section-heading centered">
            <h2>{t.ecoTitle}</h2>
            <p>{t.ecoLead}</p>
          </div>
          <div className="sector-cards">
            {t.sectors.map((sector, index) => (
              <article className="sector-card" key={sector[0]}>
                <div className="sector-icon">
                  <img src={[assets.tech, assets.health, assets.agro][index]} alt="" />
                </div>
                <h3>{sector[0]}</h3>
                <p>{sector[1]}</p>
                <span className="sector-category">{sector[2]}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="presence section" id="corporation">
          <div className="presence-grid" />
          <div className="presence-copy">
            <h2>{t.presenceTitle}</h2>
            <p>{t.presenceText}</p>
            <div className="presence-stats">
              {t.presenceStats.map(([value, label]) => (
                <div className="presence-stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="presence-visual">
            <img src={assets.presence} alt="Main levée devant une carte texturée de l’Afrique" />
          </div>
        </section>

        <section className="team section">
          <div className="section-heading centered">
            <h2>{t.teamTitle}</h2>
            <p>{t.teamLead}</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name} tabIndex={0}>
                <img src={member.image} alt={`${member.name} — ${member.role}`} loading="lazy" />
                <div className="team-card-overlay">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="news section" id="news">
          <div className="section-heading centered">
            <h2>{t.newsTitle}</h2>
            <p>{t.newsLead}</p>
          </div>
          <div className="news-grid">
            <article className="news-feature">
              <div className="news-feature-copy">
                <span className="news-date">{t.news[0].tag}</span>
                <h3>{t.news[0].title}</h3>
                <p>{t.news[0].text}</p>
                <a href="#contact">
                  <span aria-hidden="true" className="news-explore-icon">↗</span>
                  {t.explore}
                </a>
              </div>
              <img src={t.news[0].image} alt={t.news[0].alt} loading="lazy" />
            </article>
            {t.news.slice(1).map((item) => (
              <article className="news-card" key={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={t.explore}>↗</a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-heading centered">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactLead}</p>
          </div>
          <div className="contact-layout">
            <form className="contact-form" onSubmit={submitContact} aria-describedby="contact-form-note">
              <div className="form-row">
                <label>{t.firstName}*<input name="firstName" autoComplete="given-name" required /></label>
                <label>{t.name}*<input name="lastName" autoComplete="family-name" required /></label>
              </div>
              <label>{t.email}*<input name="email" type="email" autoComplete="email" required /></label>
              <label>{t.organization}<input name="organization" autoComplete="organization" /></label>
              <label>{t.subject}*<input name="subject" required /></label>
              <label>{t.message}<textarea name="message" rows="4" required /></label>
              <p className="contact-form-note" id="contact-form-note">{lang === 'fr' ? 'Ce formulaire ouvre votre application de messagerie avec le message prérempli. Aucun message n’est envoyé directement depuis le site.' : 'This form opens your email application with a prefilled message. No message is sent directly by the website.'}</p>
              <button type="submit">{t.send}<span aria-hidden="true">↗</span></button>
            </form>
            <div className="contact-map">
              <img src={assets.map} alt="" loading="lazy" />
              <div className="contact-info-grid">
                <div><span>{t.social}</span><strong>{t.office}</strong></div>
                <a href="mailto:hydrasiliconvalley@gmail.com"><span>{t.investors}</span><strong>hydrasiliconvalley@gmail.com</strong></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#home"><img src={assets.logoLight} alt="Hydra Silicon Valley" /></a>
            <p>{t.footerText}</p>
            <a className="footer-cta" href="#contact">{t.contact} <span>↗</span></a>
          </div>
          <div className="footer-navigation">
            <span>{t.navigation}</span>
            {t.nav.map((label, index) => <a key={label} href={['#home', '#ecosystem', '#corporation', '#news'][index]}>{label}</a>)}
          </div>
        </div>
        <div className="footer-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none" focusable="false">
            <defs>
              <path id="hsv-footer-wave" d="M-160 72 C-80 28 0 28 80 72 S240 116 320 72 S480 28 560 72 S720 116 800 72 S960 28 1040 72 S1200 116 1280 72 S1440 28 1520 72 S1680 116 1760 72 V160 H-160 Z" />
            </defs>
            <g className="footer-wave-layer footer-wave-layer-back">
              <use href="#hsv-footer-wave" x="0" y="0" />
              <use href="#hsv-footer-wave" x="1440" y="0" />
            </g>
            <g className="footer-wave-layer footer-wave-layer-middle">
              <use href="#hsv-footer-wave" x="0" y="18" />
              <use href="#hsv-footer-wave" x="1440" y="18" />
            </g>
            <g className="footer-wave-layer footer-wave-layer-front">
              <use href="#hsv-footer-wave" x="0" y="34" />
              <use href="#hsv-footer-wave" x="1440" y="34" />
            </g>
          </svg>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} HYDRA SILICON VALLEY. {t.rights}</span>
          <span>YAOUNDÉ, CAMEROUN</span>
          <span>BUILDING AFRICA’S FUTURE — SECTOR BY SECTOR</span>
          
        </div>
      </footer>
      <button
        className={`back-to-top${showBackToTop ? ' is-visible' : ''}`}
        type="button"
        aria-label="Retour en haut de page"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >↑</button>
    </div>
  );
}

export default App;
