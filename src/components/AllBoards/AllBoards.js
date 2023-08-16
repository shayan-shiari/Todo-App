import React from "react";
import Board from "../Board/Board";
import styles from "./all-boards.module.css";

const AllBoards = () => {
  const data = [
    {
      status: "Todo",
    },
    {
      status: "Doing",
    },
    {
      status: "Done",
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((item) => {
        return <Board {...item} />;
      })}
    </div>
  );
};

export default AllBoards;
