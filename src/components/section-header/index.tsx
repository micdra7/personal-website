import styles from './section-header.module.scss';

interface ISectionHeader {
  text: string;
}

export const SectionHeader = ({ text }: ISectionHeader) => (
  <h1 className={styles['section-header']}>{text}</h1>
);
