import React from 'react';
import { getColorClass, determineSign, timeConverter } from '../../utils';
import './Card.css';

const Card = ({ coin }) => {
  const cardColorClass = getColorClass(coin.color);
  const signCoin = determineSign(coin.change24hr);
  const lastUpdate = timeConverter(coin.lastUpdate);

  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <div className={`card-head ${cardColorClass}`}>
          <img className="card-icon" src={coin.img} alt={coin.name} />
          <h2>{coin.name}</h2>
          <h3>Rank {coin.rank}</h3>
        </div>
        <div className="card-body">
          <div className="coin-price">
            <p className="coin-value">${coin.price}</p>
            <span className={`coin-change ${signCoin}`}>{coin.change24hr}%</span>
          </div>
          <div>
            <p className="coin-last-update">Last update: {lastUpdate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
