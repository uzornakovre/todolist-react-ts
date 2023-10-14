type TTask = {
  id: string;
  value: string;
  isComplete: boolean;
};

type TTaskList = Array<TTask>;

type TShowMode = "all" | "done" | "current";

type TFilterOption = {
  name: string;
  value: TShowMode;
};

type TFilterOptions = Array<TFilterOption>;

type TFilteredTasks = {
  [name: string]: TTaskList;
};
