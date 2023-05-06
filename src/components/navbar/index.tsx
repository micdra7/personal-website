import { useEffect, useRef, useState } from 'react';
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
  const navbarRef = useRef<HTMLDivElement>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  // navbarKey is used to trigger rerenders of navbar when window.location.hash changes
  // in order to properly highlight active section
  const [navbarKey, setNavbarKey] = useState(1);
  const [hasBackground, setHasBackground] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const scrollToAnchor = (id: string) => {
    window.location.hash = `#${id}`;
    toggleMenu();
  };

  const onHashChange = () => {
    const query = window.matchMedia('(min-width: 768px)');
    if (query.matches) {
      setNavbarKey(prev => prev + 1);
    }
  };

  const onScroll = () => {
    const query = window.matchMedia('(min-width: 768px)');
    if (
      query.matches &&
      navbarRef.current &&
      window.scrollY > navbarRef.current.getBoundingClientRect().height
    ) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    if (navbarRef.current) {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      if (navbarRef.current) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, [navbarRef]);

  return (
    <section
      className={`${styles.navbar} ${
        hasBackground ? styles['navbar--with-background'] : ''
      }`}
      ref={navbarRef}
    >
      <button
        className={`${styles.navbar__burger} ${
          menuVisible ? styles['navbar__burger--open'] : ''
        }`}
        onClick={toggleMenu}
        aria-label="Open navigation menu"
      >
        <div className={styles.navbar__bar} aria-hidden />
        <div className={styles.navbar__bar} aria-hidden />
        <div className={styles.navbar__bar} aria-hidden />
      </button>

      <ul
        className={`${styles.navbar__nav} ${
          menuVisible ? styles['navbar__nav--open'] : ''
        }`}
        key={navbarKey}
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
