import React from "react";

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
  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
}

export default ToastsProvider;
