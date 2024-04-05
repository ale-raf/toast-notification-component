/* eslint-disable react/prop-types */
const Input = ({ text, id, onChange }) => {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        name="notificationsPosition"
        id={id}
        onChange={onChange}
      />
      {text}
    </label>
  );
};

export default Input;
