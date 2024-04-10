/* eslint-disable react/prop-types */
import { Input } from "./Input";

export const Form = () => {
  return (
    <form action="#">
      <Input text="Top Left" id="top-left" />
      <Input text="Top Right" id="top-right" />
      <Input text="Bottom Right" id="bottom-right" />
      <Input text="Bottom Left" id="bottom-left" />
    </form>
  );
};
