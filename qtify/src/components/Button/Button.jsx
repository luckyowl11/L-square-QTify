import React from "react";
import "./Button.css";

function Button({ children, primary, secondary, other, ...props }) {
  let variant = "";

  if (primary) variant = "primary";
  else if (secondary) variant = "secondary";
  else variant = "other";

  return (
    <button className={`btn ${variant} ${props.className}`}>{children}</button>
  );
}

export default Button;
