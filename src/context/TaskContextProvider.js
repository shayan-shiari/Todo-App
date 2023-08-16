import React, { createContext, useReducer } from "react";
import { addTask } from "../helper/reducerFunctions";

const initialState = {
  todoTasks: [
    "Start with meditation, exercise & breakfast for a productive day",
    "Read to learn something new every day",
    "Learn something fresh & relevant",
  ],
  doingTasks: [
    "Engage & question in meetings",
    "Use time-blocking for effective days",
  ],
  doneTasks: [
    "Finished online course - check!",
    "Congratulate yourself for incorporating healthier habits into your lifestyle, like regular exercise or mindful eating",
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return addTask(state, action);
  }
};

export const taksContext = createContext(); //context

// this component wrapped all components to use context value
const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  return (
    <taksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </taksContext.Provider>
  );
};

export default TaskContextProvider;
