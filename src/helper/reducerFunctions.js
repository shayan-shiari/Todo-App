// to add Todo-Task and Doing-Task
const addTask = (state, action) => {
  const addTaskType = action.addTaskType;
  state[addTaskType].push(action.value);
  return {
    ...state,
  };
};

export { addTask };
