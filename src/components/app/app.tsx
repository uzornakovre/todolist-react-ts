import styles from "./app.module.scss";
import NewTask from "../new-task/new-task";
import TasksList from "../task-list/task-list";
import AppHeader from "../app-header/app-header";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <NewTask />
        <TasksList />
      </main>
    </div>
  );
};

export default App;
