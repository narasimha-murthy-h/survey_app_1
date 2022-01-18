/** @format */

import "./survey.css";
import titleCard from "../Assets/redBanner.png";
import { Button } from "../Components/Button";
import { Radio } from "../Components/Radio";
import { useEffect, useState } from "react";
import { FormEvent } from "react";
import validator from "validator";

const Survey = () => {
	const [isDisabled, setIsDisabled] = useState(false);
	const [names, setNames] = useState("");
	const [age, setAge] = useState(0);
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Male");

	const getSurveyDetails = () => {
		const data = localStorage.getItem("Survey_Taken_By");
		if (data) {
			return JSON.parse(data);
		} else {
			return [];
		}
	};

	const [surveyData, setSurveyData] = useState(getSurveyDetails);

	const [error, setError] = useState({
		names: "",
		email: "",
		age: "",
	});

	const showData = () => {
		console.log("Name: ", names);
		console.log("Age: ", age);
		console.log("Gender: ", gender);
		console.log("Email: ", email);
	};
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	const onSubmit = (e) => {
		e.preventDefault();

		if (!names) {
			setError((state) => ({
				...state,
				names: "Please enter a name",
			}));
			return;
		}
		if (names.length < 5) {
			setError((state) => ({
				...state,
				names: "Too short",
			}));
			return;
		} else {
			setError((state) => ({
				...state,
				names: "",
			}));
		}

		if (!email) {
			setError((state) => ({
				...state,
				email: "Please enter a mail ID",
			}));
			return;
		} else if (regex.test(email) === false) {
			setError((state) => ({
				...state,
				email: "Enter a valid mail ID",
			}));
			return;
		} else {
			setError((state) => ({
				...state,
				email: "",
			}));
		}

		if (age === 0 || age < 1) {
			setError((state) => ({
				...state,
				age: "Please enter a proper age",
			}));
			return;
		} else if (age > 100) {
			setError((state) => ({
				...state,
				age: "Please enter a proper age",
			}));
			return;
		} else {
			setError((state) => ({
				...state,
				age: "",
			}));
		}
		showData();

		let survey = { names, age, email, gender };
		setSurveyData([...surveyData, survey]);
		setGender("Male");
		setNames("");
		setAge(0);
		setEmail("");
	};

	const onReset = () => {
		setGender("Male");
		setNames("");
		setAge(0);
		setEmail("");
		setError({
			names: "",
			email: "",
			age: "",
		});
	};

	useEffect(() => {
		localStorage.setItem("Survey_Taken_By", JSON.stringify(surveyData));
	}, [surveyData]);

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

					<form onSubmit={onSubmit}>
						<div>
							<label className="label">
								Name :
								<input
									onChange={(e) => setNames(e.target.value)}
									className="inputContainer"
									name="names"
									value={names}
									placeholder="Name"
								/>
							</label>
							{!!error.names && <div className="alertText">{error.names}</div>}
						</div>

						<div>
							<label className="label">
								Email :
								<input
									onChange={(e) => setEmail(e.target.value)}
									className="inputContainer"
									name="email"
									value={email}
									placeholder="Email"
								/>
							</label>
							{!!error.email && <div className="alertText">{error.email}</div>}
						</div>

						<div>
							<label className="label">Gender :</label>
							<span className="inputContainerRadio">
								<Radio
									onChange={(e) => setGender(e.target.value)}
									name="gender"
									value="Male"
									checked={gender === "Male"}
								/>
								<Radio
									onChange={(e) => setGender(e.target.value)}
									name="gender"
									value="Female"
									checked={gender === "Female"}
								/>
								<Radio
									onChange={(e) => setGender(e.target.value)}
									name="gender"
									value="Other"
									checked={gender === "Other"}
								/>
							</span>
						</div>

						<div>
							<label className="label">
								Age :
								<input
									type="number"
									onChange={(e) => setAge(e.target.value)}
									className="inputContainerAge"
									name="age"
									value={age}
									placeholder="Age"
								/>
							</label>
							{!!error.age && <div className="alertText">{error.age}</div>}
						</div>

						<div>
							<Button
								type="submit"
								buttonStyle="btn--danger--solid"
								buttonSize="btn--small"
								disable={isDisabled}
							>
								Submit
							</Button>
							<Button
								onClick={onReset}
								type="button"
								buttonStyle="btn--danger--outline"
								buttonSize="btn--small"
								disable={isDisabled}
							>
								Reset
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Survey;
