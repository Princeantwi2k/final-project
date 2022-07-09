import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MdWbIncandescent } from "react-icons/md";
import { GiConcentrationOrb } from "react-icons/gi";
import { FcClock } from "react-icons/fc";

import question from "../../questions.json";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(question);
    return (
      <>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <h2>Quiz Mode</h2>``
          <div className="lifeline-container">
            <p>
              <GiConcentrationOrb className="lifeline-icon" />{" "}
              <span className="lifeline"> 2</span>
            </p>
            <p>
              <MdWbIncandescent className="lifeline-icon" />{" "}
              <span className="lifeline"> 5</span>
            </p>
          </div>
          <div className="lifeline-container">
            <p>
              <span>1 of 15</span>
            </p>
            <p>
              {" "}
              <span className="lifeline"> 2:15</span>
              <FcClock className="lifeline" />
            </p>
          </div>
          <h5>Google was found in what year?</h5>
          <div className="options-container">
            <p className="option">1997</p>
            <p className="option">1998</p>
          </div>
          <div className="options-container">
            <p className="option">1999</p>
            <p className="option">2000</p>
          </div>
          <div className="button-container">
            <button> Previous</button>
            <button>Next </button>
            <button> Quit</button>
          </div>
        </div>
      </>
    );
  }
}

export default Test;
