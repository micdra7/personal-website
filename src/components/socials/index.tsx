import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './socials.module.scss';

const links = [
  {
    id: 1,
    icon: <FaGithub />,
    url: 'https://github.com/micdra7',
    label: 'GitHub profile',
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/micha%C5%82-drabik-5497b4191/',
    label: 'LinkedIn profile',
  },
];

export const Socials = () => (
  <aside className={styles.socials}>
    {links.map(({ id, url, icon, label }) => (
      <a
        key={id}
        href={url}
        className={styles.socials__link}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={label}
      >
        {icon}
      </a>
    ))}
  </aside>
);
