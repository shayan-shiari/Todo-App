// to add Todo-Task and Doing-Task
const addTask = (state, action) => {
  const addTaskType = action.addTaskType;
  state[addTaskType].push(action.value);
  return {
    ...state,
  };
};

const deleteTask = (state, action) => {
  const task = action.status;
  return {
    ...state,
    [task]: state[task].filter((item, index) => index !== action.index),
  };
};

export { addTask, deleteTask };
