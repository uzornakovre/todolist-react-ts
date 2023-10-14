import { RootState } from "../store";

export const getAllTasks: (store: RootState) => Array<TTask> = (store) =>
  store.taskList.allTasks;
export const getShowMode: (store: RootState) => TShowMode = (store) =>
  store.taskList.showMode;
