import { useContext } from "react";
import { ToastPositionContext } from "../contexts/toast-position.context";

export const useToastPosition = () => {
  const context = useContext(ToastPositionContext);
  if (!context) {
    throw new Error("The context of toast position is falsy");
  }
  return context;
};
