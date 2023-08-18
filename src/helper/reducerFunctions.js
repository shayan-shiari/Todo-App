import { toast } from "react-hot-toast";

// to add Todo-Task and Doing-Task - Multi
const addTask = (state, action) => {
  toast.success("Task Added Successfully")
  const multiTask = action.value.map((item) => item);
  const addTaskType = action.addTaskType;
  return {
    ...state,
    [addTaskType]: state[addTaskType].concat(multiTask),
  };
};

// to delete Tasks
const deleteTask = (state, action) => {
  toast.success("Task Deleted Successfully")
  const task = action.status;
  return {
    ...state,
    [task]: state[task].filter((item, index) => index !== action.index),
  };
};

// to toggle Tasks done or todo
const toggleDone = (state, action) => {
  const task = action.status;
  const filteredValue = state[action.status].filter(
    (item, index) => index === action.index
  )[0];

  if (action.value) {
    state.doneTasks.unshift(filteredValue);
  } else {
    state.todoTasks.unshift(filteredValue);
  }
  return {
    ...state,
    [task]: state[task].filter((item, index) => index !== action.index),
  };
};

// to update Tasks
const updateTask = (state, action) => {
  console.log(action.value);
  state[action.status][action.index] = action.value;
  return {
    ...state,
  };
};

// to drag and drop Tasks
const dragAndDrop = (state, action) => {
  state[action.currentStatus].unshift(action.value);
  return {
    ...state,
    [action.prevStatus]: state[action.prevStatus].filter(
      (item, index) => index !== action.index
    ),
  };
};

export { addTask, deleteTask, toggleDone, updateTask, dragAndDrop };
