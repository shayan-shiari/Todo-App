import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./task.module.scss";
import { taksContext } from "../../context/TaskContextProvider";
import { useDrag } from "react-dnd";

const Task = ({ text, status, index, title }) => {
  const { dispatch } = useContext(taksContext); //context
  const [showUpDateTask, setShowUpdateTask] = useState(false);
  const refInp = useRef();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { index, status, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (refInp.current) {
      refInp.current.value = text;
      console.log("render");
    }
  });

  const timerHandler = (e) => {
    setTimeout(() => {
      dispatch({
        type: "TOGGLE_DONE",
        index,
        status,
        value: !e.target.checked,
      });
    }, 3000);
  };

  return (
    <div
      ref={drag}
      className={`${styles.container} ${
        title === "Todo"
          ? styles.todo
          : title === "Doing 💪"
          ? styles.doing
          : styles.done
      }
     `}
    >
      <input
        onChange={timerHandler}
        checked={status === "doneTasks" && true}
        type="checkbox"
      />
      {!showUpDateTask && <p onClick={() => setShowUpdateTask(true)}>{text}</p>}
      {showUpDateTask && (
        <textarea
          ref={refInp}
          className={styles.updateInput}
          autoFocus
          type="text"
          onMouseLeave={() => {
            setShowUpdateTask(false);
            dispatch({
              type: "UPDATE_TASK",
              index,
              status,
              value: refInp.current.value,
            });
          }}
        />
      )}
      <div
        className={styles.deleteBtn}
        onClick={() => dispatch({ type: "DELETE_TASK", index, status })}
      >
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Task;
