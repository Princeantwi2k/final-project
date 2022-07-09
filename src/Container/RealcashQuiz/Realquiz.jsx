import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Realquiz = () => (
  <Fragment>
    <Helmet>
      <title>Realcash Quiz</title>
    </Helmet>
    <div id="Realquiz">
      <section>
        <div>
          <span className="mdi mdi-cube-outline cube"></span>
        </div>
        <h2>Realcash Quiz</h2>
        <p> want to learn more about cryptocurrency?</p>
        <div className="play-button-container">
          <ul>
            <li style={{ ListStyle: "none" }}>
              <Link className="play-buttom" to="/play/instructions">
                Play
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Fragment>
);

export default Realquiz;
