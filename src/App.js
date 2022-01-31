/** @format */

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Survey from "./Survey";
import SurveyQuestions from "./Survey/SurveyQuestions";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Survey />} />
				<Route exact path="/survey-questions" element={<SurveyQuestions />} />
			</Routes>
		</Router>
	);
}

export default App;
