import styles from "./new-task.module.scss";
import { useAppDispatch } from "../../services/hooks";
import { createTask } from "../../services/task-list/task-list-slice";
import { ChangeEvent, FormEvent, useState } from "react";

const NewTask = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    dispatch(createTask(inputValue));
    setInputValue("");
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>): void {
    setInputValue(evt.target.value);
  }

  return (
    <form className={styles.new_task} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Введите новую задачу"
        onChange={handleChange}
        value={inputValue || ""}
      ></input>
      <button
        className={styles.submit}
        type="submit"
        disabled={inputValue === ""}
      >
        Добавить
      </button>
    </form>
  );
};

export default NewTask;
