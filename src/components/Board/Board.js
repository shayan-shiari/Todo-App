import React from "react";
import styles from "./board.module.css";

const Board = (props) => {
  const { status } = props;

  return (
    <div
      className={
        status === "Todo"
          ? styles.todoContainer
          : status === "Doing"
          ? styles.doingContainer
          : styles.doneContainer
      }
    >
      <p>{status}</p>
    </div>
  );
};

export default Board;
