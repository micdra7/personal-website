import { LinkButton } from 'components/link-button';
import { useTranslation } from 'react-i18next';
import { IProject } from 'utils/types';

import styles from './project-card.module.scss';

export const ProjectCard = ({
  name,
  description,
  photo,
  alt,
  frontendRepoUrl,
  backendRepoUrl,
  liveUrl,
  tech,
}: IProject) => {
  const { t } = useTranslation();

  return (
    <div className={styles['project-card']}>
      <header className={styles['project-card__header']}>
        <img src={photo} alt={alt} className={styles['project-card__photo']} />
      </header>
      <h5 className={styles['project-card__name']}>{t(name)}</h5>
      <p className={styles['project-card__description']}>{t(description)}</p>
      <section className={styles['project-card__tech']}>
        {t('text.projects.techUsed')}
        <ul className={styles['project-card__tech-list']}>
          {tech.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className={styles['project-card__buttons']}>
        {frontendRepoUrl && (
          <LinkButton
            href={frontendRepoUrl}
            text={t('buttons.frontendRepository')}
            openInNewTab
            variant="small"
          />
        )}
        {backendRepoUrl && (
          <LinkButton
            href={backendRepoUrl}
            text={t('buttons.backendRepository')}
            openInNewTab
            variant="small"
          />
        )}
        {liveUrl && (
          <LinkButton
            href={liveUrl}
            text={t('buttons.liveSite')}
            openInNewTab
            variant="small"
          />
        )}
      </div>
    </div>
  );
};
