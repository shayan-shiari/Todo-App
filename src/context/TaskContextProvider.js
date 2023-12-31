import React, { createContext, useReducer, useEffect } from "react";
import {
  addTask,
  deleteTask,
  toggleDone,
  updateTask,
  dragAndDrop,
} from "../helper/reducerFunctions";

const initialState = JSON.parse(localStorage.getItem("tasks")) || {
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
    case "DELETE_TASK":
      return deleteTask(state, action);
    case "TOGGLE_DONE":
      return toggleDone(state, action);
    case "UPDATE_TASK":
      return updateTask(state, action);
    case "DRAG_DROP":
      return dragAndDrop(state, action);
  }
};

export const taksContext = createContext(); //context

// this component wrapped all components to use context value
const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  // when state(tasks) changes useEffect save state in localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <taksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </taksContext.Provider>
  );
};

export default TaskContextProvider;
