import { LinkButton } from 'components/link-button';
import { SectionHeader } from 'components/section-header';
import { useTranslation } from 'react-i18next';

import styles from './contact.module.scss';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contact} id="contact">
      <SectionHeader text={t('headings.contact')} />
      <p className={styles.contact__text}>{t('text.contact.description')}</p>
      <LinkButton
        href="mailto:micdra7@gmail.com"
        text={t('buttons.sendMessage')}
        openInNewTab
      />
    </section>
  );
};
