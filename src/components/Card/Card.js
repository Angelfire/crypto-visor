import React from 'react';
import { getColorClass } from '../../utils';
import './Card.css';

const Card = ({ coin }) => {
  const colorClass = getColorClass(coin.color);

  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <div className={`card-head ${colorClass}`}>
          <img className="card-img-top" src={coin.img} alt={coin.name} />
          <h2>{coin.name}</h2>
          <h3>{coin.symbol}</h3>
          <h3>Rank {coin.rank}</h3>
        </div>
        <div className="card-body">
          <div className="coin-price">
            <p>${coin.price}</p>
            <span>{coin.change24hr}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
