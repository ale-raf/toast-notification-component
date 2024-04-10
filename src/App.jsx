import { useState } from "react";
import { buttons } from "./data/buttons";
import { Button } from "./Button";
import { Toast } from "./Toast";
import { Form } from "./Form";
import { useToastPosition } from "./hooks/useToastPosition";

export const App = () => {
  const [toasts, setToasts] = useState([]);

  const { toastPosition } = useToastPosition();

  // const [notification, setNotification] = useState({
  //   message: "",
  //   icon: "",
  //   color: "",
  //   active: false,
  //   id: null,
  // });

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
    // let newNotif = {
    //   ...notification,
    //   message: myNotif.message,
    //   icon: myNotif.icon,
    //   color: myNotif.color,
    //   active: true,
    // };
    // setNotification(myNotif);
    const newToasts = [...toasts, myNotif];
    let myIndex = newToasts.indexOf(myNotif);
    newToasts[myIndex].active = true;
    setToasts(newToasts);

    // notifications loose active status after 4 seconds
    setTimeout(() => {
      //   newNotif = { ...notification, active: false };
      //   setNotification(newNotif);
      // let filteredToasts = newToasts.filter((toast) => toast.active === false);
      // newToasts = [...toasts, myNotif];
      newToasts[myIndex].active = false;
      setToasts(newToasts);
    }, 4000);
  };

  const closeToast = (index) => {
    const myToasts = [...toasts];
    myToasts[index].active = false;
    setToasts(myToasts);
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
        {toasts.map(
          (toast, index) =>
            toast.active && (
              <Toast
                key={index}
                icon={toast.icon}
                message={toast.message}
                bgColor={toast.color}
                activeClassName={toast.active ? "notification-active" : ""}
                onClick={() => closeToast(index)}
              />
            )
        )}
      </div>
    </div>
  );
};
