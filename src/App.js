import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Card from './components/Card/Card';
import axios from 'axios';
import { formatNum, getCoinColor } from './utils/helpers';
import { particlesConfig } from './utils/particlesconfig';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: []
    };
  }

  componentDidMount() {
    this.getCoints(9);
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
      lastUpdate: coin.last_updated,
      img: this.getCoinIcon(coin.symbol.toLowerCase()),
      color: getCoinColor(coin.symbol)
    }))
  }

  /**
   * 
   */
  getCoints = n => {
    axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${n}`)
      .then(res => {
        const coins = this.mapCoins(res.data);
        this.setState({ coins });
      })
      .catch(err => {
        console.error('Error loading data from Coin Market Cap');
        console.error(err);
      })
  }


  render() {
    const { coins } = this.state;

    if (!coins.length) return null;

    return (
      <div className="app">
        <Particles className="particles" params={ particlesConfig } />
        <div className="container">
          <div className="row py-5">
            { coins.map((coin, i) => <Card coin={coin} key={i} />) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;