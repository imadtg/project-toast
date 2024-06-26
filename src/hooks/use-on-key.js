import React from "react";

export default function useOnKey(keycode, callback) {
  React.useEffect(() => {
    function handleKeyDown(event, ...args) {
      if (event.code === keycode) {
        callback(event, ...args);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keycode, callback]);
}
