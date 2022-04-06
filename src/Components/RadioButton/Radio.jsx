import React from "react";
import "./radioButton.css";

export const Radio = ({ name, value, checked, onChange }) => {
	return (
		<label className="radio">
			<input
				type="radio"
				className="radio--field"
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<div className="checkMark"></div>
			{value}
		</label>
	);
};
