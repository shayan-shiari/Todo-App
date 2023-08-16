// to add Todo-Task and Doing-Task
const addTask = (state, action) => {
  const addTaskType = action.addTaskType;
  state[addTaskType].push(action.value);
  return {
    ...state,
  };
};

// to delete Tasks
const deleteTask = (state, action) => {
  const task = action.status;
  return {
    ...state,
    [task]: state[task].filter((item, index) => index !== action.index),
  };
};

// to toggle tasks done or todo
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

export { addTask, deleteTask, toggleDone };
