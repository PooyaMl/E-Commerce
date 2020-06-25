import React from "react";
import "./button.styles.scss";

export default function Button({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}
