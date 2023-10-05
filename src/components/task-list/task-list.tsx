import styles from "./task-list.module.scss";
import { FC, useContext } from "react";
import Task from "../task/task";
import { TaskListContext } from "../../contexts/TaskListContext";

const TaskList: FC<TTaskListProps> = ({ removeTask, toggleTask }) => {
  const taskList = useContext(TaskListContext);
  const tasks = taskList.map((task: TTask) => (
    <Task
      key={task.id}
      content={task.value}
      id={task.id}
      toggleTask={toggleTask}
      removeTask={removeTask}
    />
  ));

  return <ul className={styles.task_list}>{tasks}</ul>;
};

export default TaskList;
