import React from "react";
import { Input } from "antd";
function TextInput(props) {
  return (
    <label>
      {props.placeholder}:
      <Input
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.value}
      />
    </label>
  );
}

export default TextInput;
