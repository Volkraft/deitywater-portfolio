import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.svg';
import square from '../assets/square.svg';
import dots from '../assets/dots.svg';
import altLogo from '../assets/alt.logo.svg';
import aboutLogo from '../assets/about-me.svg';
import ProjectsList from '../components/ProjectsList.jsx';
import Skills from '../components/skills.jsx';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ContactForm from '../components/ContactForm.jsx';


export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
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
                <button
                  id="contact-me-btn"
                  className="button button--contact"
                  onClick={() => {
                    const form = document.getElementById('shadow-block-form');
                    if (form) {
                      form.classList.remove('hidden');
                    }
                  }}
                >
                  <span>{t.contactMe}</span>
                </button>
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
          <figcaption className="quoteAuthor">{t.quoteAuthor}</figcaption>
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
              <Link className="project__link" to="/projects">
                {t.viewAll} {'~~>'}
              </Link>
            </div>
            <ProjectsList limit={3} />
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
              <p className="contact__message-text">{t.contactMessage}</p>
              {/* <ContactForm /> */}
              <div className="contact__links">
                <p className="contact__link contact__link--email">
                  deitywaterDev@gmail.com
                </p>
                <p className="contact__link contact__link--telegram">
                  @deitywater
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}


