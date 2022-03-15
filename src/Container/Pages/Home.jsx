import React from "react";
import Main from "../Body/Main";
import "../../App.css";
import Cards from "../Body/Cards";
import Api from "../Body/Api";
import Platform from "../Body/Platform";
import Welcome from "../Body/Welcome";
import Chart from "../Body/Chart";
import New from "../Body/New";
import Crypto from "../Body/Crypoto";

const Home = () => {
  return (
    <>
      <div className="gradient-bg-welcome">
        <Main />
        <Cards />
        <Chart />
        {/* <Api /> */}
        <Crypto />
        <New />
        <Platform />
      </div>
    </>
  );
};

export default Home;
