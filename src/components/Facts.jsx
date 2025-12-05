import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { factsData } from '../data/data-facts.js';

function FactItem({ item, t }) {
  return (
    <li className="facts__item">
      <h6 className="facts__used">{t[item.factKey]}</h6>
    </li>
  );
}

export default function Facts() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {factsData.map((item, index) => (
        <FactItem key={index} item={item} t={t} />
      ))}
    </>
  );
}
