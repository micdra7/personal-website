import styles from './layout.module.scss';

interface ILayout {
  children: JSX.Element | JSX.Element[] | null | undefined;
  centeredVertically?: boolean;
}

export const Layout = ({ children, centeredVertically }: ILayout) => (
  <main
    className={`${styles.layout} ${
      centeredVertically ? styles['layout--centered-v'] : ''
    }`}
  >
    <div className={styles.layout__children}>{children}</div>
  </main>
);
