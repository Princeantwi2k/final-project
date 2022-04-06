import React from "react";
import Main from "../Body/Main";
import "../../App.css";
import Cards from "../Body/Cards";
import Platform from "../Body/Platform";
import Chart from "../Body/Chart";
import New from "../Body/New";
import Crypto from "../Body/Crypoto";
import Api from "../Body/Api";

const Home = () => {
  return (
    <>
      <div className="gradient-bg-welcome">
        <Main />
        <Cards />
        <Chart />
        <Crypto />
        <Platform />
        <Api />
        <New />
      </div>
    </>
  );
};

export default Home;
