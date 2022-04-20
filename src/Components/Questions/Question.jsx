import React, { useState } from "react";
import { Button } from "../Buttons/Button";
import { Radio } from "../RadioButton/Radio";
import useLocalStorage from "../UseLocalStorage";
import { useNavigate } from "react-router-dom";
import "./question.css";

export const Question = ({ questionNumber, question}) => {
  const [option, setOption] = useState("Strongly Agree");
  const [answer, setAnswer] = useLocalStorage("Answers", []);
  const [questionCount, setQuestionCount] = useState(1);
  const navigate = useNavigate();

  const onClickNext = () => {
    let options = { question, option };
    setAnswer([...answer, options]);
    setQuestionCount(questionNumber + 1);
  };

  if (questionCount === 2) {
    navigate("/survey-question2");
  }

  if (questionCount === 3) {
    navigate("/survey-question3");
  }
  
  return (
    <>
      <div className="question__number">Question {questionNumber}</div>
      <div className="question">{question}</div>
      <div className="input__container--radioQuestion">
        <div className="div--radio">
          <Radio
            onChange={(e) => setOption(e.target.value)}
            name="options"
            value="Strongly Agree"
            checked={option === "Strongly Agree"}
          />
        </div>
        <div className="div--radio">
          <Radio
            onChange={(e) => setOption(e.target.value)}
            name="options"
            value="Agree"
            checked={option === "Agree"}
          />
        </div>
        <div className="div--radio">
          <Radio
            onChange={(e) => setOption(e.target.value)}
            name="options"
            value="Neither Agree Nor Disagree"
            checked={option === "Neither Agree Nor Disagree"}
          />
        </div>
        <div className="div--radio">
          <Radio
            onChange={(e) => setOption(e.target.value)}
            name="options"
            value="Disagree"
            checked={option === "Disagree"}
          />
        </div>
        <div className="div--radio">
          <Radio
            onChange={(e) => setOption(e.target.value)}
            name="options"
            value="Strongly Disagree"
            checked={option === "Strongly Disagree"}
          />
        </div>
      </div>
      <div className="btn__container">
        <Button
          onClick={onClickNext}
          type="button"
          buttonStyle="btn--danger--outline"
          buttonSize="btn--small"
        >
          Next
        </Button>
      </div>
    </>
  );
};
