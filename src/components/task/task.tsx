import styles from "./task.module.scss";
import { useAppDispatch } from "../../services/hooks";
import {
  removeTask,
  toggleTask,
} from "../../services/task-list/task-list-slice";
import { FC } from "react";

interface ITaskProps {
  content: string;
  id: string;
  isComplete: boolean;
}

const Task: FC<ITaskProps> = ({ content, id, isComplete }) => {
  const dispatch = useAppDispatch();

  function handleRemoveClick(): void {
    dispatch(removeTask(id));
  }

  function handleTaskClick(): void {
    dispatch(toggleTask(id));
  }

  return (
    <li className={styles.task}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="taskcheck"
        id={id}
        onChange={handleTaskClick}
        checked={isComplete}
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
