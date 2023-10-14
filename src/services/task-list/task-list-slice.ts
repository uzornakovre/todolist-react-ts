import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITaskListState {
  allTasks: Array<TTask>;
  showMode: TShowMode;
}

export const initialState: ITaskListState = {
  allTasks: [],
  showMode: "all",
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
            isComplete: false,
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
    removeAllTasks: (state) => {
      return {
        ...state,
        allTasks: initialState.allTasks,
      };
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      console.log("test");
      return {
        ...state,
        allTasks: [
          ...state.allTasks.map((task) => {
            if (task.id === action.payload) {
              return {
                ...task,
                isComplete: !task.isComplete,
              };
            } else return { ...task };
          }),
        ],
      };
    },
    toggleShowMode: (state, action: PayloadAction<TShowMode>) => {
      return {
        ...state,
        showMode: action.payload,
      };
    },
  },
});

export const {
  createTask,
  removeTask,
  removeAllTasks,
  toggleTask,
  toggleShowMode,
} = taskListSlice.actions;

export default taskListSlice.reducer;
