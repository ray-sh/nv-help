import React from "react";
import { Radio } from "antd";
function CommonRadio(props) {
  return (
    <label>
      {props.placeholder}:
      <Radio.Group onChange={props.handleChange} value={props.value}>
        {props.radios.map(r => (
          <Radio key={r} value={r}>
            {r}
          </Radio>
        ))}
      </Radio.Group>
    </label>
  );
}

export default CommonRadio;
