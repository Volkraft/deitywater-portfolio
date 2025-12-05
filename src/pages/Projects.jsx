import React, { useEffect } from 'react';
import ProjectsList from '../components/ProjectsList.jsx';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import SmallProjectList from '../components/SmallProjectList.jsx';
import Facts from '../components/Facts.jsx';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = t.pageTitleProjects;
  }, [language, t]);

  return (
    <section className="project project--page">
      <div className="container">
        <div className="project__content">
          <div className="project__info">
            <h1 className="main-title main-title--projects">
              <span className="hashtag">/</span>
              {t.projects}
            </h1>
            <h6 className="project__subtitle">{t.projectsSubtitle}</h6>
          </div>
          <h1 className="main-title main-title--projects-completed">
            <span className="hashtag">#</span>
            {t.projectscompleted}
          </h1>
          <ProjectsList />
          <h1 className="main-title main-title--small-projects-completed">
            <span className="hashtag">#</span>
            {t.projectsmallcompleted}
          </h1>
          <SmallProjectList/>

          <h1 className="main-title main-title--facts">
            <span className="hashtag">#</span>
            {t.projectsfacts}
          </h1>
          <ul className="facts__list">
            <Facts />
          </ul>
        </div>
      </div>
    </section>
  );
}


