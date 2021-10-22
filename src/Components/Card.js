import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //"card "= as a default class, always applied("space ")

  return <div className={classes}>{props.children}</div>;
};

export default Card;
