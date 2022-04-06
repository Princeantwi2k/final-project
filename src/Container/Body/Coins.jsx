import React from "react";
import "./Coin.css";
const Coins = ({
  image,
  name,
  price,
  volume,
  symbol,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price"> Price: ${price}</p>
          <p className="coin-volume"> Volume: ${volume}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red"> Rate: {priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">
              Rate: {priceChange.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap"> Mkt cap: ${marketcap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
