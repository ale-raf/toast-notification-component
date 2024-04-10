import { useState } from "react";
import { buttons } from "./data/buttons";
import { Button } from "./components/Button";
import { Toast } from "./components/Toast";
import { Form } from "./components/Form";
import { useToastPosition } from "./hooks/useToastPosition";

export const App = () => {
  const [toasts, setToasts] = useState([]);

  const { toastPosition } = useToastPosition();

  const getNotification = (event) => {
    let notification = {};
    switch (event.target.value) {
      case "Success":
        notification = {
          message: "Success toast notification",
          active: false,
          color: "#22c55e",
          icon: "✅",
          id: Date.now(),
        };
        break;
      case "Info":
        notification = {
          message: "Info toast notification",
          active: false,
          color: "#3b82f6",
          icon: "ℹ️",
          id: Date.now(),
        };
        break;
      case "Warning":
        notification = {
          message: "Warning toast notification",
          active: false,
          color: "#f97316",
          icon: "⚠️",
          id: Date.now(),
        };
        break;
      case "Error":
        notification = {
          message: "Error toast notification",
          active: false,
          color: "#ef4444",
          icon: "❌",
          id: Date.now(),
        };
        break;
    }
    return notification;
  };

  const handleClick = (e) => {
    let myNotif = getNotification(e);

    // let myIndex = newToasts.indexOf(myNotif);

    // newToasts[myIndex].active = true;
    setToasts([...toasts, myNotif]);

    // notifications loose active status after 4 seconds
    setTimeout(() => {
      // newToasts[myIndex].active = false;
      // setToasts(newToasts);
    }, 1000);
  };

  const closeToast = (toast) => {
    setToasts(toasts.filter((t) => t.id !== toast.id));
  };

  return (
    <div className="app">
      <h1>Toast Notification Component</h1>
      <h3>Customize the position of the notifications :</h3>
      <Form />
      {buttons.map((button, index) => (
        <Button
          key={button.value}
          value={button.value}
          bgColor={button.color}
          onClick={(e) => handleClick(e, index)}
        />
      ))}
      <div style={toastPosition}>
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            icon={toast.icon}
            message={toast.message}
            bgColor={toast.color}
            activeClassName={"notification-active"}
            onClick={() => closeToast(toast)}
          />
        ))}
      </div>
    </div>
  );
};
