import React from "react";
import "./InputField.css";
function InputsField({  placeholder, ...props }) {
  return <input className="input-field" type="text" placeholder={placeholder} />;
}

export default InputsField;
