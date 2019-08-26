import React from "react";
import Particles from "react-particles-js";
import useResources from "../../hooks/useResources";
import Card from "../Card/Card";
import { formatNum, getCoinColor } from "../../libs/utils";
import particlesConfig from "../../libs/particlesconfig";

import "./App.css";

const App = () => {
  const { resources, isLoading, isError } = useResources(9);

  const mapCoins = resources.map(coin => ({
    name: coin.name,
    symbol: coin.symbol,
    rank: coin.rank,
    price: formatNum(coin.price),
    change24hr: coin.change,
    img: coin.iconUrl,
    color: getCoinColor(coin.symbol)
  }));

  return (
    <div className="app">
      <Particles className="particles" params={particlesConfig} />
      <div className="container">
        <div className="coins">
          {mapCoins.map((coin, i) => (
            <Card coin={coin} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
