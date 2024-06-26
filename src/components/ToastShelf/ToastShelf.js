import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastsContext } from "../ToastsProvider/ToastsProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastsContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
