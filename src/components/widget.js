import React  from 'react';
import FundItem from './fund-item';


const Widget = (props) => {

  // need to change state to the funditem component... this is not the spot to be keeping track of state.

  return (
    <div className="widget">
      <label className="widget--title">Your {props.title}</label>
      <div className="widget--container">
        <h1 className="widget--container-title">$1004.43</h1>
        <FundItem urgent={false} title="Staples" staples={true}/>
        <FundItem urgent={true} title="Rising Stars" staples={false} />
      </div>
    </div>
  );


}

export default Widget;
