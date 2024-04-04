import { useState } from "react";
import Button from "./Button";
import Notification from "./Notification";
import Form from "./Form";

function App() {
  const toastsList = [
    {
      btnValue: "Success",
      notifText: "Success toast notification",
      notifIcon: "✅",
      color: "#22c55e",
      active: false,
    },
    {
      btnValue: "Info",
      notifText: "Info toast notification",
      notifIcon: "ℹ️",
      color: "#3b82f6",
      active: false,
    },
    {
      btnValue: "Warning",
      notifText: "Warning toast notification",
      notifIcon: "⚠️",
      color: "#f97316",
      active: false,
    },
    {
      btnValue: "Error",
      notifText: "Error toast notification",
      notifIcon: "❌",
      color: "#ef4444",
      active: false,
    },
  ];

  const [toasts, setToasts] = useState([...toastsList]);
  const [notificationsPosition, setNotificationsPosition] = useState({
    position: "absolute",
    top: "5px",
    right: "15px",
  });

  const handleChange = (e) => {
    switch (e.target.id) {
      case "top-left":
        setNotificationsPosition({
          position: "absolute",
          left: "15px",
          top: "5px",
        });
        break;
      case "bottom-left":
        setNotificationsPosition({
          position: "absolute",
          left: "15px",
          bottom: "5px",
        });
        break;
      case "bottom-right":
        setNotificationsPosition({
          position: "absolute",
          right: "15px",
          bottom: "5px",
        });
        break;
      default:
        setNotificationsPosition({
          position: "absolute",
          right: "15px",
          top: "5px",
        });
        break;
    }
  };

  const handleClick = (e, index) => {
    let newToasts = [...toasts];
    newToasts[index].active = e.target.className === "toast-btn" ? true : false;
    setToasts(newToasts);
    // notifications loose active status after 5 seconds
    setTimeout(() => {
      newToasts = [...toasts];
      newToasts[index].active = false;
      setToasts(newToasts);
    }, 4000);
  };

  return (
    <div className="app">
      <h1>Toast Notification Component</h1>
      <h3>Customize the position of the notifications :</h3>
      <Form onChange={(e) => handleChange(e)} />
      {toasts.map((toast, index) => (
        <Button
          key={toast.btnValue}
          value={toast.btnValue}
          bgColor={toast.color}
          onClick={(e) => handleClick(e, index)}
        />
      ))}
      <div style={notificationsPosition}>
        {toasts.map((toast, index) =>
          toast.active ? (
            <Notification
              key={toast.notifText}
              icon={toast.notifIcon}
              text={toast.notifText}
              bgColor={toast.color}
              activeClassName={toast.active ? "notification-active" : null}
              onClick={(e) => handleClick(e, index)}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
