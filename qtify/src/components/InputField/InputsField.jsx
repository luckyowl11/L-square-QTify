import React from "react";
import "./InputField.css";
function InputsField({ placeholder, className, textArea, ...props }) {
  // console.log(props);
  if (textArea) {
    return (
      <textarea className={`input-field ${className}`} placeholder={placeholder} />
    );
  }
  return (
    <input
      className={`input-field ${className}`}
      type="text"
      placeholder={placeholder}
      {...props}
    />
  );
}

export default InputsField;
