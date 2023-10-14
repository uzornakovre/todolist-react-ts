import styles from "./app-header.module.scss";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Список задач</h1>
    </header>
  );
};

export default AppHeader;
