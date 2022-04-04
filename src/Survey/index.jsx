/** @format */

import "./survey.css";
import titleCard from "../Assets/redBanner.png";
import { Button } from "../Components/Buttons/Button";
import { Radio } from "../Components/RadioButton/Radio";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { regex } from "../Components/Common/CommonElement";
import useLocalStorage from "../Components/UseLocalStorage";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const Survey = () => {
	const [isDisabled, setIsDisabled] = useState(false);
	const [names, setNames] = useState("");
	const [age, setAge] = useState(0);
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Male");
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const initialValues = { names, age, email, gender };

	const validationSchema = Yup.object({
		names: Yup.string().required("Please enter a name").min(5, "Too Short"),
		age: Yup.number()
			.required("Please enter a proper age")
			.positive("Please enter a proper age")
			.max(100, "Please enter a proper age"),
		email: Yup.string()
			.email("Invalid email format!")
			.required("Enter a valid mail ID"),
	});

	const navigate = useNavigate();

	const [surveyData, setSurveyData] = useLocalStorage("Survey_Taken_By", "");

	const showData = () => {
		console.log("Name: ", names);
		console.log("Age: ", age);
		console.log("Gender: ", gender);
		console.log("Email: ", email);
	};

	const onReset = () => {
		setGender("Male");
	};

	const onSubmit = (e) => {
		e.preventDefault();
		showData();

		let survey = { names, age, email, gender };
		setSurveyData(...surveyData, survey);
		setSubmitSuccess(true);
	};

	if (submitSuccess === true) {
		navigate("/survey-questions");
	}
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

					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						<Form>
							<div>
								<label className="label">
									Name :
									<Field
										className="inputContainer"
										name="names"
										placeholder="Name"
									/>
								</label>
								<ErrorMessage name="names">
									{(msg) => <div className="alertText">{msg}</div>}
								</ErrorMessage>
							</div>

							<div>
								<label className="label">
									Email :
									<Field
										className="inputContainer"
										name="email"
										placeholder="Email"
									/>
								</label>
								<ErrorMessage name="email">
									{(msg) => <div className="alertText">{msg}</div>}
								</ErrorMessage>
							</div>

							<div>
								<label className="label">Gender :</label>
								<span className="inputContainerRadio">
									<Radio
										onChange={(e) => setGender(e.target.value)}
										name="gender"
										value="Male"
										checked={gender === "Male"}
										reset="Male"
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
									<Field
										type="number"
										className="inputContainerAge"
										name="age"
										placeholder="Age"
									/>
								</label>
								<ErrorMessage name="age">
									{(msg) => <div className="alertText">{msg}</div>}
								</ErrorMessage>
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
									type="reset"
									onClick={onReset}
									buttonStyle="btn--danger--outline"
									buttonSize="btn--small"
									disable={isDisabled}
								>
									Reset
								</Button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Survey;
