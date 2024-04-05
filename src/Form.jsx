/* eslint-disable react/prop-types */
import Input from "./Input";

const Form = ({ onChange }) => {
  return (
    <form action="#">
      <Input text="Top Left" id="top-left" onChange={onChange} />
      <Input text="Top Right" id="top-right" onChange={onChange} />
      <Input text="Bottom Right" id="bottom-right" onChange={onChange} />
      <Input text="Bottom Left" id="bottom-left" onChange={onChange} />
    </form>
  );
};

export default Form;
