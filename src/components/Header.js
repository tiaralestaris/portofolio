import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const navItems = [
    { name: t('header.home'), link: '#home' },
    { name: t('header.about_me'), link: '#about' },
    { name: t('header.works'), link: '#works' },
    { name: t('header.services'), link: '#services' },
    { name: t('header.contact'), link: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full flex justify-between items-center py-8 px-24">
      <div className="flex font-bold uppercase">Tiara Lestari Subaran</div>
      <nav className="flex gap-8 font-semibold uppercase">
        {navItems.map((item) => (
          <a key={item.name} href={item.link}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
