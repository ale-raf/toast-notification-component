/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ToastPositionContext = createContext(null);

export const ToastPositionProvider = ({ children }) => {
  const [toastPosition, setToastPosition] = useState({
    position: "absolute",
    top: "5px",
    right: "15px",
    className: "right",
  });
  return (
    <ToastPositionContext.Provider value={{ toastPosition, setToastPosition }}>
      {children}
    </ToastPositionContext.Provider>
  );
};
