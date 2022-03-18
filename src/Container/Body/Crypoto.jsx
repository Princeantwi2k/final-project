import React from "react";
import "./Chart.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrency";
import Navbar from "./Navbar";

const { Title } = Typography;

const Crypto = () => {
  return (
    <>
      <div className="chart-body">
        <div className="crypto-headeing-container">
          <Title level={2} className="crypto-title">
            {" "}
            Top 10 Cryptocurrency
          </Title>
          <Title level={3} className="show-more">
            <Link to="/crypto">show more</Link>
          </Title>
        </div>
        <Cryptocurrencies simplified />
      </div>
    </>
  );
};

export default Crypto;
