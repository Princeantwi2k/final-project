import React from "react";
import Botton from "../Bottom/Botton";
import "./main.css";
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
          <Botton
            className="btns"
            buttonStyle="btn--outline"
            buttonSizre="btn--large"
          >
            Connect to wallect
          </Botton>
        </div>
        <div className="main-btn">
          <Botton
            className="btns"
            buttonStyle="btn--primary"
            buttonSizre="btn--large"
          >
            REGISTER
          </Botton>
        </div>
      </div>
    </div>
  );
};

export default Main;
