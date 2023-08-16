import React from "react";
import styles from "./board.module.scss";

const Board = (props) => {
  const { title } = props;

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
          <p>10 Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default Board;
