import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';
import github from '../assets/github-logo.svg';
import telegram from '../assets/telegram-icon.svg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const t = translations[language];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsMenuOpen(false);
  };

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="social-header">
        <span className="social-header__line"></span>
        <div className="social-header__links">
          <a href="https://github.com/Volkraft" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={telegram} alt="Telegram" />
          </a>
        </div>
      </div>
      <div className="container">
        <div className="header__content">
          <a href='#!' className="header__title">
            <img src={logo} className="header__logo" alt="logo" />
            <span className="header__title-text">Deitywater</span>
          </a>
          <nav className="menu" id="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a
                  href="#!"
                  className="anchor-link"
                  style={{ color: 'white' }}
                >
                  {' '}
                  <span className="hashtag">#</span>
                  {t.home}
                </a>
              </li>
              <li className="menu__item">
                <a href="#!" className="anchor-link">
                  <span className="hashtag">#</span>
                  {t.works}
                </a>
              </li>
              <li className="menu__item">
                <a href="#!" className="anchor-link">
                  <span className="hashtag">#</span>
                  {t['about-me']}
                </a>
              </li>
              <li className="menu__item">
                <a href="#!" className="anchor-link">
                  <span className="hashtag">#</span>
                  {t.contacts}
                </a>
              </li>
              <li
                className={`menu__item ${isMenuOpen ? 'active' : ''}`}
                ref={menuRef}
              >
                <button
                  className="anchor-link anchor-link--sublist"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {language.toUpperCase()}
                </button>
                <div
                  className={`menu__wrapper-list menu__wrapper-list--second ${
                    isMenuOpen ? 'active' : ''
                  }`}
                >
                  <ul className="sublist sublist--first">
                    <li className="sublist__item">
                      <button
                        className="anchor-link"
                        onClick={() => handleLanguageChange('en')}
                      >
                        EN
                      </button>
                    </li>
                    <li className="sublist__item">
                      <button
                        className="anchor-link"
                        onClick={() => handleLanguageChange('ru')}
                      >
                        RU
                      </button>
                    </li>
                    <li className="sublist__item">
                      <button
                        className="anchor-link"
                        onClick={() => handleLanguageChange('tr')}
                      >
                        TR
                      </button>
                    </li>
                    <li className="sublist__item">
                      <button
                        className="anchor-link"
                        onClick={() => handleLanguageChange('ja')}
                      >
                        JA
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}


