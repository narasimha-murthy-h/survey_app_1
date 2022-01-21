/** @format */

import "./survey.css";
import titleCard from "../Assets/redBanner.png";
import { Button } from "../Components/Buttons/Button";
import { Radio } from "../Components/RadioButton/Radio";
import { useEffect, useState } from "react";

const SurveyQuestions = () => {
	const [selectedQuestion, setSelectedQuestion] = useState("question1");
	if (selectedQuestion === "question1") {
		return (
			<>
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
							<form>
								<div>
									<lable className="label">Question 1</lable>
								</div>
								<Button buttonStyle={} onClick={() => setSelectedQuestion("question2")}>
									click on me
								</Button>
							</form>
						</div>
					</div>
				</div>
			</>
		);
		setSelectedQuestion("question2");
	} else if (selectedQuestion === "question2") {
		return (
			<>
				<div>Question 2</div>
				<Button onClick={() => setSelectedQuestion("question1")}>
					click on me
				</Button>
			</>
		);
	}
	return { selectedQuestion };
};

export default SurveyQuestions;
