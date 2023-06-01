import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Coin.css";

const Coin = () => {
  const { coinId } = useParams();

  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [coinId]);

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              <img src={coin?.image?.small} alt="" />
              <p>{coin.name}</p>
              {coin?.symbol}
            </div>
            <div className="coin-price">
              {/* <h1>{coin.market_data.current_price}</h1> */}
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1hr</th>
                <th>24hr</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data.price_change_percentage_1h_in_currency.usd}
                </td>
                <td>{coin.market_data.price_change_24h_in_currency.usd}</td>
                <td>
                  {coin.market_data.price_change_percentage_7d_in_currency.usd}
                </td>
                <td>
                  {coin.market_data.price_change_percentage_14d_in_currency.usd}
                </td>
                <td>
                  {coin.market_data.price_change_percentage_30d_in_currency.usd}
                </td>
                <td>
                  {coin.market_data.price_change_percentage_1y_in_currency.usd}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Coin;
