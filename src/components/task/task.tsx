import styles from "./task.module.scss";
import { FC } from "react";

const Task: FC<TTaskProps> = ({ content, id, toggleTask, removeTask }) => {
  function handleRemoveClick() {
    removeTask(id);
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
