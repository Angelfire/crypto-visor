import React from 'react';
import useResources from './hooks/useResources';
import Particles from 'react-particles-js';
import Card from './components/Card/Card';
import { getCoinIcon, formatNum, getCoinColor } from './libs/utils';
import particlesConfig from './libs/particlesconfig';

import './App.css';

const App = () => {
  const { resources, isLoading, isError } = useResources(9);

  const mapCoins = resources.map(coin => ({
    name: coin.name,
    symbol: coin.symbol,
    rank: coin.rank,
    price: formatNum(coin.price_usd),
    change24hr: coin.percent_change_24h,
    lastUpdate: coin.last_updated,
    img: getCoinIcon(coin.symbol.toLowerCase()),
    color: getCoinColor(coin.symbol)
  }));

  return (
    <div className="app">
      <Particles className="particles" params={ particlesConfig } />
      <div className="container">
        <div className="coins">
          { mapCoins.map((coin, i) => <Card coin={coin} key={i} />) }
        </div>
      </div>
    </div>
  );
}

export default App;