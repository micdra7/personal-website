import { LinkButton } from 'components/link-button';
import { useTranslation } from 'react-i18next';

import styles from './hero.module.scss';

export const Hero = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <p className={styles.hero__greeting}>{t('extra.greeting')}</p>
      <h1 className={styles.hero__heading}>Michał Drabik</h1>
      <h3 className={styles.hero__subheading}>{t('subheadings.title')}</h3>

      <p className={styles.hero__text}>{t('text.home.description')}</p>

      <LinkButton href="mailto:micdra7@gmail.com" text={t('buttons.contact')} />
    </section>
  );
};
