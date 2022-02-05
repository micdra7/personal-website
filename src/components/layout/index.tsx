import styles from './layout.module.scss';

interface ILayout {
  children: JSX.Element | JSX.Element[] | null | undefined;
}

export const Layout = ({ children }: ILayout) => (
  <main className={styles.layout}>
    <div className={styles.layout__children}>{children}</div>
  </main>
);
