import React, { useContext } from "react";
import styles from "./task.module.scss";
import { taksContext } from "../../context/TaskContextProvider";

const Task = ({ text, status, index }) => {
  const { dispatch } = useContext(taksContext); //context

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
      <p>{text}</p>
      <p onClick={() => dispatch({ type: "DELETE_TASK", index, status })}>
        delete
      </p>
    </div>
  );
};

export default Task;
