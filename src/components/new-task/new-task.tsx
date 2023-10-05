import styles from "./new-task.module.scss";
import { ChangeEvent, FC, FormEvent, useState } from "react";

const NewTask: FC<TNewTaskProps> = ({ createTask }) => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    createTask(inputValue);
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
      <button className={styles.submit} type="submit">
        Добавить
      </button>
    </form>
  );
};

export default NewTask;
