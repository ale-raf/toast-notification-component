/* eslint-disable react/prop-types */

const Button = ({ value, bgColor, onClick }) => {
  return (
    <button
      className="toast-btn"
      value={value}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
