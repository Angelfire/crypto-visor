import React from 'react';
import './Card.css';

const Card = ({ coin }) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header">
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
