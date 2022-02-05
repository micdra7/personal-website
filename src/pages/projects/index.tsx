import { ProjectCard } from 'components/project-card';
import { SectionHeader } from 'components/section-header';
import { useTranslation } from 'react-i18next';

import cardGame from './images/card-matching-game.png';
import styles from './projects.module.scss';

const games = [
  {
    id: 1,
    name: 'text.projects.cardMatchingGame.name',
    description: 'text.projects.cardMatchingGame.description',
    photo: cardGame,
    alt: 'text.projects.cardMatchingGame.name',
    repoUrl: 'https://github.com/micdra7/card-match-game',
    liveUrl: 'https://micdra7.github.io/card-match-game/#/',
    tech: ['React', 'Redux', 'SCSS'],
  },
  {
    id: 2,
    name: 'text.projects.engineeringProject.name',
    description: 'text.projects.engineeringProject.description',
    photo: cardGame,
    alt: 'text.projects.cardMatchingGame.name',
    repoUrl: '',
    liveUrl: '',
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
