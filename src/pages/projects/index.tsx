import { ProjectCard } from 'components/project-card';
import { SectionHeader } from 'components/section-header';
import { useTranslation } from 'react-i18next';
import { IProject } from 'utils/types';

import cardGame from './images/card-matching-game.png';
import engineeringProject from './images/engineering-project.png';
import personalWebsite from './images/personal-website.png';
import styles from './projects.module.scss';

const games: IProject[] = [
  {
    id: 1,
    name: 'text.projects.engineeringProject.name',
    description: 'text.projects.engineeringProject.description',
    photo: engineeringProject,
    alt: 'text.projects.cardMatchingGame.name',
    frontendRepoUrl: '123',
    backendRepoUrl: '123',
    liveUrl: '123',
    tech: [
      'React',
      'NestJS',
      'TypeScript',
      'ChakraUI',
      'React Query',
      'WebSockets',
      'WebRTC',
    ],
  },
  {
    id: 2,
    name: 'text.projects.personalWebsite.name',
    description: 'text.projects.personalWebsite.description',
    photo: personalWebsite,
    alt: 'text.projects.personalWebsite.name',
    frontendRepoUrl: 'https://github.com/micdra7/personal-website',
    liveUrl: 'https://mdrabik.dev/',
    tech: ['React', 'TypeScript', 'SCSS'],
  },
  {
    id: 3,
    name: 'text.projects.cardMatchingGame.name',
    description: 'text.projects.cardMatchingGame.description',
    photo: cardGame,
    alt: 'text.projects.cardMatchingGame.name',
    frontendRepoUrl: 'https://github.com/micdra7/card-match-game',
    liveUrl: 'https://micdra7.github.io/card-match-game/#/',
    tech: ['React', 'Redux', 'SCSS'],
  },
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.projects} id="projects">
      <SectionHeader text={t('headings.projects')} />
      {games.map(game => (
        <ProjectCard key={game.id} {...game} />
      ))}
    </section>
  );
};
