import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastsContext } from "../ToastsProvider/ToastsProvider";

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastsContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} handleDismiss={() => handleDismiss(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
