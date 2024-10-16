import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>✔️ Task List</p>
      </div>
      <div className={styles.paragraphs}>
        <p>Break your life to simple tasks to get things done!</p>
        <p>
          Does not matter how many tasks you done, It’s important to break to
          small tasks and be on progress.
        </p>
      </div>
    </div>
  );
};

export default Header;
