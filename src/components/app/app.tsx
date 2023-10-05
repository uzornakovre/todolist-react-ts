import styles from "./app.module.scss";
import NewTask from "../new-task/new-task";
import TasksList from "../task-list/task-list";

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}></header>
      <main className={styles.content}>
        <NewTask />
        <TasksList />
      </main>
    </div>
  );
};

export default App;
