import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { skillsData } from '../data/data-skills';

function Skill({ item, t }) {
  return (
    <li className="skills__item">
      <h2 className="skills__title">{t[item.title]}</h2>
      <h6 className="skills__used">{item.used}</h6>
    </li>
  );
}

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  // Данные навыков - можно вынести в отдельный файл
  return (
    <>
      {skillsData.map((item, index) => (
        <Skill key={index} item={item} t={t} />
      ))}
    </>
  );
}


