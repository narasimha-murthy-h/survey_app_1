/** @format */

import "./survey.css";
import titleCard from "../Assets/redBanner.png";
import { Button } from "../Components/Button";
import { Radio } from "../Components/Radio";
import { useState } from "react";
import validator from "validator";

const Survey = () => {
	const [isDisabled, setIsDisabled] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		gender: "Male",
		age: 0,
	});

	const [error, setError] = useState({
		name: "",
		email: "",
		age: "",
	});

	const onChange = (e) => {
		const { value, name } = e.target;
		setForm((state) => ({
			...state,
			[name]: value,
		}));
	};

	const showData = () => {
		console.log("Form: ", form);
	};

	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	const onSubmit = (e) => {
		e.preventDefault();

		if (!form.name) {
			setError((state) => ({
				...state,
				name: "Please enter a name",
			}));
			return;
		}
		if (form.name.length < 5) {
			setError((state) => ({
				...state,
				name: "Too short",
			}));
			return;
		} else {
			setError((state) => ({
				...state,
				name: "",
			}));
		}

		if (!form.email) {
			setError((state) => ({
				...state,
				email: "Please enter a mail ID",
			}));
			return;
		} else if (regex.test(form.email) === false) {
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

		if (form.age === 0 || form.age < 1) {
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
	};

	const onReset = () => {
		setForm({
			name: "",
			email: "",
			gender: "Male",
			age: 0,
		});
	};
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
									onChange={onChange}
									className="inputContainer"
									name="name"
									value={form.name}
									placeholder="Name"
								/>
							</label>
							{!!error.name && <div className="alertText">{error.name}</div>}
						</div>

						<div>
							<label className="label">
								Email :
								<input
									onChange={onChange}
									className="inputContainer"
									name="email"
									value={form.email}
									placeholder="Email"
								/>
							</label>
							{!!error.email && <div className="alertText">{error.email}</div>}
						</div>

						<div>
							<label className="label">Gender :</label>
							<span className="inputContainerRadio">
								<Radio
									onChange={onChange}
									name="gender"
									value="Male"
									checked={form.gender === "Male"}
								/>
								<Radio
									onChange={onChange}
									name="gender"
									value="Female"
									checked={form.gender === "Female"}
								/>
								<Radio
									onChange={onChange}
									name="gender"
									value="Other"
									checked={form.gender === "Other"}
								/>
							</span>
						</div>

						<div>
							<label className="label">
								Age :
								<input
									type="number"
									onChange={onChange}
									className="inputContainerAge"
									name="age"
									value={form.age}
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
