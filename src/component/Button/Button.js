import React from "react";
import classes from "./Button.module.scss";

const Button = props => {
  return (
    <div className={`${classes.container} ${props.classes}`}>
      <button
        id={props.id}
        className={classes.btn}
        onClick={props.onClick}
        title={props.title}
        disabled={props.disabled}
        name={props.name}
        style={{ ...props.style }}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
