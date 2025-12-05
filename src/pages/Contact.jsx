import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ContactForm from '../components/ContactForm.jsx';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isFormOpen, setIsFormOpen] = useState(true);

  useEffect(() => {
    document.title = t.pageTitleContact;
  }, [language, t]);

  return (
    <section className="contact contact--page">
      <div className="container">
        <div className="contact__content">
          <h1 className="main-title">
            <span className="hashtag">#</span>
            {t.contact}
          </h1>
          <h6 className="project__subtitle">{t.aboutMesubtitle}</h6>
        </div>
        <div className="contact__main-content">
            <div className='contact__main-wrapper'>
              <div className="contact__info contact__info--page">
                <p className="contact__text">{t.contactText}</p>
              </div>
              <h1 className="main-title">
              <span className="hashtag">#</span>
              {t.media}
              </h1>
            </div>
          <div className="contact__message">
              <p className="contact__message-text">{t.contactMessage}</p>
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
  );
}


