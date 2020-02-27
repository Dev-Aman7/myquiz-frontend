import React from "react";
import classes from "./Option.module.scss";
const Option = props => {
  let options = props.options.map(elem => {
    return (
      <option id={props.id} onChange={props.onChange} key={elem} value={elem}>
        {elem}
      </option>
    );
  });
  return (
    <div className={`${classes.container} ${props.classes}`}>
      <select
        className={classes.select}
        name={props.name}
        onChange={props.onChange}>
        {options}
      </select>
    </div>
  );
};

export default Option;
