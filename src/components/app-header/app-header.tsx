import { useAppDispatch } from "../../services/hooks";
import { removeAllTasks } from "../../services/task-list/task-list-slice";
import styles from "./app-header.module.scss";
import FilterOptions from "./filter/filter-options";

const AppHeader = () => {
  const dispatch = useAppDispatch();
  function handleRemoveButtonClick() {
    dispatch(removeAllTasks());
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Список задач</h1>
      <FilterOptions />
      <button
        className={styles.remove_button}
        type="button"
        onClick={handleRemoveButtonClick}
      >
        Удалить все
      </button>
    </header>
  );
};

export default AppHeader;
