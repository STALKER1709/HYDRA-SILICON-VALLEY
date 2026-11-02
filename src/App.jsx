import { useEffect, useState } from 'react';

const assets = {
  logo: '/ressources/logo%20hydra%20%20blanc%201.png',
  logoDark: '/ressources/logo%20hydra%20v2_Plan%20de%20travail%201%201.png',
  mark: '/ressources/Propri%C3%A9t%C3%A9%201=Variante2.png',
  map: '/ressources/Frame%208219.png',
  wave: '/ressources/Frame%208228.png',
  tech: '/ressources/pixel_technology.png',
  health: '/ressources/ix_health.png',
  agro: '/ressources/material-symbols_agriculture-outline-sharp.png'
};

const team = [
  { image: '/ressources/Propri%C3%A9t%C3%A9%201=Variante2%20(2).png', name: 'ING. Prosper Patrick MVOGO', role: 'Fondateur & Chief Executive Officer', note: 'Visionnaire de la tech africaine' },
  { image: '/ressources/Propri%C3%A9t%C3%A9%201=Variante2%20(3).png', name: 'ING. Bienvenu KUETCHE CHENDOU', role: 'Co-Fondateur & Chief Operating Officer', note: 'Visionnaire de la tech africaine' },
  { image: '/ressources/Propri%C3%A9t%C3%A9%201=Variante2%20(1).png', name: 'William ALIMA ZOGO', role: 'Directeur Artistique', note: 'Designer pro, concepteur UI/UX' },
  { image: '/ressources/Propri%C3%A9t%C3%A9%201=Variante2%20(4).png', name: 'ING. Daphney Julienne MENGUE', role: 'Responsable Communication & Marketing', note: 'Spécialiste de la transformation digitale' },
  { image: '/ressources/Propri%C3%A9t%C3%A9%201=Variante2%20(5).png', name: 'ING. Levis Jores NJIMI NJEUMEN', role: 'Directeur Technique & Chief Technology Officer', note: 'Administrateur SR et développeur Web et Mobile' }
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
    teamTitle: <>Notre <em>équipe</em></>,
    teamLead: 'Des talents complémentaires réunis autour d’une ambition commune.',
    newsTitle: <>Actualités</>,
    newsLead: 'Les dernières nouvelles de la corporation.',
    news: [
      ['Communication', 'Imprimez mieux. Portez la marque.', 'Découvrez les supports de communication et les initiatives qui font rayonner HSV.'],
      ['Stages académiques', 'Stages académiques', 'Une expérience d’apprentissage au contact de projets et d’équipes engagées.'],
      ['Vacances utiles', 'Vacances utiles', 'Un programme pour apprendre, créer et développer de nouvelles compétences.']
    ],
    explore: 'Explorer',
    contactTitle: <>Contactez <em>nous</em></>,
    contactLead: 'Partenaires, investisseurs, talents et porteurs de projets : échangeons.',
    name: 'Nom', firstName: 'Prénom', email: 'E-mail', subject: 'Sujet', message: 'Message',
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
    teamTitle: <>Our <em>team</em></>,
    teamLead: 'Complementary talents united by a shared ambition.',
    newsTitle: <>Latest news</>,
    newsLead: 'The latest updates from the corporation.',
    news: [
      ['Communication', 'Print better. Wear the brand.', 'Discover the communication materials and initiatives that bring HSV to life.'],
      ['Academic internships', 'Academic internships', 'A learning experience alongside committed teams and real projects.'],
      ['Useful holidays', 'Useful holidays', 'A programme to learn, create and develop new skills.']
    ],
    explore: 'Explore',
    contactTitle: <>Get in <em>touch</em></>,
    contactLead: 'Partners, investors, talent and project owners: let’s connect.',
    name: 'Last name', firstName: 'First name', email: 'Email', subject: 'Subject', message: 'Message',
    send: 'Send message', social: 'Head office', investors: 'Investors',
    office: 'Awae Escalier, Yaoundé, Cameroon',
    footerText: 'Building today the solutions that will shape Africa’s tomorrow.',
    rights: 'All rights reserved.', navigation: 'Navigation'
  }
};

function App() {
  const [lang, setLang] = useState('fr');
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => { delete document.documentElement.dataset.theme; };
  }, [theme]);

  const submitContact = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Nom : ${form.get('lastName') || ''}`,
      `Prénom : ${form.get('firstName') || ''}`,
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
          <img src={theme === 'dark' ? assets.logo : assets.logoDark} alt="Hydra Silicon Valley" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Ouvrir le menu"><span /><span /></button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          {t.nav.map((label, index) => <a key={label} href={['#home', '#ecosystem', '#corporation', '#news'][index]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-tools">
          <button className="theme-switch" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={theme === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair'}>
            <span className="theme-switch-knob">{theme === 'light' ? '☼' : '☾'}</span>
          </button>
          <button className="language-switch" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>{lang === 'fr' ? 'EN' : 'FR'}</button>
          <a className="header-contact" href="#contact">{t.contact}</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="hero-mark"><img src={assets.mark} alt="" /></div>
          <div className="hero-inner">
            <p className="hero-kicker"><span />{t.heroKicker}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-description">{t.heroText}</p>
            <a className="hero-cta" href="#ecosystem">{t.heroButton}<span>↗</span></a>
          </div>
          <div className="hero-location">YAOUNDÉ · CAMEROUN <span>02°04′ N — 11°30′ E</span></div>
        </section>

        <section className="ecosystem section" id="ecosystem">
          <div className="section-heading centered">
            <span className="section-index">01 / NOS DOMAINES D’ACTION</span>
            <h2>{t.ecoTitle}</h2>
            <p>{t.ecoLead}</p>
          </div>
          <div className="sector-cards">
            {t.sectors.map((sector, index) => (
              <article className="sector-card" key={sector[0]}>
                <div className="sector-icon">
                  <img src={[assets.tech, assets.health, assets.agro][index]} alt="" />
                </div>
                <span className="sector-code">0{index + 1} / HSV</span>
                <h3>{sector[0]}</h3>
                <p>{sector[1]}</p>
                <span className="sector-category">{sector[2]}</span>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="presence section" id="corporation">
          <div className="presence-grid" />
          <div className="presence-copy">
            <span className="section-index">02 / NOTRE RAYONNEMENT</span>
            <h2>{t.presenceTitle}</h2>
            <p>{t.presenceText}</p>
            <div className="presence-stats"><div><strong>0</strong><span>Filiale de présence<br />internationale</span></div><div><strong>0</strong><span>Filiale de présence<br />internationale</span></div><div><strong>0+</strong><span>Partenariats<br />stratégiques</span></div><div><strong>0+</strong><span>Projets et initiatives<br />à impact</span></div></div>
          </div>
          <div className="presence-visual">
            <img src={assets.map} alt="Carte du monde illustrant les liens internationaux de Hydra Silicon Valley" />
          </div>
        </section>

        <section className="team section">
          <div className="section-heading centered">
            <span className="section-index">03 / LES TALENTS DERRIÈRE LA VISION</span>
            <h2>{t.teamTitle}</h2>
            <p>{t.teamLead}</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="team-card-overlay">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-note">{member.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="news section" id="news">
          <div className="section-heading centered">
            <span className="section-index">04 / RESTEZ INFORMÉS</span>
            <h2>{t.newsTitle}</h2>
            <p>{t.newsLead}</p>
          </div>
          <div className="news-grid">
            <article className="news-feature">
              <div className="news-feature-copy">
                <span>{t.news[0][0]}</span>
                <h3>{t.news[0][1]}</h3>
                <p>{t.news[0][2]}</p>
                <a href="#contact">{t.explore} <b>↗</b></a>
              </div>
              <img src="/ressources/Frame%208204.png" alt="" loading="lazy" />
            </article>
            <article className="news-card news-card-one">
              <img src="/ressources/Frame%208205.png" alt="" loading="lazy" />
              <div><span>{t.news[1][0]}</span><h3>{t.news[1][1]}</h3><a href="#contact">↗</a></div>
            </article>
            <article className="news-card news-card-two">
              <img src="/ressources/Frame%208194.png" alt="" loading="lazy" />
              <div><span>{t.news[2][0]}</span><h3>{t.news[2][1]}</h3><a href="#contact">↗</a></div>
            </article>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-heading centered">
            <span className="section-index">05 / ENTRONS EN RELATION</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactLead}</p>
          </div>
          <div className="contact-layout">
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-row">
                <label>{t.name}<input name="lastName" autoComplete="family-name" required /></label>
                <label>{t.firstName}<input name="firstName" autoComplete="given-name" required /></label>
              </div>
              <label>{t.email}<input name="email" type="email" autoComplete="email" required /></label>
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
            <a className="footer-brand" href="#home"><img src={theme === 'dark' ? assets.logo : assets.logoDark} alt="Hydra Silicon Valley" /></a>
            <p>{t.footerText}</p>
            <a className="footer-cta" href="#contact">{t.contact} <span>↗</span></a>
          </div>
          <div className="footer-navigation">
            <span>{t.navigation}</span>
            {t.nav.map((label, index) => <a key={label} href={['#home', '#ecosystem', '#corporation', '#news'][index]}>{label}</a>)}
          </div>
          <a className="footer-top" href="#home" aria-label="Retour en haut">↑</a>
        </div>
        <div className="footer-wave"><img src={assets.wave} alt="" /></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} HYDRA SILICON VALLEY. {t.rights}</span><span>YAOUNDÉ, CAMEROUN</span><span>BUILDING AFRICA’S FUTURE — SECTOR BY SECTOR</span></div>
      </footer>
    </div>
  );
}

export default App;
