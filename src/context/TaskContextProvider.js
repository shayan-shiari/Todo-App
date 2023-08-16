import React, { createContext, useReducer } from "react";

const initialState = {
  todoTasks: [],
  doingTasks: [],
  doneTasks: [],
};

const reducer = () => {};

export const taksContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  return <taksContext.Provider>{children}</taksContext.Provider>;
};

export default TaskContextProvider;
