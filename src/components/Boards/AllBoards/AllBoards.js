import React from "react";
import Board from "../Board/Board";
import styles from "./all-boards.module.scss";

const AllBoards = () => {
  const data = [
    {
      title: "Todo",
    },
    {
      title: "Doing 💪",
    },
    {
      title: "Done 🎉",
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return <Board {...item} key={index} />;
      })}
    </div>
  );
};

export default AllBoards;
