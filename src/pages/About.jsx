import React from 'react';
import aboutLogo from '../assets/about-me.svg';
import dots from '../assets/dots.svg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="about-me about-me--page">
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
            </div>
            <div className="about-me__image">
              <img
                src={aboutLogo}
                alt="man-with-headset"
                className="logo__man"
              />
              <img
                src={dots}
                alt="decor dots"
                className="about-me__decor about-me__decor--dots"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


