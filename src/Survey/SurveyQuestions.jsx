import "./survey.css";
import titleCard from "../Assets/redBanner.png";
import { Button } from "../Components/Buttons/Button";
import { Radio } from "../Components/RadioButton/Radio";
import { Question } from "../Components/Questions/Question";
import { useEffect, useState } from "react";

const SurveyQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("question1");
  return (
    <div className="mainContainer">
      <div className="box">
        <div className="surveyContainer">
          <img
            src={titleCard}
            style={{
              width: 400,
              height: 100,
              position: "relative",
            }}
          />
          <div className="heading">Survey</div>
          <Question
            questionNumber={1}
            question={
              "I have a clear understanding of my company's strategic goals"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SurveyQuestions;
