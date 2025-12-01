import React from 'react';
import ProjectsList from '../components/ProjectsList.jsx';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="project project--page">
      <div className="container">
        <div className="project__content">
          <div className="project__info">
            <h1 className="main-title">
              <span className="hashtag">#</span>
              {t.projects}
            </h1>
          </div>
          <ProjectsList />
        </div>
      </div>
    </section>
  );
}


