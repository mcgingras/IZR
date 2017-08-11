import React, { Component } from 'react';
import axios from 'axios';

class KeyChart extends Component {

  constructor(){
    super();

    this.state = {
      eth: [],
      tokens: []
    }
  }

  componentDidMount() {
    axios.get('https://api.ethplorer.io/getAddressInfo/0xfDD21E588dC96D9A9BFE2AfC619E952C09a1846e?apiKey=freekey')
      .then(res => {
        console.log(res);
        this.setState({eth: res.data.ETH, tokens: res.data.tokens});
     });
  };

  renderTokens(){
    return this.state.tokens.map(token =>
      <div className="table--row" key={token.tokenInfo.address}>
        <p className="row--body" >{token.tokenInfo.name}</p>
        <p className="row--body" >{token.balance / 1000000000000000000 }</p>
        <p className="row--body" >{token.tokenInfo.price.rate}</p>
        <p className="row--body" >{(token.balance / 1000000000000000000) * token.tokenInfo.price.rate }</p>
        <p className="row--body" >{token.tokenInfo.price.diff}</p>
      </div>
    );
  }

  renderEth(){
    return (
      <div className="table--row" key='1'>
        <p className="row--body" >Ethereum</p>
        <p className="row--body" >{this.state.eth.balance}</p>
        <p className="row--body" >300.01</p>
        <p className="row--body" >10.44</p>
        <p className="row--body" >{this.state.eth.totalOut}</p>
      </div>
    )
  }


  render(){
    return (
      <div className="widget">
        <label className="widget--title">Your {this.props.title}</label>
        <div className="widget--container">
          <div className="table js--table">
            <div className="table--row">
              <p className="row--title">COIN NAME</p>
              <p className="row--title">SHARES</p>
              <p className="row--title">PRICE</p>
              <p className="row--title">TOTAL</p>
              <p className="row--title">DELTA</p>
            </div>
            {/* render coins into the table!! */}
              {this.renderTokens()}
              {this.renderEth()}
          </div>
        </div>
      </div>
    );
  }

}

export default KeyChart;
