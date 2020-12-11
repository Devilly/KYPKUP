import React from "react";

export default props => {
  var linkStyle = {
    display: 'block',
    marginLeft: '1em',
    textIndent: '-1em'
  };

  return (
    <li>
      <a style={linkStyle} href={props.url}>{props.title}</a>
    </li>
  );
};