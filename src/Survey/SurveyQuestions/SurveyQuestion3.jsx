import "../survey.css";
import titleCard from "../../Assets/redBanner.png"
import { Question } from "../../Components/Questions/Question";
import { useState } from "react";

const SurveyQuestion3 = () => {
  const questionNumber = 3;
  const question = "I can see a clear link between my work and Company's mission and strategic goals";
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

export default SurveyQuestion3;
