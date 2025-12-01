// import logo from './assets/logo.svg';
import avatar from './assets/avatar.svg';
// import github from './assets/github-logo.svg'
// import telegram from './assets/telegram-icon.svg'
import './common/common-style/reset.scss';
import './common/common-style/index.css';
import './common/common-style/main.scss';
import './common/common-style/vars.scss';
import './common/common-style/header.scss';
import Header from './components/header.jsx';
import square from './assets/square.svg';
import dots from './assets/dots.svg';
import altLogo from './assets/alt.logo.svg';
import { items } from './data/data-project.js';
import { useLanguage } from './contexts/LanguageContext';
import { translations } from './data/translations';
import Skills from './components/skills.jsx';
import aboutLogo from './assets/about-me.svg';
import Footer from './components/footer.jsx';

function Projects({ item, t }) {
  return (
    <li className="project__item">
      <img src={item.img} alt={item.title} className="project__img" />
      <h6 className="project__used">{item.used}</h6>
      <div className="project__main-info">
        <h2 className="project__title">{item.title}</h2>
        <div className="project__subtitle">{t[item.subtitleKey]}</div>
        <div className="project__btn-links">
          <a
            href={item.btn.link}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.btn.text}
          </a>
          {item.btn.text2 && (
            <a
              href={item.btn.link2}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.btn.text2}
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

function App() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main>
      <Header />
      <section className="preview">
        <div className="container">
          <div className="preview__content">
            <div className="preview__basic-info">
              <div className="hero">
                <h1 className="main-title">
                  {t.mainTitle}{' '}
                  <span className="hashtag">{t.webDesigner}</span> {'&'}{' '}
                  <span className="hashtag">{t.frontEndDeveloper}</span>
                </h1>
                <div className="main-text">
                  <p>{t.mainText}</p>
                </div>
                <a
                  href="./src/price/price.html"
                  className="button"
                  data-anim="previewBtn"
                >
                  <span>{t.contactMe}</span>
                </a>
              </div>
            </div>
            <div className="preview__avatar">
              <img
                src={avatar}
                alt="man-with-headset"
                className="logo__man"
              />
              <p className="preview__info">
                {t.currentlyWorking} <span>{t.portfolio}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="quote">
        <div className="square">
          <img src={square} alt="GitHub" />
        </div>
        <figure className="quoteInfo">
          <blockquote className="quoteText">{t.quote}</blockquote>
          <figcaption className="quoteAuthor">
            {t.quoteAuthor}
          </figcaption>
        </figure>
      </section>
      <section className="project">
        <div className="container">
          <div className="project__content">
            <div className="project__info">
              <h1 className="main-title">
                <span className="hashtag">#</span>
                {t.projects}
              </h1>
              <a className="project__link" href="/project">
                {t.viewAll} {'~~>'}
              </a>
            </div>
            <ul className="project__list">
              <Projects item={items[0]} t={t} />
              <Projects item={items[1]} t={t} />
              <Projects item={items[2]} t={t} />
            </ul>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="container">
          <div className="skills__content">
            <div className="skills__info">
              <h1 className="main-title">
                <span className="hashtag">#</span>
                {t.skills}
              </h1>
            </div>
            <div className="skills__main-content">
              <div className="skills__props">
                <img
                  src={dots}
                  alt="props"
                  className="skills__props-dots"
                />
                <img
                  src={dots}
                  alt="props"
                  className="skills__props-dots--2"
                />
                <img
                  src={square}
                  alt="props"
                  className="skills__props-square"
                />
                <img
                  src={square}
                  alt="props"
                  className="skills__props-square--2"
                />
                <img
                  src={altLogo}
                  alt="props"
                  className="skills__props-alt-logo"
                />
              </div>
              <ul className="skills__list">
                <Skills />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me">
        <div className="container">
          <div className="about-me__content">
            <div className="about-me__info">
              <h1 className="main-title">
                <span className="hashtag">#</span>
                {t.aboutMe}
              </h1>
            </div>
            <div className="about-me__main-content">
              <div className="about-me__text">
                <p className="about-me__text about-me__text--1">
                  {t.aboutMeText}
                </p>
                <p className="about-me__text about-me__text--2">
                  {t.aboutMeText2}
                </p>
                <p className="about-me__text about-me__text--3">
                  {t.aboutMeText3}
                </p>
                <a
                  href="./src/price/price.html"
                  className="button"
                  data-anim="previewBtn"
                >
                  <span>{t.contactMe}</span>
                </a>
              </div>
              <div className="about-me__image">
                <img
                  src={aboutLogo}
                  alt="man-with-headset"
                  className="logo__man"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="contact__content">
            <h1 className="main-title">
              <span className="hashtag">#</span>
              {t.contact}
            </h1>
          </div>
          <div className="contact__main-content">
            <div className="contact__info">
              <p className="contact__text">{t.contactText}</p>
            </div>
            <div className="contact__message">
              <p className="contact__message-text">
                {t.contactMessage}
              </p>
              <div className="contact__info-links">
                <p className="contact__link contact__link--email">deitywater@gmail.com</p>
                <p className="contact__link contact__link--telegram">@deitywater</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;


