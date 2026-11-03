import { useEffect, useState } from 'react';

const assets = {
  logoLight: '/ressources/logo%20hydra%20v2_Plan%20de%20travail%201%201.png',
  logoDark: '/ressources/logo%20hydra%20%20blanc%201.png',
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
    nav: ['Accueil', 'Écosystème', 'Corporation', 'Actualités'],
    contact: 'Contact',
    heroKicker: 'UN GROUPE PANAFRICAIN MULTISECTORIEL',
    heroTitle: <>Enracinés en <em>Afrique.</em><br />Élevés au niveau mondial.</>,
    heroText: 'Nous bâtissons des solutions, des entreprises et des opportunités qui contribuent à transformer les secteurs clés du continent.',
    heroButton: 'Découvrir notre écosystème',
    ecoTitle: <>Notre <em>écosystème</em></>,
    ecoLead: 'Des filiales stratégiques pour construire les leviers de la transformation numérique et du développement durable.',
    sectors: [
      ['HSV - TECH', 'Solutions technologiques et services pour relever les défis de demain.', 'Technologie & transformation digitale'],
      ['HSV - HEALTH', 'Solutions de santé numérique et approches innovantes.', 'Santé & bien-être'],
      ['HSV - AGRO', 'Technologies pour une agriculture intelligente et durable.', 'Agriculture & agro-industrie']
    ],
    presenceTitle: <>Notre présence internationale<br />nourrit <em>l’innovation.</em></>,
    presenceText: 'Depuis le Cameroun, nous cultivons des collaborations et des perspectives au-delà des frontières. Notre ambition est de connecter les talents, les idées et les marchés.',
    presenceStats: [['3', 'Secteurs stratégiques'], ['CAM', 'Ancrage au Cameroun'], ['PAN', 'Ambition panafricaine'], ['INT', 'Ouverture internationale']],
    teamTitle: <>Notre <em>équipe</em></>,
    teamLead: 'Des talents complémentaires réunis autour d’une ambition commune.',
    newsTitle: <>Actualités</>,
    newsLead: 'Les dernières nouvelles de la corporation.',
    news: [
      { tag: 'Services aux étudiants', title: 'Imprimez mieux. Portez la marque.', text: 'Hydra Silicon Valley accompagne les étudiants avec un service d’impression rapide et professionnel pour les rapports de stage et les travaux académiques. 20 FCFA la page.', image: '/ressources/visuels/service-impression.jpeg', alt: 'Service d’impression HSV à 20 FCFA la page' },
      { tag: 'Stages académiques', title: 'Programme d’accueil de stagiaires', text: 'Trois mois de formation et d’encadrement en Génie logiciel, Graphic Design, Systèmes et réseaux et Software Engineering.', image: '/ressources/visuels/stages-academiques.jpeg', alt: 'Programme de stages académiques HSV' },
      { tag: 'Vacances utiles', title: 'Vacances utiles numériques', text: 'Un parcours de six semaines avec trois séances par semaine pour découvrir l’informatique, la bureautique, Internet, le design et la programmation.', image: '/ressources/visuels/vacances-utiles.jpeg', alt: 'Programme Vacances utiles numériques HSV' }
    ],
    explore: 'Explorer',
    contactTitle: <>Contactez <em>nous</em></>,
    contactLead: 'Partenaires, investisseurs, talents et porteurs de projets : échangeons.',
    name: 'Nom', email: 'E-mail', organization: 'Organisation', subject: 'Sujet', message: 'Message',
    send: 'Envoyer le message', social: 'Siège social', investors: 'Investisseurs',
    office: 'Awae Escalier, Yaoundé, Cameroun',
    footerText: 'Construire aujourd’hui les solutions qui feront l’Afrique de demain.',
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
    name: 'Name', email: 'Email', organization: 'Organization', subject: 'Subject', message: 'Message',
    send: 'Send message', social: 'Head office', investors: 'Investors',
    office: 'Awae Escalier, Yaoundé, Cameroon',
    footerText: 'Building today the solutions that will shape Africa’s tomorrow.',
    rights: 'All rights reserved.', navigation: 'Navigation'
  }
};

function App() {
  const [lang, setLang] = useState('fr');
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollPosition = () => setShowBackToTop(window.scrollY > 0);
    updateScrollPosition();
    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => { delete document.documentElement.dataset.theme; };
  }, [theme]);

  const submitContact = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
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
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Ouvrir le menu"><span /><span /></button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          {t.nav.map((label, index) => <a key={label} href={['#home', '#ecosystem', '#corporation', '#news'][index]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-tools">
          <button className="theme-switch" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair'}>
            <span className="theme-switch-knob">{theme === 'light' ? '☼' : '☾'}</span>
          </button>
          <button className="language-switch" type="button" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label={lang === 'fr' ? 'Switch language to English' : 'Passer le site en français'}>{lang === 'fr' ? 'EN' : 'FR'}</button>
          <a className="header-contact" href="#contact">{t.contact}</a>
        </div>
      </header>

      <main id="main">
        <section className="hero hero-africa" id="home" aria-label="Hydra Silicon Valley — Enracinés en Afrique, élevés au niveau mondial">
          <div className="hero-inner">
            <span className="hero-kicker"><span />{t.heroKicker}</span>
            <h1>{t.heroTitle}</h1>
            <p className="hero-description">{t.heroText}</p>
            <a className="hero-cta" href="#ecosystem">{t.heroButton}<span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-location" aria-hidden="true">YAOUNDÉ, CAMEROUN <span>—</span> AMBITION PANAFRICAINE</div>
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
                <h3>{t.news[0].title}</h3>
                <p>{t.news[0].text}</p>
                <a href="#contact">{t.explore} <b>↗</b></a>
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
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-row">
                <label>{t.name}<input name="lastName" autoComplete="name" required /></label>
                <label>{t.email}<input name="email" type="email" autoComplete="email" required /></label>
              </div>
              <label>{t.organization}<input name="organization" autoComplete="organization" /></label>
              <label>{t.subject}<input name="subject" required /></label>
              <label>{t.message}<textarea name="message" rows="4" required /></label>
              <button type="submit">{t.send}<span>↗</span></button>
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
