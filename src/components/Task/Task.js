import React, { useContext, useState } from "react";
import styles from "./task.module.scss";
import { taksContext } from "../../context/TaskContextProvider";
import { useDrag } from "react-dnd";

const Task = ({ text, status, index, title }) => {
  const { dispatch } = useContext(taksContext); //context
  const [showUpDateTask, setShowUpdateTask] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { index, status, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

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
        onChange={(e) => {
          dispatch({
            type: "TOGGLE_DONE",
            index,
            status,
            value: e.target.checked,
          });
        }}
        checked={status === "doneTasks" && true}
        type="checkbox"
      />
      {!showUpDateTask && <p onClick={() => setShowUpdateTask(true)}>{text}</p>}
      {showUpDateTask && (
        <input
          value={text}
          autoFocus
          type="text"
          onMouseLeave={(e) => setShowUpdateTask(false)}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TASK",
              index,
              status,
              value: e.target.value,
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
