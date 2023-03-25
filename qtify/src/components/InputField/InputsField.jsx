import React from "react";
import "./InputField.css";
function InputsField({ placeholder, ...props }) {
  console.log(props);
  return (
    <input
      className="input-field"
      type="text"
      placeholder={placeholder}
      {...props}
    />
  );
}

export default InputsField;
