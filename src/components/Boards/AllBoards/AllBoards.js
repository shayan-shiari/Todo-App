import React from "react";
import Board from "../Board/Board";
import styles from "./all-boards.module.scss";

const AllBoards = () => {

  // data of boards
  const data = [
    {
      title: "Todo",
      status: "todoTasks",
    },
    {
      title: "Doing 💪",
      status: "doingTasks",
    },
    {
      title: "Done 🎉",
      status: "doneTasks",
    },
  ];

  // all of boards gathered here
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return <Board {...item} key={index} />;
      })}
    </div>
  );
};

export default AllBoards;
