import React from 'react';
import WidgetItem from './widget-item';

const WidgetList = (props) => {


  const widgetItems = props.keys.map((key) => {
    return (
      <WidgetItem
        title={key.title}
        address={key.address}
        key={key.key} />
    );
  });

  return (
    <div className="widget">
      <label className="widget--title">Your {props.title}</label>
      <div className="widget--container">
        {widgetItems}
      </div>
    </div>
  );
};

export default WidgetList;
