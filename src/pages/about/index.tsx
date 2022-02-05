import { SectionHeader } from 'components/section-header';
import { useTranslation } from 'react-i18next';

import styles from './about.module.scss';

const tech = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'ChakraUI',
  'Fabric.js',
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about} id="about">
      <SectionHeader text={t('headings.about')} />
      <p className={styles.about__text}>{t('text.about.description1')}</p>
      <p className={styles.about__text}>{t('text.about.description2')}</p>
      <p className={styles.about__text}>
        {t('text.about.description3')}
        <ul className={styles.about__list}>
          {tech.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </p>
    </section>
  );
};
