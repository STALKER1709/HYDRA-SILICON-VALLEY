import { useEffect, useState } from 'react';

const copy = {
  fr: {
    nav: ['À propos','Secteurs','Écosystème','Notre vision','Contact'], cta:'Collaborons',
    eyebrow:'UN GROUPE PANAFRICAIN MULTISECTORIEL', heroTitle:<>Enracinés en Afrique.<br/><em>Élevés au niveau mondial.</em></>,
    heroCopy:"Nous bâtissons des solutions et des entreprises qui transforment les secteurs clés du continent. Une ambition commune : faire émerger un avenir africain durable, innovant et connecté au monde.",
    explore:'Découvrir notre écosystème', who:'Qui sommes-nous ?', city:'YAOUNDÉ · CAMEROUN', scroll:'DÉFILER POUR EXPLORER',
    aboutK:'QUI NOUS SOMMES', aboutTitle:<>L'avenir de l'Afrique<br/>se <em>construit maintenant.</em></>,
    about1:"Hydra Silicon Valley est un groupe panafricain qui rassemble des expertises, des talents et des initiatives autour d'une conviction : le développement du continent passe par des solutions concrètes, pensées ici et capables de rayonner partout.",
    about2:"À travers nos différents secteurs d'activité, nous connectons innovation, entrepreneuriat et impact pour répondre aux défis d'aujourd'hui et ouvrir les possibilités de demain.",
    aboutLink:'Explorer nos secteurs', sectorK:'NOS DOMAINES D’ACTION', sectorTitle:<>Un écosystème.<br/><em>Plusieurs horizons.</em></>,
    sectorLead:"Nous investissons notre énergie dans les secteurs qui façonnent la vie, l'économie et le futur du continent.",
    sectors:[
      ['TECHNOLOGY','Technology & Digital','Des solutions numériques, des infrastructures et des produits qui accélèrent la transformation des organisations.'],
      ['HEALTH','Health & Wellbeing',"Des approches et services qui rapprochent les communautés d'un système de santé plus accessible et performant."],
      ['AGRICULTURE','Agriculture & Food Systems','Des initiatives pour valoriser les chaînes agricoles, soutenir les producteurs et renforcer la sécurité alimentaire.'],
      ['INFRASTRUCTURE','Real Estate & Energy','Des projets et services qui accompagnent le développement des territoires et des infrastructures durables.']
    ],
    ecoK:'NOTRE ÉCOSYSTÈME', ecoTitle:<>Des expertises distinctes.<br/><em>Une ambition commune.</em></>,
    ecoCopy:"Nos entités développent des réponses spécialisées, portées par une vision collective et une culture de l'innovation.",
    companies:[['HSV','-TECH','Technologie, ingénierie & transformation digitale'],['HSV','-HEALTH','Santé, bien-être & innovation médicale'],['HSV','-AGRO','Agriculture, agro-industrie & développement rural']],
    visionK:'NOTRE ENGAGEMENT', visionEyebrow:"BUILDING AFRICA'S FUTURE — SECTOR BY SECTOR",
    visionTitle:<>Le potentiel est<br/><em>immense.</em> L'action<br/>commence ici.</>,
    visionCopy:"Nous croyons en une Afrique qui crée, innove et prend pleinement part aux grandes transformations mondiales. Notre rôle : contribuer à rendre cette vision réelle, projet après projet.",
    visionCta:'Construisons ensemble', contactK:'ENTRONS EN CONTACT',
    contactTitle:<>Une idée en tête ?<br/><em>Parlons-en.</em></>, contactCopy:"Partenariat, collaboration, projet ou simple prise de contact : notre équipe sera ravie d'échanger avec vous.",
    office:'NOTRE SIÈGE', rights:'Tous droits réservés.', footer:'BUILT FOR THE FUTURE'
  },
  en: {
    nav:['About','Sectors','Ecosystem','Our vision','Contact'], cta:"Let's connect",
    eyebrow:'A PAN-AFRICAN MULTI-SECTOR GROUP', heroTitle:<>Rooted in Africa.<br/><em>Rising to global heights.</em></>,
    heroCopy:"We build solutions and businesses that transform key sectors across the continent. One shared ambition: shaping a sustainable, innovative African future connected to the world.",
    explore:'Explore our ecosystem', who:'Who we are', city:'YAOUNDÉ · CAMEROON', scroll:'SCROLL TO EXPLORE',
    aboutK:'WHO WE ARE', aboutTitle:<>Africa's future<br/>is being <em>built now.</em></>,
    about1:"Hydra Silicon Valley is a pan-African group bringing together expertise, talent and initiatives around one conviction: the continent's development depends on practical solutions, conceived here and able to reach the world.",
    about2:"Across our different business sectors, we connect innovation, entrepreneurship and impact to meet today's challenges and unlock tomorrow's opportunities.",
    aboutLink:'Explore our sectors', sectorK:'WHERE WE WORK', sectorTitle:<>One ecosystem.<br/><em>Many horizons.</em></>,
    sectorLead:"We focus our energy on the sectors shaping the continent's lives, economy and future.",
    sectors:[
      ['TECHNOLOGY','Technology & Digital','Digital solutions, infrastructure and products accelerating the transformation of organizations.'],
      ['HEALTH','Health & Wellbeing','Approaches and services bringing communities closer to a more accessible and effective healthcare system.'],
      ['AGRICULTURE','Agriculture & Food Systems','Initiatives that add value to agricultural value chains, support producers and strengthen food security.'],
      ['INFRASTRUCTURE','Real Estate & Energy','Projects and services supporting the development of territories and sustainable infrastructure.']
    ],
    ecoK:'OUR ECOSYSTEM', ecoTitle:<>Distinct expertise.<br/><em>One shared ambition.</em></>,
    ecoCopy:"Our entities develop specialized solutions, driven by a collective vision and a culture of innovation.",
    companies:[['HSV','-TECH','Technology, engineering & digital transformation'],['HSV','-HEALTH','Healthcare, wellbeing & medical innovation'],['HSV','-AGRO','Agriculture, agribusiness & rural development']],
    visionK:'OUR COMMITMENT', visionEyebrow:"BUILDING AFRICA'S FUTURE — SECTOR BY SECTOR",
    visionTitle:<>The potential is<br/><em>immense.</em> Action<br/>starts here.</>,
    visionCopy:"We believe in an Africa that creates, innovates and fully participates in global transformations. Our role is to help make this vision real, one project at a time.",
    visionCta:"Let's build together", contactK:'GET IN TOUCH',
    contactTitle:<>Have an idea?<br/><em>Let's talk.</em></>, contactCopy:"Partnership, collaboration, a project or simply an introduction: our team would be glad to hear from you.",
    office:'OUR OFFICE', rights:'All rights reserved.', footer:'BUILT FOR THE FUTURE'
  }
};

const sectors = [
  {icon:'/ressources/pixel_technology.png', code:'01'},
  {icon:'/ressources/ix_health.png', code:'02'},
  {icon:'/ressources/material-symbols_agriculture-outline-sharp.png', code:'03'},
  {icon:null, code:'04'}
];

function App(){
  const [lang,setLang]=useState('fr');
  const [menuOpen,setMenuOpen]=useState(false);
  const t=copy[lang];
  useEffect(()=>{document.documentElement.lang=lang;},[lang]);
  useEffect(()=>{const close=()=>setMenuOpen(false);window.addEventListener('hashchange',close);return()=>window.removeEventListener('hashchange',close);},[]);
  const links=['#about','#sectors','#ecosystem','#impact','#contact'];
  return <>
    <a className="skip-link" href="#main">Aller au contenu</a>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Hydra Silicon Valley, accueil"><img src="/ressources/logo%20hydra%20%20blanc%201.png" alt="Hydra Silicon Valley" /></a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Fermer le menu':'Ouvrir le menu'} aria-expanded={menuOpen}><span/><span/></button>
      <nav className={menuOpen?'nav open':'nav'} aria-label="Navigation principale">{t.nav.map((label,i)=><a key={links[i]} href={links[i]}>{label}</a>)}</nav>
      <div className="header-actions"><button className="lang-switch" onClick={()=>setLang(lang==='fr'?'en':'fr')} aria-label="Change language">{lang==='fr'?'EN':'FR'}</button><a className="button button-small button-outline" href="#contact">{t.cta}</a></div>
    </header>
    <main id="main">
      <section className="hero" id="home"><div className="hero-grid"/><div className="hero-content"><p className="eyebrow"><span className="pulse"/>{t.eyebrow}</p><h1>{t.heroTitle}</h1><p className="hero-copy">{t.heroCopy}</p><div className="hero-actions"><a className="button button-primary" href="#ecosystem">{t.explore}<span>↗</span></a><a className="text-link" href="#about">{t.who}<span>↓</span></a></div><div className="hero-foot"><span>{t.city}</span><span>02°04′ N — 11°30′ E</span></div></div><div className="hero-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><div className="core"><img src="/ressources/logo%20hydra%20v2_Plan%20de%20travail%201%201.png" alt=""/></div><span className="orbit-label label-one">TECHNOLOGY</span><span className="orbit-label label-two">PEOPLE</span><span className="orbit-label label-three">FUTURE</span><div className="art-caption">AFRICA<br/><b>IN MOTION</b></div></div><div className="scroll-cue"><span/>{t.scroll}</div></section>
      <section className="intro section" id="about"><div className="section-kicker">01 / {t.aboutK}</div><div className="intro-layout"><h2>{t.aboutTitle}</h2><div className="intro-text"><p>{t.about1}</p><p>{t.about2}</p><a className="text-link dark-link" href="#sectors">{t.aboutLink}<span>↗</span></a></div></div></section>
      <section className="sectors section" id="sectors"><div className="section-top"><div><div className="section-kicker">02 / {t.sectorK}</div><h2>{t.sectorTitle}</h2></div><p>{t.sectorLead}</p></div><div className="sector-grid">{t.sectors.map((s,i)=><article className={'sector-card sector-'+['tech','health','agro','energy'][i]} key={s[0]}><div className="sector-number">{sectors[i].code}</div><div className="sector-symbol">{sectors[i].icon?<img src={sectors[i].icon} alt=""/>:'ϟ'}</div><div><p className="sector-tag">HSV / {s[0]}</p><h3>{s[1]}</h3><p className="sector-description">{s[2]}</p></div><span className="sector-arrow">↗</span></article>)}</div></section>
      <section className="ecosystem section" id="ecosystem"><div className="section-kicker">03 / {t.ecoK}</div><div className="eco-heading"><h2>{t.ecoTitle}</h2><p>{t.ecoCopy}</p></div><div className="company-list">{t.companies.map((c,i)=><a className="company-row" href="#contact" key={c[1]}><span className="company-index">0{i+1}</span><span className="company-name">{c[0]}<span>{c[1]}</span></span><span className="company-desc">{c[2]}</span><span className="company-cta">↗</span></a>)}</div></section>
      <section className="vision section" id="impact"><div className="vision-bg"/><div className="section-kicker">04 / {t.visionK}</div><div className="vision-content"><p className="eyebrow">{t.visionEyebrow}</p><h2>{t.visionTitle}</h2><p>{t.visionCopy}</p><a className="button button-primary" href="#contact">{t.visionCta}<span>↗</span></a></div><div className="vision-aside">FROM CAMEROON<br/>TO THE WORLD <span>✳</span></div></section>
      <section className="contact section" id="contact"><div className="section-kicker">05 / {t.contactK}</div><div className="contact-layout"><div><h2>{t.contactTitle}</h2><p>{t.contactCopy}</p><a className="contact-email" href="mailto:hydrasiliconvalley@gmail.com">hydrasiliconvalley@gmail.com <span>↗</span></a></div><div className="contact-card"><span className="contact-card-icon">⌖</span><p className="card-label">{t.office}</p><h3>Awae Escalier</h3><p>Yaoundé, Cameroun</p><div className="card-rule"/><p className="card-label">EMAIL</p><a href="mailto:hydrasiliconvalley@gmail.com">hydrasiliconvalley@gmail.com</a></div></div></section>
    </main>
    <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#home"><img src="/ressources/logo%20hydra%20%20blanc%201.png" alt="Hydra Silicon Valley"/></a><p>Building Africa's Future<br/>— Sector by Sector.</p><a className="back-top" href="#home" aria-label="Retour en haut">↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HYDRA SILICON VALLEY. {t.rights}</span><span>YAOUNDÉ, CAMEROUN</span><span>{t.footer} <b>✳</b></span></div></footer>
  </>;
}
export default App;