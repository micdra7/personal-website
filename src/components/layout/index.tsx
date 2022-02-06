import { useEffect, useRef } from 'react';

import styles from './layout.module.scss';

interface ILayout {
  children: JSX.Element | JSX.Element[] | null | undefined;
}

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.location.hash = `#${entry.target.id}`;
    }
  });
};

const observerOptions: IntersectionObserverInit = { threshold: 0.8 };

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
