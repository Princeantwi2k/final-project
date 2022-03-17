import React, { useState } from "react";
import { Typography, Row, Col, Card, Select, Avatar } from "antd";
import moment from "moment";
import "./Chart.css";
import { useGetCryptoNewsQuery } from "./CryptoNewsApi";
import { useGetCryptosQuery } from "./Welcome";

const demoimage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setnewsCategory] = useState("cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 9,
  });
  console.log(cryptoNews);
  if (!cryptoNews?.value) return "Loading ...";
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="select a crypto"
            optionFilterProp="childern"
            onChange={(value) => setnewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLocaleUpperCase()) >
              0
            }
          >
            <Option value="Cryptocurrency" className="select-option">
              Cryptocurrency
            </Option>
            {data?.data?.coins.map((coin, i) => (
              <Option value={coin.name} key={i}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="black" rel="noreferrer">
              <div className="news-image-container">
                <Title className="new-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoimage}
                  alt="new"
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoimage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <div>
                  <Text>
                    {moment(news.dataPublished).startOf(`ss`).fromNow()}
                  </Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
