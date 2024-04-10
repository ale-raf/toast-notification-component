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
    const id = Date.now();
    let notification = { id };
    switch (event.target.value) {
      case "Success":
        notification = {
          ...notification,
          message: "Success toast notification",
          color: "#22c55e",
          icon: "✅",
        };
        break;
      case "Info":
        notification = {
          ...notification,
          message: "Info toast notification",
          color: "#3b82f6",
          icon: "ℹ️",
        };
        break;
      case "Warning":
        notification = {
          ...notification,
          message: "Warning toast notification",
          color: "#f97316",
          icon: "⚠️",
        };
        break;
      case "Error":
        notification = {
          ...notification,
          message: "Error toast notification",
          color: "#ef4444",
          icon: "❌",
        };
        break;
    }
    return notification;
  };

  const handleClick = (e) => {
    let notification = getNotification(e);

    // let myIndex = newToasts.indexOf(myNotif);

    setToasts([...toasts, notification]);

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
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
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
