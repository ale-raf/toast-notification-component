/* eslint-disable react/prop-types */

const Notification = ({
  icon,
  text,
  bgColor,
  activeClassName,
  positionClassName,
  onClick,
}) => {
  return (
    <div className={`notification ${activeClassName} ${positionClassName}`}>
      <i>{icon}</i>
      <p>{text}</p>
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

export default Notification;
