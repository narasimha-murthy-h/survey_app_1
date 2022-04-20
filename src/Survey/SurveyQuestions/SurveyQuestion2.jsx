import "../survey.css";
import titleCard from "../../Assets/redBanner.png"
import { Question } from "../../Components/Questions/Question";
import { useState } from "react";

const SurveyQuestion2 = () => {
  const questionNumber = 2;
  const question = "I have a clear understanding of my company's Terms and conditions";
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

export default SurveyQuestion2;
