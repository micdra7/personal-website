import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './socials.module.scss';

const links = [
  {
    id: 1,
    icon: <FaGithub />,
    url: 'https://github.com/micdra7',
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/micha%C5%82-drabik-5497b4191/',
  },
];

export const Socials = () => (
  <aside className={styles.socials}>
    {links.map(({ id, url, icon }) => (
      <a
        key={id}
        href={url}
        className={styles.socials__link}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {icon}
      </a>
    ))}
  </aside>
);
