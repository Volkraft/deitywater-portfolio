import React from 'react';
import { items } from '../data/data-project.js';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

function ProjectCard({ item, t }) {
  return (
    <li className="project__item">
      <img src={item.img} alt={item.title} className="project__img" />
      <h6 className="project__used">{item.used}</h6>
      <div className="project__main-info">
        <h2 className="project__title">{item.title}</h2>
        <div className="project__subtitle">{t[item.subtitleKey]}</div>
        <div className="project__btn-links">
          <a
            href={item.btn.link}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.btn.text}
          </a>
          {item.btn.text2 && (
            <a
              href={item.btn.link2}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.btn.text2}
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default function ProjectsList({ limit }) {
  const { language } = useLanguage();
  const t = translations[language];
  const visibleItems =
    typeof limit === 'number' ? items.slice(0, limit) : items;

  return (
    <ul className="project__list">
      {visibleItems.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} item={project} t={t} />
      ))}
    </ul>
  );
}


