import React, { useState, useContext } from "react";
import styles from "./modal.module.scss";
import { toast } from "react-hot-toast";
import { taksContext } from "../../context/TaskContextProvider";

const Modal = ({ isOpenFunc, status }) => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(taksContext); //context
  const multilineValue = inputValue.split(/\r?\n/);

  const formHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.error("please add a task");
    } else {
      isOpenFunc(false);
      dispatch({
        type: "ADD_TASK",
        value: multilineValue,
        addTaskType: status,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Add {status}</h2>
        <form onSubmit={formHandler}>
          <fieldset>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
              cols="30"
              rows="10"
            ></textarea>
          </fieldset>
          <fieldset>
            <button type="submit">Add</button>
            <button type="reset" onClick={() => isOpenFunc(false)}>
              Close
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Modal;
