import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';



const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language];
  const [form, setForm] = useState({ name: '', email: '', title: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSending, setIsSending] = useState(false);

  const hideShadow = () => {
    const shadow = document.querySelector('.shadow-block-form');
    if (shadow) shadow.classList.add('hidden');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS env variables are not configured.',
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          title: form.title,
          reply_to: form.email,
          message: form.message,
        },
        {
          publicKey,
        }
      );

      setForm({ name: '', email: '', title: '', message: '' });
      setStatus({ type: 'success', message: t.contactFormSuccess });
      setTimeout(hideShadow, 1000);
    } catch (error) {
      console.error('EmailJS error', error);
      setStatus({ type: 'error', message: t.contactFormError });
      setTimeout(hideShadow, 1000);
    } finally {
      setIsSending(false);
    }
  };

    const handleBackdropClick = (event) => {
      // Закрываем форму только при клике по фону, а не по самой форме
      if (event.target === event.currentTarget) {
        hideShadow();
      }
    };

    return (
     <div
       className='shadow-block-form hidden'
       id='shadow-block-form'
       onClick={handleBackdropClick}
     >
       <section className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__input-wrapper">
            <label className="contact-form__label contact-form__label--name">
              <input
                name="name"
                type="text"
                value={form.name}
                placeholder={t.contactFormName}
                onChange={handleChange}
                required
                className="contact-form__input"
              />
            </label>
      
            <label className="contact-form__label contact-form__label--email">
              <input
                name="email"
                type="email"
                value={form.email}
                placeholder={t.contactFormEmail}
                onChange={handleChange}
                required
                className="contact-form__input"
              />
            </label>
          </div>
    
          <label className="contact-form__label contact-form__label--title">
            <input
              name="title"
              type="text"
              value={form.title}
              placeholder={t.contactFormTitle}
              onChange={handleChange}
              required
              className="contact-form__input"
            />
          </label>
          <label className="contact-form__label contact-form__label--message">
            <textarea
              name="message"
              value={form.message}
              placeholder={t.contactFormMessage}
              onChange={handleChange}
              required
              className="contact-form__textarea"
              rows="4"
            />
          </label>
    
          <button type="submit" className="button contact-form__submit" disabled={isSending}>
            {isSending ? t.contactFormSending : t.contactFormSubmit}
          </button>
    
          {status.message && (
            <p
              className={`contact-form__status contact-form__status--${status.type}`}
            >
              {status.message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

