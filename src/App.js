// IZER
// Michael Gingras for IDEO CoLab
//

import React, { Component } from 'react'
import IzerContract from '../build/contracts/Izer.json'
import getWeb3 from './utils/getWeb3'

// Imports for fonts

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

// imports for components

import Sidenav from './components/sidenav';
import Widget from './components/widget';
import WidgetList from './components/widget-list';
import WidgetAdmin from './components/widget-admin';
import WidgetImage from './components/widget-image';

// imports for dynamic data.... hopefully :0
import KeyChart from './components/keyChart';
import Market from './components/market-live';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class App extends Component {
  constructor(props) {
    super(props)
    this.changePage = this.changePage.bind(this)

    this.state = {
      verified: false,
      updated: false,
      web3: null,
      page: 'strategies',
      keys: [
        {'title': 'ERC20', 'address': '0x44ggf4fl4445050323s', 'key': 1},
        {'title': 'BTC', 'address': '0x5rrrdl44kgsl4ggkd3s', 'key': 2},
        {'title': 'Staples', 'address': '0x5rrrdl44kgsl4ggkd3s', 'key': 3}
      ],
      strategies: [
        {'title': 'Staples', 'address': 'bring stability to your portfolio.', 'key': 1},
        {'title': 'Rising Stars', 'address': 'high movement.', 'key': 2},
        {'title': 'Privacy', 'address': 'cutting edge of technology.', 'key': 3}
      ]
    }
  }

  componentWillMount() {
    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      this.instantiateContract()
    })
    .catch((e) => {
      console.log(e);
      console.log('Error finding web3.')
    })

  }

  instantiateContract() {
    const contract = require('truffle-contract');
    const izer = contract(IzerContract);
    izer.setProvider(this.state.web3.currentProvider);

    var izerInstance;

    this.state.web3.eth.getAccounts((error, accounts) => {
      izer.deployed().then((instance) => {
        izerInstance = instance
        return izerInstance.isVerified.call(accounts[0])
      })
      .then((result) => {
        this.setState({
          verified: result
        });
        return result;
      });
    })
  }

  updatePage = () => {
    switch (this.state.page) {
      case 'strategies':
        return (
            <div className="App">
                <Sidenav page={this.state.page} pageHandler={this.changePage} verified={this.state.verified} />
                <main className="container">
                  <div className="inner--2-3">
                    <Widget title="Exposure" />
                    <WidgetImage title="Performance" image="performance" />
                  </div>
                  <div className="inner--1-3">
                    <WidgetList title="Strategies" keys={this.state.strategies} />
                  </div>
                </main>
              </div>
            )

      case 'wallets':
        return (
            <div className="App">
                <Sidenav page={this.state.page} pageHandler={this.changePage} verified={this.state.verified} />
                <main className="container">
                  <div className="inner--2-3">
                    <WidgetImage title='Wallets' image="wallets" />
                    <KeyChart title="holdings" />
                  </div>
                  <div className="inner--1-3">
                    <WidgetList title="Keys" keys={this.state.keys} />
                  </div>
                </main>
              </div>
            )

      case 'adjust':
        return (
            <div className="App">
                <Sidenav page={this.state.page} pageHandler={this.changePage} verified={this.state.verified} />
                <main className="container">
                  <div className="inner--2-3">
                    <WidgetAdmin title="Adjustments" />
                  </div>
                  <div className="inner--1-3">
                    <WidgetList title="Keys" keys={this.state.strategies} />
                  </div>
                </main>
              </div>
            )

      case 'markets':
        return (
            <div className="App">
                <Sidenav page={this.state.page} pageHandler={this.changePage} verified={this.state.verified} />
                <main className="container">
                  <div className="inner--3-3">
                    <Market title="Markets"/>
                  </div>
                </main>
              </div>
            )

      default:
        console.log('something is broken');
        break;
    }
  }

  changePage(e, page) {
    e.preventDefault()
    this.setState({ page });
    this.updatePage();
  }

  render() {
    return (
      <div>
        {this.updatePage()}
      </div>
    );
  }
}

export default App
