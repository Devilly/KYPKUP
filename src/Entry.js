import React from "react";

export default props => {
  return (
    <li>
      <a href={props.url}>{props.title}</a>
    </li>
  );
};