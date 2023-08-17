import React, { useContext, useState } from "react";
import styles from "./board.module.scss";
import { taksContext } from "../../../context/TaskContextProvider";
import Task from "../../Task/Task";
import Modal from "../../Modal/Modal";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

const Board = (props) => {
  const { title, status } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { tasks, dispatch } = useContext(taksContext); //context
  const length = tasks[status].length; // length of each task

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (item) => {
    dispatch({
      type: "DRAG_DROP",
      index: item.index,
      prevStatus: item.status,
      currentStatus: status,
      value: item.text,
    });
  };

  return (
    <div ref={drop} className={`${styles.container} ${isOver && styles.cc}`}>
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
            return (
              <Task text={item} status={status} index={index} key={uuidv4()} />
            );
          })}
          <p onClick={() => setIsOpen(!isOpen)}>new</p>
        </div>
      </div>
      {isOpen && <Modal isOpenFunc={setIsOpen} status={status} />}
    </div>
  );
};

export default Board;
