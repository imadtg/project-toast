import React from "react";

export default function useOnKey(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event, ...args) {
      if (event.code === key) {
        callback(event, ...args);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [key, callback]);
}
