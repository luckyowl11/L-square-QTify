import React from "react";
import "./Button.css";

function Button({ children, primary, secondary, other, ...props }) {
  let variant = "";

  if (primary) variant = "primary";
  else if (secondary) variant = "secondary";
  else variant = "other";

  return (
    <buttton className={`btn ${variant} ${props.className}`}>
      {children}
    </buttton>
  );
}

export default Button;
