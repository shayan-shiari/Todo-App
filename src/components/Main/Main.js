import React from "react";
import Header from "../Header/Header";
import styles from "./main..module.css";
import AllBoards from "../AllBoards/AllBoards";

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AllBoards />
    </div>
  );
};

export default Main;
