import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import { FcClock } from "react-icons/fc";
import M from "materialize-css";
import CorrectNotification from "../../assets/correct-answer.mp3";
import wrongNotification from "../../assets/wrong-answer.mp3";
import buttonNotification from "../../assets/button-answer.mp3";
import questions from "../../questions.json";
import isEmpty from "../utils/is-Empty";
import { Link } from "react-router-dom";

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
        numberofQuestion: questions.length,
      });
    }
  };

  handleOptionClick = (event) => {
    if (
      event.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()
    ) {
      setTimeout(() => {
        document.getElementById("correct-sound").play();
      }, 500);

      this.correctAnswer();
    } else {
      setTimeout(() => {
        document.getElementById("wrong-sound").play();
      }, 500);

      this.wrongAnswer();
    }
  };

  handleButtonClick = (e) => {
    switch (e.target.id) {
      case "next-button":
        this.handleNextButtonClick();
        break;
      case "previous-button":
        this.handlePreviousButtonClick();
        break;
      case "quit-button":
        this.handleQuitButtonClick();
        break;
      default:
        break;
    }
    this.playButtonSound();
  };
  playButtonSound = () => {
    document.getElementById("button-sound").play();
  };

  handleNextButtonClick = () => {
    this.playButtonSound();
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };
  handlePreviousButtonClick = () => {
    this.playButtonSound();
    if (this.state.previousQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handleQuitButtonClick = () => {
    this.playButtonSound();
    if (window.confirm("Are you sure tou want to quit")) {
      <Link to="/"></Link>;
    }
  };

  correctAnswer = () => {
    M.toast({
      html: "correct Answer",
      classes: "toast-valid",
      displayLength: 1500,
    });
    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.currentQuestion,
          this.state.previousQuestion,
          this.state.nextQuestion
        );
      }
    );
  };
  wrongAnswer = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "Wrong Answer",
      classes: "toast-invalid",
      displayLength: 1500,
    });
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswer + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.currentQuestion,
          this.state.nextQuestion,
          this.state.previousQuestion
        );
      }
    );
  };
  render() {
    const { currentQuestion, currentQuestionIndex, numberofQuestion } =
      this.state;

    return (
      <>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <Fragment>
          <audio id="correct-sound" src={CorrectNotification}></audio>
          <audio id="wrong-sound" src={wrongNotification}></audio>
          <audio id="button-sound" src={buttonNotification}></audio>
        </Fragment>
        <div className="questions">
          <h2>Realcash Game</h2>
          <div className="lifeline-container">
            <p>
              <span className="mdi mdi-set-center mdi-24px lifeline-icon">
                <span className="lifeline"></span>
              </span>
            </p>
            <p>
              <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon">
                5
              </span>{" "}
            </p>
          </div>
          <div className="lifeline-container">
            <p>
              <span>
                {" "}
                {currentQuestionIndex + 1} of {numberofQuestion}
              </span>
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
            <button id="previous-button" onClick={this.handleButtonClick}>
              {" "}
              Previous
            </button>
            <button id="next-button" onClick={this.handleButtonClick}>
              Next{" "}
            </button>
            <button id="quit-button" onClick={this.handleButtonClick}>
              {" "}
              Quit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Test;
