/** @format */

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
	name: "",
	email: "",
	channel: "",
};

const onSubmit = (values) => {
	console.log("Form Vlues: ", values);
};

const validate = (values) => {
	let errors = {};

	if (!values.name) {
		errors.name = "Required";
	}

	if (!values.email) {
		errors.email = "Required";
	}

	if (!values.channel) {
		errors.channel = "Required";
	}

	return errors;
};

const validationSchema = Yup.object({
	name: Yup.string().required("Required!"),
	email: Yup.string().email("Invalid email format!").required("Required"),
	channel: Yup.string().required("Required"),
});

function OldBasicForm() {
	const formic = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	console.log("Form errors ", formic.errors);
	console.log("Form touched", formic.touched);

	return (
		<div>
			<form onSubmit={formic.handleSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={formic.handleChange}
						onBlur={formic.handleBlur}
						value={formic.values.name}
					/>
					{formic.touched.name && formic.errors.name ? (
						<div>{formic.errors.name}</div>
					) : null}
				</div>

				<div>
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={formic.handleChange}
						onBlur={formic.handleBlur}
						value={formic.values.email}
					/>
					{formic.touched.email && formic.errors.email ? (
						<div>{formic.errors.email}</div>
					) : null}
				</div>

				<div>
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						id="channel"
						name="channel"
						onChange={formic.handleChange}
						onBlur={formic.handleBlur}
						value={formic.values.channel}
					/>
					{formic.touched.channel && formic.errors.channel ? (
						<div>{formic.errors.channel}</div>
					) : null}
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default OldBasicForm;
