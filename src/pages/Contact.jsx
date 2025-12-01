import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import ContactForm from '../components/ContactForm.jsx';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isFormOpen, setIsFormOpen] = useState(true);

  return (
    <section className="contact contact--page">
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
            <div className="contact__info-links">
              <p className="contact__link contact__link--email">
                deitywater@gmail.com
              </p>
              <p className="contact__link contact__link--telegram">
                @deitywater
              </p>
            </div>
          </div>
          <div className="contact__message">
            <p className="contact__message-text">{t.contactMessage}</p>
            <button
              type="button"
              className="button contact__toggle"
              onClick={() => setIsFormOpen((prev) => !prev)}
            >
              {isFormOpen ? t.contactFormClose : t.contactFormOpen}
            </button>
            <div
              className={`contact-form-wrapper ${isFormOpen ? 'is-open' : ''}`}
            >
              {isFormOpen && <ContactForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


