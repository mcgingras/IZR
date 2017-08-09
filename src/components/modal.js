import React from 'react';

import graph from '../pics/group.svg';

const Modal = (props) => {


  return (
    <div className="modal">
      <div className="modal--inner">
        <h1 className="modal--title">We've decided to add Augur to the Rising Stars strategy.</h1>
        <p className="modal--body">Augur, an Ethereum-based prediction market platform, allows users to buy tokens that represent a stake in real-world events. Have a hunch about the outcome of a real-world event? You can buy a virtual share in that outcome and receive real-money profits if you're right. We believe Augur has a strong team and an exciting function that will create a decentralized and fun prediction market.</p>
      </div>
      {/* <span className="js--close">&times;</span> */}
      <div className="modal--inner">
        <img src={graph} alt="group" className="graph--placeholder" />
        <p className="modal--status">Rising Stars will be equally balanced.</p>
        <button className="modal--button">Accept</button>
      </div>

    </div>
  );
}

export default Modal;
