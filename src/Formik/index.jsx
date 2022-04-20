/** @format */

import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const initialValues = {
	name: "",
	email: "",
	channel: "",
	social: {
		fb: "",
		twitter: "",
	},
	phoneNumber: ["", ""],
	phNumbers: [""],
};

const onSubmit = (values) => {
	console.log("Form Vlues: ", values);
};

const validationSchema = Yup.object({
	name: Yup.string().required("Required!"),
	email: Yup.string().email("Invalid email format!").required("Required"),
	channel: Yup.string().required("Required"),
});

function BasicForm() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<div>
					<label htmlFor="name">Name</label>
					<Field type="text" id="name" name="name" />
					<ErrorMessage name="name" />
				</div>

				<div>
					<label htmlFor="email">E-mail</label>
					<Field type="email" id="email" name="email" />
					<ErrorMessage name="email" />
				</div>

				<div>
					<label htmlFor="channel">Channel</label>
					<Field type="text" id="channel" name="channel" />
					<ErrorMessage name="channel" />
				</div>

				<div>
					<label htmlFor="fb">FaceBook</label>
					<Field type="text" id="fb" name="social.fb" />
				</div>

				<div>
					<label htmlFor="twitter">Twitter</label>
					<Field type="text" id="twitter" name="social.twitter" />
				</div>

				<div>
					<label htmlFor="primaryPh">Primary Phone number</label>
					<Field type="text" id="primaryPh" name="phoneNumber[0]" />
				</div>

				<div>
					<label htmlFor="secondaryPh">Secondary Phone number</label>
					<Field type="text" id="secondaryPh" name="phoneNumber[1]" />
				</div>

				<div>
					<label> List of Phone Numbers</label>
					<FieldArray name="phNumbers">
						{(fieldArrayProps) => {
							const { push, remove, form } = fieldArrayProps;
							const { values } = form;
							const { phNumbers } = values;

							return (
								<div>
									{phNumbers.map((phNumber, index) => (
										<div key={index}>
											<Field name={`phNumbers[${index}]`} />
											{index > 0 && (
												<button type="button" onClick={() => remove(index)}>
													{""}-{""}
												</button>
											)}
											<button type="button" onClick={() => push("")}>
												{""}+{""}
											</button>
										</div>
									))}
								</div>
							);
						}}
					</FieldArray>
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default BasicForm;
