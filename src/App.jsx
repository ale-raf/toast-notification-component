import { useEffect, useState } from "react";
import { buttons } from "./data/buttons";
import { Button } from "./components/Button";
import { Toast } from "./components/Toast";
import { Form } from "./components/Form";
import { useToastPosition } from "./hooks/useToastPosition";
import { getToast } from "./utils/getToast";

export const App = () => {
  const [toasts, setToasts] = useState([]);

  const { toastPosition } = useToastPosition();

  // useEffect(() => {
  //   const newToasts = [...toasts];
  //   const timer = setTimeout(() => {
  //     if (newToasts.length) {
  //       newToasts.shift();
  //       setToasts(newToasts);
  //     }
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [toasts]);

  const openToast = (e) => {
    let toast = getToast(e);
    setToasts([...toasts, toast]);
  };

  const closeToast = (toast) => {
    setToasts(toasts.filter((t) => t.id !== toast.id));
  };

  return (
    <div className="app">
      <h1>Toast Notification Component</h1>
      <h3>Customize the position of the notifications :</h3>
      <Form />
      {buttons.map((button) => (
        <Button
          key={button.value}
          value={button.value}
          bgColor={button.color}
          onClick={(e) => openToast(e)}
        />
      ))}
      <div style={toastPosition}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            icon={toast.icon}
            message={toast.message}
            bgColor={toast.color}
            onClick={() => closeToast(toast)}
          />
        ))}
      </div>
    </div>
  );
};
