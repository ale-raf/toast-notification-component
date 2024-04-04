import { useState } from "react";
import Button from "./Button";
import Notification from "./Notification";

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
    setInterval(() => {}, 5);
    setTimeout(() => {
      newToasts = [...toasts];
      newToasts[index].active = false;
      setToasts(newToasts);
    }, 5000);
  };

  return (
    <div className="app">
      <h1>Toast Notification Component</h1>
      <h2>Customize the position of the notifications :</h2>
      <form action="#">
        <label htmlFor="top-left">
          <input
            type="radio"
            name="notificationsPosition"
            id="top-left"
            onChange={(e) => handleChange(e)}
          />
          Top Left
        </label>
        <label htmlFor="top-right">
          <input
            type="radio"
            name="notificationsPosition"
            id="top-right"
            onChange={(e) => handleChange(e)}
          />
          Top Right
        </label>
        <label htmlFor="bottom-right">
          <input
            type="radio"
            name="notificationsPosition"
            id="bottom-right"
            onChange={(e) => handleChange(e)}
          />
          Bottom Right
        </label>
        <label htmlFor="bottom-left">
          <input
            type="radio"
            name="notificationsPosition"
            id="bottom-left"
            onChange={(e) => handleChange(e)}
          />
          Bottom Left
        </label>
      </form>
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
