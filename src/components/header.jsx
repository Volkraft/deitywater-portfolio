import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import github from '../assets/github-logo.svg';
import telegram from '../assets/telegram-icon.svg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'works', path: '/projects' },
  { key: 'about-me', path: '/about' },
  { key: 'contacts', path: '/contact' },
];

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const menuRef = useRef(null);
  const t = translations[language];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsMenuOpen(false);
  };

  const handleBurgerToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleNavClick = () => {
    setIsBurgerOpen(false);
  };

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
          <a
            href="https://github.com/Volkraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <img src={telegram} alt="Telegram" />
          </a>
        </div>
      </div>
      <div className="container">
        <div className="header__content">
          <NavLink to="/" className="header__title" onClick={handleNavClick}>
            <img src={logo} className="header__logo" alt="logo" />
            <span className="header__title-text">Deitywater</span>
          </NavLink>
          <button 
            className={`burger ${isBurgerOpen ? 'burger--open' : ''}`}
            onClick={handleBurgerToggle}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`menu ${isBurgerOpen ? 'menu--open' : ''}`} id="menu">
            <ul className="menu__list">
              {navLinks.map((link) => (
                <li className="menu__item" key={link.key}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `anchor-link ${isActive ? 'anchor-link--active' : ''}`
                    }
                    onClick={handleNavClick}
                  >
                    <span className="hashtag">#</span>
                    {t[link.key]}
                  </NavLink>
                </li>
              ))}
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
                    {['en', 'ru', 'tr', 'ja'].map((lang) => (
                      <li className="sublist__item" key={lang}>
                        <button
                          className="anchor-link"
                          onClick={() => handleLanguageChange(lang)}
                        >
                          {lang.toUpperCase()}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <div className="menu__social">
              <a
                href="https://github.com/Volkraft"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                <img src={github} alt="GitHub" />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}


