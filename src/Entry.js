import React from "react";
import Icon from "./Icon";

export default props => {
  return (
    <li>
      <Icon source={props.source} />
      <a href={props.url}>{props.title}</a>
    </li>
  );
};