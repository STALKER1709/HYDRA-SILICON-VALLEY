import { useEffect, useState } from 'react';

const assets = {
  logoLight: '/ressources/logo%20hydra%20v2_Plan%20de%20travail%201%201.png',
  logoDark: '/ressources/logo%20hydra%20%20blanc%201.png',
  mark: '/ressources/Propri%C3%A9t%C3%A9%201=Variante4.png',
  map: '/ressources/Frame%208219.png',
  wave: '/ressources/Frame%208228.png',
  tech: '/ressources/pixel_technology.png',
  health: '/ressources/ix_health.png',
  agro: '/ressources/material-symbols_agriculture-outline-sharp.png'
};

const team = [
  { image: '/ressources/Equipe/ING.%20Prosper%20Patrick%20MVOGO.jpeg', name: 'ING. Prosper Patrick MVOGO', role: 'Fondateur & Chief Executive Officer', note: 'Visionnaire de la tech africaine' },
  { image: '/ressources/Equipe/ING.%20Bienvenu%20KUETCHE%20CHENDJOU.jpeg', name: 'ING. Bienvenu KUETCHE CHENDJOU', role: 'Co-Fondateur & Chief Operating Officer', note: 'Visionnaire de la tech africaine' },
  { image: '/ressources/Equipe/William%20ALIMA%20ZOGO.jpeg', name: 'William ALIMA ZOGO', role: 'Directeur Artistique', note: 'Designer pro, concepteur UI/UX' },
  { image: '/ressources/Equipe/ING.%20Daphney%20Julienne%20MENGUE.jpeg', name: 'ING. Daphney Julienne MENGUE', role: 'Responsable Communication & Marketing', note: 'Spécialiste de la transformation digitale' },
  { image: '/ressources/Equipe/ING.%20Levis%20Jores%20NJIMI%20NJEUMEN.jpeg', name: 'ING. Levis Jores NJIMI NJEUMEN', role: 'Directeur Technique & Chief Technology Officer', note: 'Administrateur SR et développeur Web et Mobile' }
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
      { tag: 'Stages académiques', title: 'Un programme d’accueil pour les stagiaires', text: 'Trois mois de formation et d’encadrement dans les pôles Génie logiciel, Graphic Design, Systèmes et réseaux et Software Engineering. Inscription : 5 000 FCFA. Encadrement : 45 000 FCFA.', image: '/ressources/visuels/stages-academiques.jpeg', alt: 'Programme d’accueil de stagiaires académiques HSV' },
      { tag: 'Formation', title: 'Vacances utiles numériques', text: 'Un parcours de six semaines, à raison de trois séances par semaine : découverte de l’ordinateur, bureautique, navigation Internet, design et programmation. Inscription : 5 000 FCFA. Encadrement : 25 000 FCFA.', image: '/ressources/visuels/vacances-utiles.jpeg', alt: 'Affiche du programme Vacances utiles numériques' },
      { tag: 'Services aux étudiants', title: 'L’impression à 20 FCFA la page', text: 'Un service d’impression rapide et professionnel pour les rapports de stage et les travaux académiques, avec une attention portée à la qualité et à la précision.', image: '/ressources/visuels/service-impression.jpeg', alt: 'Service d’impression proposé aux étudiants' },
      { tag: 'Identité HSV', title: 'La collection d’accessoires HSV', text: 'Portez les couleurs de Hydra Silicon Valley : polos à 5 000 FCFA, T-shirts à 3 500 FCFA et casquettes à 1 500 FCFA.', image: '/ressources/visuels/accessoires-hsv.jpeg', alt: 'Collection de polos, T-shirts et casquettes HSV' },
      { tag: 'Offre spéciale', title: 'Jusqu’à 20 % de réduction sur vos impressions', text: 'Achetez un accessoire HSV et bénéficiez de 20 % de réduction sur vos impressions (16 FCFA la page). En recommandant un ami avec un boss HSV, profitez de 10 % de réduction (18 FCFA la page).', image: '/ressources/visuels/offre-impression.jpeg', alt: 'Offre promotionnelle sur les impressions HSV' }
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
      { tag: 'Academic internships', title: 'A welcome programme for interns', text: 'Three months of training and mentoring across Software Engineering, Graphic Design, Systems & Networks and Software Development. Registration: 5,000 FCFA. Training: 45,000 FCFA.', image: '/ressources/visuels/stages-academiques.jpeg', alt: 'HSV academic internship programme' },
      { tag: 'Training', title: 'Useful digital holidays', text: 'A six-week programme with three sessions per week covering computer basics, office tools, Internet browsing, design and programming. Registration: 5,000 FCFA. Training: 25,000 FCFA.', image: '/ressources/visuels/vacances-utiles.jpeg', alt: 'Useful digital holidays programme poster' },
      { tag: 'Student services', title: 'Printing at 20 FCFA per page', text: 'Fast, professional printing for internship reports and academic work, with a focus on quality and precision.', image: '/ressources/visuels/service-impression.jpeg', alt: 'Printing service for students' },
      { tag: 'HSV identity', title: 'The HSV accessories collection', text: 'Wear Hydra Silicon Valley colours: polo shirts at 5,000 FCFA, T-shirts at 3,500 FCFA and caps at 1,500 FCFA.', image: '/ressources/visuels/accessoires-hsv.jpeg', alt: 'HSV polo shirts, T-shirts and caps' },
      { tag: 'Special offer', title: 'Up to 20% off your printing', text: 'Buy an HSV accessory and get 20% off printing (16 FCFA per page). Refer a friend through an HSV boss and get 10% off (18 FCFA per page).', image: '/ressources/visuels/offre-impression.jpeg', alt: 'HSV printing discount offer' }
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
  const [theme, setTheme] = useState('light');
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
          <button className="language-switch" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>{lang === 'fr' ? 'EN' : 'FR'}</button>
          <a className="header-contact" href="#contact">{t.contact}</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-pattern" aria-hidden="true"><iframe src="/ressources/Pattern%20Hydra.html" title="" tabIndex="-1" loading="eager" /></div>
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
            <div className="presence-signature"><span>HSV</span><i /> BUILDING AFRICA’S FUTURE</div>
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
                <span>{t.news[0].tag}</span>
                <h3>{t.news[0].title}</h3>
                <p>{t.news[0].text}</p>
                <a href="#contact">{t.explore} <b>↗</b></a>
              </div>
              <img src={t.news[0].image} alt={t.news[0].alt} loading="lazy" />
            </article>
            {t.news.slice(1).map((item) => (
              <article className="news-card" key={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={t.explore}>↗</a></div>
              </article>
            ))}
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
            <a className="footer-brand" href="#home"><img src={assets.logoLight} alt="Hydra Silicon Valley" /></a>
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
