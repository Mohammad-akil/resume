import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Coin.css";
import DOMPurify from "dompurify";

const Coin = () => {
  const { coinId } = useParams();

  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [coinId, url]);

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
              <h1>{coin.market_data?.current_price.usd}</h1>
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
                  <p>
                    {
                      coin?.market_data?.price_change_percentage_1h_in_currency
                        ?.usd
                    }
                  </p>
                </td>
                <td>
                  <p>{coin?.market_data?.price_change_24h_in_currency?.usd}</p>
                </td>
                <td>
                  <p>
                    {
                      coin?.market_data?.price_change_percentage_7d_in_currency
                        ?.usd
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      coin?.market_data?.price_change_percentage_14d_in_currency
                        ?.usd
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {
                      coin?.market_data?.price_change_percentage_30d_in_currency
                        ?.usd
                    }
                  </p>
                </td>
                <td>
                  <p>
                    {" "}
                    {
                      coin?.market_data?.price_change_percentage_1y_in_currency
                        ?.usd
                    }
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 hour low</h4>
                {/* <p>{coin.market_data.low_24h.usd}</p> */}
                {coin?.market_data?.price_change_24h ? (
                  <p>{coin.market_data.low_24h.usd}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>24 hour high</h4>
                {/* <p>{coin.market_data.high_24h.usd}</p> */}
                {coin?.market_data?.price_change_24h ? (
                  <p>{coin.market_data.high_24h.usd}</p>
                ) : null}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {/* <p>{coin.market_data.low_24h.usd}</p> */}
                {coin.market_data?.market_cap ? (
                  <p>{coin.market_data.market_cap.usd}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {/* <p>{coin.market_data.high_24h.usd}</p> */}
                {coin.market_data?.circulating_supply ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
