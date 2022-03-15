import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "./Welcome";
import "./Chart.css";
const { Title } = Typography;

const Chart = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalstats = data?.data?.stats;
  console.log(data);
  if (isFetching) return "loading ...";
  return (
    <>
      <div className="chart-body">
        <Title level={2} className="chart-title">
          Global Crypto Stats
        </Title>
        <Row className="chart-row">
          <Col span={12}>
            <Statistic
              title="Total Cryptocurrency"
              value={globalstats.total.toString()}
            >
              3
            </Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalstats.totalExchanges.toString())}
            >
              3
            </Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Marget Cap"
              value={millify(globalstats.totalMarketCap.toString())}
            >
              3
            </Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24H Volume"
              value={millify(globalstats.total24hVolume.toString())}
            >
              3
            </Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(globalstats.totalMarkets.toString())}
            >
              3
            </Statistic>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Chart;
