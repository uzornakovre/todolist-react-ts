import styles from "./app.module.scss";
import { useState } from "react";
import NewTask from "../new-task/new-task";
import TasksList from "../task-list/task-list";
import { TaskListContext } from "../../contexts/TaskListContext";

const App = () => {
  const [taskList, refreshTasksList] = useState<TTaskList>([]);

  function createTask(inputValue: string): void {
    if (inputValue) {
      refreshTasksList([
        {
          id: crypto.randomUUID(),
          value: inputValue,
          complete: false,
        },
        ...taskList,
      ]);
    }
  }

  function removeTask(id: string): void {
    refreshTasksList(taskList.filter((task) => task.id !== id));
  }

  function toggleTask(id: string): void {
    refreshTasksList([
      ...taskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete,
          };
        } else return { ...task };
      }),
    ]);
  }

  return (
    <TaskListContext.Provider value={taskList}>
      <div className={styles.app}>
        <header className={styles.header}></header>
        <main className={styles.content}>
          <NewTask createTask={createTask} />
          <TasksList removeTask={removeTask} toggleTask={toggleTask} />
        </main>
      </div>
    </TaskListContext.Provider>
  );
};

export default App;
