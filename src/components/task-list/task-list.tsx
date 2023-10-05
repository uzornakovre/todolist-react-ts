import styles from "./task-list.module.scss";
import Task from "../task/task";
import { useAppSelector } from "../../services/hooks";
import { getAllTasks } from "../../services/task-list/task-list-selectors";

const TaskList = () => {
  const allTasks = useAppSelector(getAllTasks);
  const tasks = allTasks.map((task: TTask) => (
    <Task key={task.id} content={task.value} id={task.id} />
  ));

  return <ul className={styles.task_list}>{tasks}</ul>;
};

export default TaskList;
