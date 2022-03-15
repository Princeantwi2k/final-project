import React, { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./Coins";
import "./Api.css";
import { Pagination, Button } from "react-bootstrap";

const Api = () => {
  const [coins, setcoins] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setsearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setcoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setsearch(e.target.value);
  };
  const filtercoins = () =>
    coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h3 className="coin-title">Top 5 Cryptocurrency in the world</h3>
        <h1 className="coin-text"> search currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filtercoins().length == 0 ? (
        <div colspan="7" className="no-item">
          {" "}
          <h3> There is no such currency</h3>
        </div>
      ) : null}
      {filtercoins()
        .slice((page - 1) * 5, page * 5)
        .map((coins, index) => {
          return (
            <>
              <Coins
                key={index}
                name={coins.name}
                image={coins.image}
                symbol={coins.symbol}
                marketcap={coins.market_cap}
                price={coins.current_price}
                volume={coins.total_volume}
                priceChange={coins.price_change_percentage_24h}
              />
            </>
          );
        })}
      {filtercoins().length != 0 ? (
        <Pagination patientNumber={filtercoins().length} setPage={setPage} />
      ) : null}
    </div>
  );
};

export default Api;
