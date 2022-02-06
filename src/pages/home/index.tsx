import { LinkButton } from 'components/link-button';
import { useTranslation } from 'react-i18next';

import styles from './home.module.scss';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home} id="home">
      <p className={styles.home__greeting}>{t('extra.greeting')}</p>
      <h1 className={styles.home__heading}>Michał Drabik</h1>
      <h3 className={styles.home__subheading}>{t('subheadings.title')}</h3>

      <p className={styles.home__text}>{t('text.home.description')}</p>

      <LinkButton href="mailto:micdra7@gmail.com" text={t('buttons.contact')} />
    </section>
  );
};
