import React, { useContext } from "react";
import styles from "./board.module.scss";
import { taksContext } from "../../../context/TaskContextProvider";
import Task from "../../Task/Task";

const Board = (props) => {
  const { title, status } = props;
  const { tasks, dispatch } = useContext(taksContext); //context
  const length = tasks[status].length;  // length of each task

  return (
    <div className={styles.container}>
      <div
        className={
          title === "Todo"
            ? styles.todo
            : title === "Doing 💪"
            ? styles.doing
            : styles.done
        }
      >
        <div className={styles.heading}>
          <p>{title}</p>
          <p>{length} Tasks</p>
        </div>
        <div>
          {tasks[status].map((item) => {
            return <Task text={item} status={status} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
