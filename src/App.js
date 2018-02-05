import React, { Component } from 'react';
import axios from 'axios';
import { formatNum, getCoinColor } from './utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.getCoints();
  }

  /**
   * 
   */
  getCoinIcon = symbol => {
    return `https://s3-us-west-2.amazonaws.com/s.cdpn.io/1468070/${symbol}.svg`
  }

  /**
   * 
   */
  mapCoins = coins => {
    return coins.map(coin => ({
      name: coin.name,
      symbol: coin.symbol,
      rank: coin.rank,
      price: formatNum(coin.price_usd),
      change24hr: coin.percent_change_24h,
      cap: formatNum(coin.market_cap_usd),
      volume: formatNum(coin['24h_volume_usd']),
      circulating: formatNum(coin.available_supply),
      img: this.getCoinIcon(coin.symbol.toLowerCase()),
      color: getCoinColor(coin.symbol)
    }))
  }

  /**
   * 
   */
  getCoints = () => {
    this.setState({ isLoading: true });
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(res => {
        const coins = this.mapCoins(res.data);
        this.setState({ coins });
        this.setState({ isLoading: false });
      })
      .catch(err => {
        console.error('Error loading data from Coin Market Cap');
        console.error(err);
      })
  }


  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
