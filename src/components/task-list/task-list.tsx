import styles from "./task-list.module.scss";
import Task from "../task/task";
import { useAppSelector } from "../../services/hooks";
import {
  getAllTasks,
  getShowMode,
} from "../../services/task-list/task-list-selectors";
import { useEffect, useState } from "react";

const TaskList = () => {
  const showMode = useAppSelector(getShowMode);
  const allTasks = useAppSelector(getAllTasks);
  const [filteredTasks, setFilteredTasks] = useState<TFilteredTasks | null>(
    null
  );

  useEffect(() => {
    if (allTasks.length) {
      setFilteredTasks({
        all: allTasks,
        done: allTasks.filter((t) => t.isComplete),
        current: allTasks.filter((t) => !t.isComplete),
      });
    } else setFilteredTasks(null);
  }, [allTasks]);

  return (
    <ul className={styles.task_list}>
      {filteredTasks ? (
        filteredTasks[showMode].map((task: TTask) => (
          <Task
            key={task.id}
            content={task.value}
            id={task.id}
            isComplete={task.isComplete}
          />
        ))
      ) : (
        <p className={styles.tip_empty}>Задачи отсутсвуют</p>
      )}
    </ul>
  );
};

export default TaskList;
