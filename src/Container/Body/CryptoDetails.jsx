import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StepOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const Cryptodetails = () => {
  const { coinId } = useParams();
  return <div>cryptocurrency {coinId}</div>;
};

export default Cryptodetails;
