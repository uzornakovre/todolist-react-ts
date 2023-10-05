import styles from "./task.module.scss";
import { useAppDispatch } from "../../services/hooks";
import {
  removeTask,
  toggleTask,
} from "../../services/task-list/task-list-slice";
import { FC } from "react";

const Task: FC<TTaskProps> = ({ content, id }) => {
  const dispatch = useAppDispatch();

  function handleRemoveClick() {
    dispatch(removeTask(id));
  }

  function handleTaskClick() {
    toggleTask(id);
  }

  return (
    <li className={styles.task}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="taskcheck"
        id={id}
        onChange={handleTaskClick}
      ></input>
      <label className={styles.content} htmlFor={id}>
        {content}
      </label>
      <button
        className={styles.remove_button}
        type="button"
        onClick={handleRemoveClick}
      >
        Удалить
      </button>
    </li>
  );
};

export default Task;
