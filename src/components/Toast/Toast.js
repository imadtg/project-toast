import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastsContext } from "../ToastsProvider/ToastsProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, id }) {
  const { dismissToast } = React.useContext(ToastsContext);
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}><VisuallyHidden>{variant}-</VisuallyHidden>{children}</p>
      <button className={styles.closeButton} onClick={() => dismissToast(id)} aria-label="Dismiss message" aria-live="off">
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
