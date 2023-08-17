// to add Todo-Task and Doing-Task - Multi
const addTask = (state, action) => {
  const multiTask = action.value.map((item) => item);
  const addTaskType = action.addTaskType;
  return {
    ...state,
    [addTaskType]: state[addTaskType].concat(multiTask),
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

const updateTask = (state, action) => {
  state[action.status][action.index] = action.value;
  return {
    ...state,
  };
};

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
