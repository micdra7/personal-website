import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './navbar.module.scss';

const navbarLinks = [
  {
    id: 1,
    name: 'navbar.start',
    anchorId: 'home',
  },
  {
    id: 2,
    name: 'navbar.about',
    anchorId: 'about',
  },
  {
    id: 3,
    name: 'navbar.projects',
    anchorId: 'projects',
  },
  {
    id: 4,
    name: 'navbar.contact',
    anchorId: 'contact',
  },
];

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const scrollToAnchor = (id: string) => {
    window.location.hash = `#${id}`;
    toggleMenu();
  };

  return (
    <section className={styles.navbar}>
      <button
        className={`${styles.navbar__burger} ${
          menuVisible ? styles['navbar__burger--open'] : ''
        }`}
        onClick={toggleMenu}
      >
        <div className={styles.navbar__bar} />
        <div className={styles.navbar__bar} />
        <div className={styles.navbar__bar} />
      </button>

      <ul
        className={`${styles.navbar__nav} ${
          menuVisible ? styles['navbar__nav--open'] : ''
        }`}
      >
        {navbarLinks.map(({ id, name, anchorId }) => (
          <li key={id} className={styles.navbar__link}>
            <button
              className={`${styles.navbar__button} ${
                window.location.hash === `#${anchorId}` ||
                (`#${anchorId}` === '#home' && window.location.hash === '')
                  ? styles['navbar__button--active']
                  : ''
              }`}
              onClick={() => scrollToAnchor(anchorId)}
            >
              {t(name)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
