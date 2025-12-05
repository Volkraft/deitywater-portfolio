import React, { useEffect } from 'react';
import aboutLogo from '../assets/about-me.svg';
import dots from '../assets/dots.svg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import Skills from '../components/skills.jsx';
import Facts from '../components/Facts.jsx';


export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = t.pageTitleAbout;
  }, [language, t]);

  return (
    <section className="about-me about-me--page">
      <div className="container">
        <div className="about-me__content">
          <div className="about-me__info">
            <h1 className="main-title">
              <span className="hashtag">/</span>
              {t.aboutMe}
            </h1>
            <h6 className="project__subtitle">{t.aboutMesubtitle}</h6>
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
        <h1 className="main-title main-title--projects">
          <span className="hashtag">#</span>
          {t.skills}
        </h1>
        <ul className="skills__list skills__list--about">
          <Skills />
        </ul>
        <h1 className="main-title main-title--facts">
          <span className="hashtag">#</span>
          {t.projectsfacts}
        </h1>
        <ul className="skills__list skills__list--facts">
          <Facts />
        </ul>
      </div>
    </section>
  );
}


