import React from 'react';
import githubIcon from '../assets/github-logo.svg';
import telegramIcon from '../assets/telegram-icon.svg';
import '../common/common-style/footer.scss';
import logo from '../assets/logo.svg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer__line"></div>
      <div className="container">
        <div className="footer__card">
          <div className="footer__main">
            <div className="footer__title-row">
              <span className="footer__name">
                <img src={logo} className="footer__logo" alt="logo" /> Deitywater
              </span>
              <span className="footer__email">deitywaterDev@gmail.com</span>
            </div>
            <p className="footer__role">{t.footerRole}</p>
          </div>

          <div className="footer__media">
            <span className="footer__media-title">{t.footerMedia}</span>
            <div className="footer__icons">
              <a
                href="https://github.com/Volkraft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <img src={telegramIcon} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>

        <p className="footer__copyright">
          {t.footerCopyPrefix}
          {currentYear}
          {t.footerCopySuffix}
        </p>
      </div>
    </footer>
  );
}

