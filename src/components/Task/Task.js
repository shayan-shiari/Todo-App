import React, { useContext, useState } from "react";
import styles from "./task.module.scss";
import { taksContext } from "../../context/TaskContextProvider";

const Task = ({ text, status, index }) => {
  const { dispatch } = useContext(taksContext); //context
  const [showUpDateTask, setShowUpdateTask] = useState(false);

  return (
    <div
      className={`${styles.container} ${
        status === "doneTasks" && styles.doneContainer
      }`}
    >
      <input
        onChange={(e) => {
          dispatch({
            type: "TOGGLE_DONE",
            index,
            status,
            value: e.target.checked,
          });
        }}
        checked={status === "doneTasks" && true}
        type="checkbox"
      />
      {!showUpDateTask && <p onClick={() => setShowUpdateTask(true)}>{text}</p>}
      {showUpDateTask && (
        <input
          value={text}
          autoFocus
          type="text"
          onMouseLeave={(e) => setShowUpdateTask(false)}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TASK",
              index,
              status,
              value: e.target.value,
            });
          }}
        />
      )}
      <p onClick={() => dispatch({ type: "DELETE_TASK", index, status })}>
        delete
      </p>
    </div>
  );
};

export default Task;
