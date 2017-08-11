import React from 'react';

// import before from '../pics/group2.svg';
import markets  from '../pics/coincap.png';
import transactions from '../pics/transactions.png';
import wallets from '../pics/wallets.png';
import performance from '../pics/performance.png';
import plugins from '../pics/plugins.png';

const WidgetImage = (props) => {

  const chooseImage = () => {
    switch (props.image) {
      case 'markets':
      return <img src={markets} alt="widget" className="widget--image" />;

      case 'transactions':
        return <img src={transactions} alt="widget" className="widget--image" />;

      case 'wallets':
        return <img src={wallets} alt="widget" className="widget--image" />;

      case 'performance':
        return <img src={performance} alt="widget" className="widget--image" />;

      case 'plugins':
        return <img src={plugins} alt = "widget" className="widget--image" />;

      default:
      console.log('somthing went wrong');

    }
  }

  return (
    <div className="widget">
      <label className="widget--title">Your {props.title}</label>
      <div className="widget--container">
        {chooseImage()}
      </div>
    </div>

  );
};

export default WidgetImage;
