import "./survey.css";
import titleCard from "../Assets/redBanner.png";
import { Button } from "../Components/Buttons/Button";
import { Radio } from "../Components/RadioButton/Radio";
import { Question } from "../Components/Questions/Question";
import { useEffect, useState } from "react";

const SurveyQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState("I have a clear understanding of my company's strategic goals");
  return (
    <div className="main__container">
			<div className="box">
				<div className="survey__container">
					<img src={titleCard} className="img" />
					<div className="heading">Survey</div>
          <Question
            questionNumber={questionNumber}
            question={question}
          />
        </div>
      </div>
    </div>
  );
};

export default SurveyQuestions;
