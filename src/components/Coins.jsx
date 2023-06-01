import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coins</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">value</p>
          <p className="hide-mobile">MKT Cap</p>
        </div>
        {props.coins.map((coins) => (
          <Link to={`/coin/${coins.id}`}>
            <CoinItem coins={coins} key={coins.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;
