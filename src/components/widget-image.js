import React, {Component} from 'react';

// import before from '../pics/group2.svg';
import markets  from '../pics/coincap.png';
import transactions from '../pics/transactions.png';

class WidgetImage extends Component {

  constructor(){
    super()

    this.state = {
    }
  }

  changeState = () => {
    this.setState({clicked: true});
  }

  chooseImage = () => {
    switch (this.state.image) {
      case 'markets':
      return <img src={markets} alt="widget"/>;

      case 'transactions':
        return <img src={transactions}  alt="widget"/>;

      default:
      console.log('somthing went wrong');

    }
  }

  render(){
  return (
    <div className="widget">
      <label className="widget--title">Your {this.props.title}</label>
      <div className="widget--container">
        {this.chooseImage}
      </div>
    </div>

  )};
};

export default WidgetImage;
