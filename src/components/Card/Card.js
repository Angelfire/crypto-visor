import React from "react";
import { getColorClass, determineSign } from "../../libs/utils";
import "./Card.css";

const Card = ({ coin }) => {
  const cardColorClass = getColorClass(coin.color);
  const signCoin = determineSign(coin.change24hr);

  return (
    <div className="coin">
      <div className={`card-head ${cardColorClass}`}>
        <img className="card-icon" src={coin.img} alt={coin.name} />
        <h2 className="card-title">{coin.name}</h2>
        <h3 className="card-subtitle">Rank {coin.rank}</h3>
      </div>
      <div className="card-body">
        <div className="coin-price">
          <p className="coin-value">${coin.price}</p>
          <span className={`coin-change ${signCoin}`}>{coin.change24hr}%</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
