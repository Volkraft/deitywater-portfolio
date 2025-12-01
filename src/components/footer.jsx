import React from 'react';
import githubIcon from '../assets/github-logo.svg';
import telegramIcon from '../assets/telegram-icon.svg';
import '../common/common-style/footer.scss';
import logo from '../assets/logo.svg';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="footer">
        <div className="footer__line">

        </div>
        <div className="container">
        <div className="footer__card">
            <div className="footer__main">
            <div className="footer__title-row">
                <span className="footer__name"><img src={logo} className='footer__logo'/> Deitywater</span>
                <span className="footer__email">deitywater@gmail.com</span>
            </div>
            <p className="footer__role">Web designer and front-end developer</p>
            </div>

            <div className="footer__media">
            <span className="footer__media-title">Media</span>
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
            © Copyright 2022 - {currentYear}. Made by Deitywater
        </p>
        </div>
    </footer>
);
}


