import React, { useContext, useState } from "react";
import styles from "./board.module.scss";
import { taksContext } from "../../../context/TaskContextProvider";
import Task from "../../Task/Task";
import Modal from "../../Modal/Modal";

const Board = (props) => {
  const { title, status } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { tasks, dispatch } = useContext(taksContext); //context
  const length = tasks[status].length; // length of each task

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
          {tasks[status].map((item, index) => {
            return <Task text={item} status={status} index={index} />;
          })}
          <p onClick={() => setIsOpen(!isOpen)}>new</p>
        </div>
      </div>
      {isOpen && <Modal isOpenFunc={setIsOpen} status={status} />}
    </div>
  );
};

export default Board;
