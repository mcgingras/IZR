import React from 'react';

const WidgetItem = (props) => {


  return (
    <li className="widget--item">
      <h1 className="item--title">{props.title}</h1>
      <h3 className="item--subtitle">{props.address}</h3>
    </li>
  );
}

export default WidgetItem;
