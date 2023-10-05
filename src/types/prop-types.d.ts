type TNewTaskProps = {
  createTask: (inputValue: string) => void;
};

type TTaskListProps = {
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

type TTaskProps = {
  content: string;
  id: string;
} & TTaskListProps;
