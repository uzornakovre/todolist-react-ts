import { RootState } from "../store";

export const getAllTasks: (store: RootState) => Array<TTask> = (store) =>
  store.taskList.allTasks;
