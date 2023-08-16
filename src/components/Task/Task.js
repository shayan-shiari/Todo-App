import React from "react";
import styles from "./task.module.scss";

const Task = ({ text, status }) => {
  return (
    <div
      className={`${styles.container} ${
        status === "doneTasks" && styles.doneContainer
      }`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Task;
