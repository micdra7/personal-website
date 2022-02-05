import styles from './link-button.module.scss';

interface ILinkButton {
  href: string;
  text: string;
  openInNewTab?: boolean;
}

const getPropsForNewTabLink = (openInNewTab: boolean) =>
  openInNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer nofollow',
      }
    : {};

export const LinkButton = ({ href, text, openInNewTab }: ILinkButton) => (
  <a
    className={styles['link-button']}
    href={href}
    {...getPropsForNewTabLink(openInNewTab ?? false)}
  >
    {text}
  </a>
);
