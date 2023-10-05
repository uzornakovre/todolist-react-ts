import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITaskListState {
  allTasks: Array<TTask>;
}

export const initialState: ITaskListState = {
  allTasks: [],
};

const taskListSlice = createSlice({
  name: "task-list",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        allTasks: [
          {
            id: crypto.randomUUID(),
            value: action.payload,
            complete: false,
          },
          ...state.allTasks,
        ],
      };
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== action.payload),
      };
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        allTasks: [
          ...state.allTasks.map((task) => {
            if (task.id === action.payload) {
              return {
                ...task,
                complete: !task.complete,
              };
            } else return { ...task };
          }),
        ],
      };
    },
  },
});

export const { createTask, removeTask, toggleTask } = taskListSlice.actions;

export default taskListSlice.reducer;
