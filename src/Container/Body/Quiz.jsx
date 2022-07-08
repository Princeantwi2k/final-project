import React, { Component } from "react";
import QuestionBox from "./QuestionBox";
import quizService from "../../quizService";
import Result from "./Result";

import "../../assets/style.css";
class Quiz extends Component {
  state = {
    questionBank: [],
    score: 0,
    response: 0,
  };

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5,
    });
  };
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      response: 0,
    });
  };
  render() {
    return (
      <div>
        <div className="title"> RealCash Quetions</div>
        {this.state.questionBank.length > 0 &&
          this.state.response < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                key={questionId}
                options={answers}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}

        {this.state.response === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}

export default Quiz;
