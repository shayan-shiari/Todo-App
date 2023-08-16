import React from "react";
import styles from "./modal.module.scss";

const Modal = ({ isOpenFunc }) => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Add</h2>
        <form>
          <fieldset>
            <textarea autoFocus name="" id="" cols="30" rows="10"></textarea>
          </fieldset>
          <fieldset>
            <button type="submit">Add</button>
            <button type="reset" onClick={() => isOpenFunc(false)}>
              close
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Modal;
