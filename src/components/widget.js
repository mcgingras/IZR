import React  from 'react';
import FundItem from './fund-item';


const Widget = (props) => {

  // need to change state to the funditem component... this is not the spot to be keeping track of state.

  return (
    <div className="widget">
      <label className="widget--title">Your {props.title}</label>
      <div className="widget--container">
        <h1 className="widget--container-title">$104.43</h1>
        <FundItem urgent={false} />
        <FundItem urgent={true} />
      </div>
    </div>
  );


}

export default Widget;
