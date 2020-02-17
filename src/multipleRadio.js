import React from "react";
import { Checkbox } from "antd";
function MulitpleRadios(props) {
  return (
    <label>
      {props.name}:
      <Checkbox.Group options={props.plainOptions} onChange={props.onChange} />
      <br />
    </label>
  );
}

export default MulitpleRadios;
