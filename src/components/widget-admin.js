import React, {Component} from 'react';

import before from '../pics/group2.svg';
import after  from  '../pics/group.svg';

class WidgetAdmin extends Component {

  constructor(){
    super()

    this.state = {
      strategy: 'Rising Stars',
      clicked: false
    }
  }

  changeState = () => {
    this.setState({clicked: true});
  }

  render(){
  return (
    <div className="widget">
      <label className="widget--title">Your {this.props.title}</label>

      <div className="widget--container">
        <h1 className="change--strategy">{this.state.strategy}</h1>

        <div className="change--container">
          <div className="change--logo">
            <img src={this.state.clicked ? after : before } alt="before"/>
            <p onClick={this.changeState}> {this.state.clicked ? "Token Added!" : "Add Token"}</p>
          </div>
          <div className="change--body">
            <label for="title">Title</label>
            <input type='text' value="We've decided to add Augur to the Rising Stars Strategy"/>
            <label for="description">Description</label>
            <textarea value="Augur, an Ethereum-based prediction market platform, allows users to buy tokens that represent a stake in real-world events. Have a hunch about the outcome of a real-world event? You can buy a virtual share in that outcome and receive real-money profits if you're right. We believe Augur has a strong team and an exciting function that will create a decentralized and fun prediction market." />
            <button>complete</button>
          </div>
        </div>
      </div>
    </div>

  )};
};

export default WidgetAdmin;
