import { useToastPosition } from "./hooks/useToastPosition";

/* eslint-disable react/prop-types */
export const Input = ({ text, id }) => {
  const { setToastPosition } = useToastPosition();

  const handleChange = (e) => {
    switch (e.target.id) {
      case "top-left":
        setToastPosition({
          position: "absolute",
          left: "15px",
          top: "5px",
          positionClassName: "left",
        });
        break;
      case "bottom-left":
        setToastPosition({
          position: "absolute",
          left: "15px",
          bottom: "5px",
          positionClassName: "left",
        });
        break;
      case "bottom-right":
        setToastPosition({
          position: "absolute",
          right: "15px",
          bottom: "5px",
          positionClassName: "right",
        });
        break;
      default:
        setToastPosition({
          position: "absolute",
          right: "15px",
          top: "5px",
          positionClassName: "right",
        });
        break;
    }
  };

  return (
    <label htmlFor={id}>
      <input
        type="radio"
        name="toastPosition"
        id={id}
        onChange={(e) => handleChange(e)}
      />
      {text}
    </label>
  );
};
