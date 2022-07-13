import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MdWbIncandescent } from "react-icons/md";
import { GiConcentrationOrb } from "react-icons/gi";
import { FcClock } from "react-icons/fc";
import M from "materialize-css";

import questions from "../../questions.json";
import isEmpty from "../utils/is-Empty";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberofQuestion: 0,
      numberOfAnsweredQuestion: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 5,
      fiftyFifty: 2,
      usedFiftyfifty: false,
      time: {},
    };
  }
  componentDidMount() {
    const { questions, currentQuestion, previousQuestion, nextQuestion } =
      this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;

      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        answer,
      });
    }
  };

  handleOptionClick = (e) => {
    if (e.target.innerHTML.toLowerCase === this.state.answer) {
      this.correctAnswers();
    } else {
      this.wrongAnswers();
    }
  };

  correctAnswers = () => {
    M.toast({
      html: "correct Answer",
      classes: "toast-valid",
      displayLength: 1500,
    });
    this.setState((prevState) => ({
      score: prevState.score + 1,
      correctAnswers: prevState.correctAnswers + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
    }));
  };
  wrongAnswers = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "wrong Answer",
      classes: "toast-invalid",
      displayLength: 1500,
    });
    this.setState((prevState) => ({
      wrongAnswers: prevState.wrongAnswers + 1,
      numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion,
    }));
  };
  render() {
    const { currentQuestion } = this.state;

    return (
      <>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <h2>Quiz Mode</h2>
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
          <h5>{currentQuestion.question}</h5>
          <div className="options-container">
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionA}
            </p>
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionB}
            </p>
          </div>
          <div className="options-container">
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionC}
            </p>
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionD}
            </p>
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
