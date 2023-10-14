import styles from "./app-header.module.scss";
import FilterOptions from "./filter/filter-options";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Список задач</h1>
      <FilterOptions />
      <button className={styles.remove_button} type="button">
        Удалить все
      </button>
    </header>
  );
};

export default AppHeader;
