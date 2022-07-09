import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import answer from "../../images/answers.png";
import fifty from "../../images/fifty.png";
import hint from "../../images/hint.png";
import option from "../../images/options.png";

const QuizIntruction = () => (
  <Fragment>
    <Helmet>
      <title>Quiz Instruction - Realcash</title>
    </Helmet>
    <div className="instructions containe">
      <h1>how to play the game</h1>
      <p>Eusure you read this guide from start to finish</p>
      <ul className="browser-defaul" id="main-ist">
        <li>
          this game has a duration of 15 minutes and as soon your time elapses.
        </li>
        <li>Each game consists of 15 Questions.</li>
        <li>Every question contains 4 options</li>
        <li>
          <img src={option} alt=" Quiz app -Answer example" />
        </li>

        <li>
          Select the option which best answers provided question by clicking (or
          selecting) it.
          <img src={answer} alt=" Quiz app -Answer example" />
        </li>
        <li>
          Each game has 2 lifelines namely:
          <ul id="sublist">
            <li>50/50 chances</li>
            <li>5 Hints</li>
          </ul>
        </li>
        <li>
          Selecting a 50/50 lifeline by clicking the{" "}
          <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>{" "}
          icon will remove 2 wrong answers, leaving one wrong and a correct one.{" "}
          <br />
          <img src={fifty} alt="Quiz App - 50/50 example" />
        </li>
        <li>
          Using a hint by clicking the "{" "}
          <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>{" "}
          " icon will remove one wrong answer, leaving two wrong answers and a
          correct one. You can use as many hints as possible on a single
          question.
          <br />
          <img src={hint} alt="Quiz App - Hints example" />
        </li>
        <li>
          Feel free to quit (or forfeit) from the game at any time. In that case
          your score will be revealed afterwards.
        </li>
        <li>The timer starts as soon as the game loads.</li>
        <li>Let's do this if you think you've got what it takes?</li>
      </ul>
      <div className="options">
        <span>
          <Link to="/quiz" className="left">
            No, take me back!
          </Link>
        </span>
        <span>
          <Link to="/play/quiz" className="left">
            Okay, let's do this!
          </Link>
        </span>
      </div>
    </div>
  </Fragment>
);

export default QuizIntruction;
