import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

function Homepage() {
  const { t } = useTranslation();
  return (
    <div className="flex w-screen h-screen items-center">
      <h1 className="font-bold text-2xl text-theme-light-gray">{t('homepage.hello')}</h1>
    </div>
  );
}

export default Homepage;
