import "./survey.css";
import titleCard from "../Assets/redBanner.png";
import { Button } from "../Components/Buttons/Button";
import { Radio } from "../Components/RadioButton/Radio";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../Components/UseLocalStorage";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const Survey = () => {
	const [isDisabled, setIsDisabled] = useState(false);
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Male");

	const initialValues = { name, age, email, gender };

	const validationSchema = Yup.object({
		name: Yup.string().required("Please enter a name").min(5, "Too Short"),
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

	const onReset = () => {
		setGender("Male");
	};

	const onSubmit = () => {
		let survey = { name, age, email, gender };
		setSurveyData(...surveyData, survey);
		navigate("/survey-questions");
	};

	return (
		<div className="main__container">
			<div className="box">
				<div className="survey__container">
					<img src={titleCard} className="img" />
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
										className="input__container"
										name="name"
										placeholder="Name"
									/>
								</label>
								<ErrorMessage name="name">
									{(msg) => <div className="alertText">{msg}</div>}
								</ErrorMessage>
							</div>

							<div>
								<label className="label">
									Email :
									<Field
										className="input__container"
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
								<span className="input__container--radio">
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
										className="input__container--age"
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
