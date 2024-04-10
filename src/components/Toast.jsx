import { useToastPosition } from "../hooks/useToastPosition";

/* eslint-disable react/prop-types */
export const Toast = ({ icon, message, bgColor, activeClassName, onClick }) => {
  const { toastPosition } = useToastPosition();

  return (
    <div
      className={`notification ${activeClassName} ${toastPosition.className}`}
      role="alert"
    >
      <i>{icon}</i>
      <p>{message}</p>
      <button className="notification-btn" onClick={onClick}>
        x
      </button>
      <div
        className="notification-border"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
};
