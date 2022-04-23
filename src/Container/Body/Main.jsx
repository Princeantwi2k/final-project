import React from "react";
import Botton from "../Bottom/Botton";
import "./main.css";
import { Link } from "react-router-dom";
import "../../App.css";

const Main = () => {
  return (
    <div className="main-container">
      <video src="/vidoes/video-2.mp4" autoPlay loop muted />
      <h1>
        Send Crypto <br />
        across the world
      </h1>
      <p>
        Explore the crypto world,Buy and sell <br /> cryptocurrencies easily on
        Realcash
      </p>
      <div className="day">
        <div className="main-btn">
          <Link to="/exchange">
            <Botton
              className="btns"
              buttonStyle="btn--outline"
              buttonSizre="btn--large"
            >
              Connect to wallet
            </Botton>
          </Link>
        </div>
        <div className="main-btn">
          <Link to="/buy">
            <Botton
              className="btns"
              buttonStyle="btn--primary"
              buttonSizre="btn--large"
            >
              Buy crypto
            </Botton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
