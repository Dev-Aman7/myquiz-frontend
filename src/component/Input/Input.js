import React, { Component } from "react";
import classes from "./Input.module.scss";
import PropTypes from "prop-types";
class Input extends Component {
  toggleText = () => {
    const element = document.getElementById(this.props.id);
    const eleIcon = document.getElementById(this.props.id + "_pwd"); //to make the id unique we have added _pwd

    const currType = element.type;
    if (currType === "text") {
      eleIcon.classList.remove("fa", "fa-eye-slash");
      eleIcon.classList.add("fa", "fa-eye");
      element.type = "password";
    } else {
      element.type = "text";
      eleIcon.classList.remove("fa", "fa-eye");
      eleIcon.classList.add("fa", "fa-eye-slash");
    }
  };

  render() {
    return (
      <div className={`${classes.container} ${this.props.classes}`}>
        <input
          className={classes.btn}
          placeholder={this.props.placeholder}
          type={this.props.type}
          id={this.props.id}
          pattern={this.props.pattern}
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
        />
        {this.props.type === "password" ? (
          <i
            id={this.props.id + "_pwd"}
            className={[classes.icon, "fa fa-eye"].join(" ")}
            onClick={this.toggleText}></i>
        ) : null}
      </div>
    );
  }
}

Input.prototypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
