import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { getAllTasks } from "../../services/task-list/task-list-selectors";
import { removeAllTasks } from "../../services/task-list/task-list-slice";
import styles from "./app-header.module.scss";
import FilterOptions from "./filter/filter-options";

const AppHeader = () => {
  const dispatch = useAppDispatch();
  const allTasks = useAppSelector(getAllTasks);
  function handleRemoveButtonClick() {
    dispatch(removeAllTasks());
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Список&nbsp;задач</h1>
      <FilterOptions />
      <button
        className={styles.remove_button}
        type="button"
        onClick={handleRemoveButtonClick}
        disabled={!allTasks.length}
      >
        Удалить&nbsp;все
      </button>
    </header>
  );
};

export default AppHeader;
