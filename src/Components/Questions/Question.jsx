import React, { useState } from "react";
import { Button } from "../Buttons/Button";
import { Radio } from "../RadioButton/Radio";
import useLocalStorage from "../UseLocalStorage";
import "./question.css";

export const Question = ({ questionNumber, question, selectedQuestion}) => {
  const [option, setOption] = useState("Strongly Agree");
  const [answer, setAnswer] = useLocalStorage("Answers", []);
  const [queCount, setQuecount] = useState(1);

  const onClickNext = () => {
    let options = { question, option };
    setAnswer([...answer, options]);
    selectedQuestion=setQuecount(queCount + 1);
    console.log(queCount)
  };
  
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
