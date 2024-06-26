import React from "react";
import useOnKey from "../../hooks/use-on-key";

export const ToastsContext = React.createContext();

function ToastsProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const dismissToast = React.useCallback(function handleDismiss(id) {
    setToasts((t) => t.filter((toast) => toast.id !== id));
  }, []);
  const addToast = React.useCallback(function addToast(message, variant) {
    setToasts((t) => [...t, { message, variant, id: crypto.randomUUID() }]);
  }, []);
  const value = React.useMemo(
    () => ({ toasts, dismissToast, addToast }),
    [toasts, dismissToast, addToast]
  );
  useOnKey(
    "Escape",
    React.useCallback(() => setToasts([]), [])
  );
  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
}

export default ToastsProvider;
