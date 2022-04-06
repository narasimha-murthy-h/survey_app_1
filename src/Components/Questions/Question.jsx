import React, { useState } from "react";
import { Button } from "../Buttons/Button";
import { Radio } from "../RadioButton/Radio";
import useLocalStorage from "../UseLocalStorage";
import "./question.css";

export const Question = ({ questionNumber, question }) => {
	const [options, setOptions] = useState("Strongly Agree");
	const [answer, setAnswer] = useLocalStorage("Answers", []);

	const onClickNext = () => {
		let option = { options };
		setAnswer([...answer, option]);
	};
	return (
		<>
			<div className="questionNumber">Question {questionNumber}</div>
			<div className="question">{question}</div>
			<div className="inputContainerRadio">
				<div>
					<Radio
						onChange={(e) => setOptions(e.target.value)}
						name="options"
						value="Strongly Agree"
						checked={options === "Strongly Agree"}
					/>
				</div>
				<div>
					<Radio
						onChange={(e) => setOptions(e.target.value)}
						name="options"
						value="Agree"
						checked={options === "Agree"}
					/>
				</div>
				<div>
					<Radio
						onChange={(e) => setOptions(e.target.value)}
						name="options"
						value="Neither Agree Nor Disagree"
						checked={options === "Neither Agree Nor Disagree"}
					/>
				</div>
				<div>
					<Radio
						onChange={(e) => setOptions(e.target.value)}
						name="options"
						value="Disagree"
						checked={options === "Disagree"}
					/>
				</div>
				<div>
					<Radio
						onChange={(e) => setOptions(e.target.value)}
						name="options"
						value="Strongly Disagree"
						checked={options === "Strongly Disagree"}
					/>
				</div>
			</div>

			<Button
				onClick={onClickNext}
				type="button"
				buttonStyle="btn--danger--outline"
				buttonSize="btn--small"
			>
				Next
			</Button>
		</>
	);
};
