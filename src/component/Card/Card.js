import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import classes from "./Card.module.scss";
const Example = props => {
  return (
    <div>
      <Card className={`${props.classes} ${classes.container}`}>
        <CardImg
          top
          width="100%"
          src={props.img}
          alt="Card image cap"
          style={{ height: "20rem" }}
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button color="primary" onClick={props.onClick}>
            {props.btnText}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
