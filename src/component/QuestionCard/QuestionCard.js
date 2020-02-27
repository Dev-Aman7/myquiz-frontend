import React from "react";
import Input from "../Input";
const QuestionCard = props => {
  return (
    <div>
      <Input
        type="text"
        name="Title"
        id={props.id}
        placeholder="enter the title"
        value={props.value}
        onChange={this.props.onChange}
      />
      <hr />
      <Input
        type="text"
        name="option1"
        id={props.id + "1"}
        placeholder="enter the option"
        value={props.value}
        onChange={this.props.onChange}
      />
      <Input
        type="option2"
        name={props.name}
        id={props.id + "2"}
        placeholder="enter the option"
        value={props.value}
        onChange={this.props.onChange}
      />
      <Input
        type="text"
        name="option3"
        id={props.id + "3"}
        placeholder="enter the option"
        value={props.value}
        onChange={this.props.onChange}
      />
      <Input
        type="text"
        name="option4"
        id={props.id + "4"}
        placeholder="enter the option"
        value={props.value}
        onChange={this.props.onChange}
      />
      <hr />
      <Input
        type="number"
        name="answer"
        id={props.id + "ans"}
        placeholder="answer"
        value={props.value}
        onChange={this.props.onChange}
      />
    </div>
  );
};

export default QuestionCard;
