import Sidebar from './Sidebar';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
