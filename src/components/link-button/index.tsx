import styles from './link-button.module.scss';

interface ILinkButton {
  href: string;
  text: string;
  openInNewTab?: boolean;
  variant?: 'small' | 'normal';
}

const getPropsForNewTabLink = (openInNewTab: boolean) =>
  openInNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer nofollow',
      }
    : {};

export const LinkButton = ({
  href,
  text,
  openInNewTab,
  variant = 'normal',
}: ILinkButton) => (
  <a
    className={`${styles['link-button']} ${
      variant === 'small' ? styles['link-button--small'] : ''
    }`}
    href={href}
    {...getPropsForNewTabLink(openInNewTab ?? false)}
  >
    {text}
  </a>
);
