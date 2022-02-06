import { useEffect, useRef } from 'react';

import styles from './layout.module.scss';

interface ILayout {
  children: JSX.Element | JSX.Element[] | null | undefined;
}

const timeouts: Record<string, NodeJS.Timeout | null> = {
  home: null,
  about: null,
  projects: null,
  contact: null,
};

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    const { id } = entry.target;
    if (entry.isIntersecting) {
      window.history.replaceState(null, '', `#${id}`);
      // hash is updated automatically, but navbar only needs to be updated after a timeout
      // as otherwise active link would be highlighted even if it wasn't actual scroll target
      timeouts[id] = setTimeout(() => {
        window.dispatchEvent(new Event('hashchange'));
      }, 200);
    } else {
      if (!!timeouts[id]) {
        const t = timeouts[id] as NodeJS.Timeout;
        clearTimeout(t);
      }
    }
  });
};

const observerOptions: IntersectionObserverInit = { threshold: 0.5 };

export const Layout = ({ children }: ILayout) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    if (containerRef.current) {
      containerRef.current.childNodes.forEach(child => {
        observer.observe(child as Element);
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.childNodes.forEach(child => {
          observer.unobserve(child as Element);
        });
      }
    };
  }, [containerRef]);

  return (
    <main className={styles.layout}>
      <div className={styles.layout__children} ref={containerRef}>
        {children}
      </div>
    </main>
  );
};
