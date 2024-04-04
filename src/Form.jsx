/* eslint-disable react/prop-types */
const Form = ({ onChange }) => {
  return (
    <form action="#">
      <label htmlFor="top-left">
        <input
          type="radio"
          name="notificationsPosition"
          id="top-left"
          onChange={onChange}
        />
        Top Left
      </label>
      <label htmlFor="top-right">
        <input
          type="radio"
          name="notificationsPosition"
          id="top-right"
          onChange={onChange}
        />
        Top Right
      </label>
      <label htmlFor="bottom-right">
        <input
          type="radio"
          name="notificationsPosition"
          id="bottom-right"
          onChange={onChange}
        />
        Bottom Right
      </label>
      <label htmlFor="bottom-left">
        <input
          type="radio"
          name="notificationsPosition"
          id="bottom-left"
          onChange={onChange}
        />
        Bottom Left
      </label>
    </form>
  );
};

export default Form;
