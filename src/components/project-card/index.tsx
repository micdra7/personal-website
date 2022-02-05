import { LinkButton } from 'components/link-button';
import { useTranslation } from 'react-i18next';

import styles from './project-card.module.scss';

interface IProjectCard {
  name: string;
  description: string;
  photo: string;
  alt: string;
  repoUrl: string;
  liveUrl?: string;
}

export const ProjectCard = ({
  name,
  description,
  photo,
  alt,
  repoUrl,
  liveUrl,
}: IProjectCard) => {
  const { t } = useTranslation();

  return (
    <div className={styles['project-card']}>
      <header className={styles['project-card__header']}>
        <img src={photo} alt={alt} className={styles['project-card__photo']} />
      </header>
      <h5 className={styles['project-card__name']}>{t(name)}</h5>
      <p className={styles['project-card__description']}>
        {t(description)}

        <div className={styles['project-card__buttons']}>
          {repoUrl && (
            <LinkButton
              href={repoUrl}
              text={t('buttons.repository')}
              openInNewTab
            />
          )}
          {liveUrl && (
            <LinkButton
              href={liveUrl}
              text={t('buttons.liveSite')}
              openInNewTab
            />
          )}
        </div>
      </p>
    </div>
  );
};
