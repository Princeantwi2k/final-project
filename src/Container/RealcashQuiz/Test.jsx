import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import classnames from "classnames";
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
      prevRandomNumber: [],
      time: {},
      nextButtomDisable: false,
      prevButtomDisable: true,
    };
    this.interval = null;
    this.correctSound = React.createRef();
    this.wrongSound = React.createRef();
    this.buttonSound = React.createRef();
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
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

      this.setState(
        {
          currentQuestion,
          nextQuestion,
          previousQuestion,
          answer,
          numberofQuestion: questions.length,
          prevRandomNumber: [],
        },
        () => {
          this.showOptions();
          this.handleDisableButtom();
        }
      );
    }
  };

  handleOptionClick = (event) => {
    if (
      event.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()
    ) {
      setTimeout(() => {
        this.correctSound.current.play();
      }, 500);

      this.correctAnswer();
    } else {
      setTimeout(() => {
        this.wrongSound.current.play();
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
    this.buttonSound.current.play();
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
        if (this.state.nextQuestion === undefined) {
          this.endgame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
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
        if (this.state.nextQuestion === undefined) {
          this.endgame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      }
    );
  };

  showOptions = () => {
    const options = Array.from(document.querySelectorAll(".option"));
    options.forEach((option) => (option.style.visibility = "visible"));
    this.setState({
      usedFiftyfifty: false,
    });
  };
  handlehints = () => {
    if (this.state.hints > 0) {
      const options = Array.from(document.querySelectorAll(".option"));
      let indexOfAnswer;
      options.forEach((option, index) => {
        if (
          option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()
        ) {
          indexOfAnswer = index;
        }
      });

      while (true) {
        const randomNumber = Math.round(Math.random() * 3);
        if (
          randomNumber !== indexOfAnswer &&
          !this.state.prevRandomNumber.includes(randomNumber)
        ) {
          options.forEach((option, index) => {
            if (index === randomNumber) {
              option.style.visibility = "hidden";
              this.setState((prevState) => ({
                hints: prevState.hints - 1,
                prevRandomNumber:
                  prevState.prevRandomNumber.concat(randomNumber),
              }));
            }
          });
          break;
        }
        if (this.state.prevRandomNumber.length >= 3) break;
      }
    }
  };

  handFiftyFifty = () => {
    if (this.state.fiftyFifty > 0 && this.state.usedFiftyfifty === false) {
      const options = document.querySelectorAll(".option");
      const randomNumbers = [];
      let indexOfAnswer;
      options.forEach((option, index) => {
        if (
          option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()
        ) {
          indexOfAnswer = index;
        }
      });

      let count = 0;
      do {
        const randomNumber = Math.round(Math.random() * 3);
        if (randomNumber !== indexOfAnswer) {
          if (
            randomNumbers.length < 2 &&
            !randomNumbers.includes(randomNumber) &&
            !randomNumbers.includes(indexOfAnswer)
          ) {
            randomNumbers.push(randomNumber);
            count++;
          } else {
            while (true) {
              const newRandomNumber = Math.round(Math.random() * 3);
              if (
                !randomNumbers.includes(newRandomNumber) &&
                !randomNumbers.includes(indexOfAnswer)
              ) {
                randomNumber.push(newRandomNumber);
                count++;
                break;
              }
            }
          }
        }
      } while (count < 2);
      options.forEach((option, index) => {
        if (randomNumbers.includes(index)) {
          option.style.visibility = "hidden";
        }
      });
      this.setState((prevState) => ({
        fiftyFifty: prevState.fiftyFifty - 1,
        usedFiftyfifty: true,
      }));
    }
  };
  startTimer = () => {
    const counDownTime = Date.now() + 180000;
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = counDownTime - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState(
          {
            time: {
              minutes: 0,
              seconds: 0,
            },
          },
          () => {
            this.endgame();
          }
        );
      } else {
        this.setState({
          time: {
            minutes,
            seconds,
          },
        });
      }
    }, 1000);
  };

  handleDisableButtom = () => {
    if (
      this.state.previousQuestion === undefined ||
      this.state.currentQuestionIndex === 0
    ) {
      this.setState({
        prevtButtomDisable: true,
      });
    } else {
      this.setState({
        prevButtomDisable: false,
      });
    }
    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIndex + 1 === this.state.numberofQuestion
    ) {
      this.setState({
        nextButtomDisable: true,
      });
    } else {
      this.setState({
        nextButtomDisable: false,
      });
    }
  };

  endgame = () => {
    alert("Quiz has ended");
    const { state } = this;
    const playerstats = {
      score: state.score,
      numberofQuestion: state.numberofQuestion,
      numberOfAnsweredQuestions: state.numberOfAnsweredQuestion,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
      fiftyFiftyUsed: 2 - state.fiftyFifty,
      hintsUsed: 5 - state.hints,
    };
    console.log(playerstats);
    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };
  render() {
    const {
      currentQuestion,
      currentQuestionIndex,
      numberofQuestion,
      hints,
      fiftyFifty,
      time,
    } = this.state;

    return (
      <>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <Fragment>
          <audio ref={this.correctSound} src={CorrectNotification}></audio>
          <audio ref={this.wrongSound} src={wrongNotification}></audio>
          <audio ref={this.buttonSound} src={buttonNotification}></audio>
        </Fragment>
        <div className="questions">
          <h2>Realcash Game</h2>
          <div className="lifeline-container">
            <p>
              <span
                className="mdi mdi-set-center mdi-24px lifeline-icon"
                onClick={this.handFiftyFifty}
              >
                <span className="lifeline">{fiftyFifty}</span>
              </span>
            </p>
            <p>
              <span
                className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"
                onClick={this.handlehints}
              >
                <span className="lifeline"> {hints}</span>
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
              <span className="lifeline">
                {time.minutes} : {time.seconds}{" "}
              </span>
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
            <button
              className={classnames("", {
                disable: this.state.prevButtomDisable,
              })}
              id="previous-button"
              onClick={this.handleButtonClick}
            >
              {" "}
              Previous
            </button>
            <button
              className={classnames("", {
                disable: this.state.nextButtomDisable,
              })}
              id="next-button"
              onClick={this.handleButtonClick}
            >
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
