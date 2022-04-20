import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Survey from "./Survey";
import SurveyQuestion1 from "./Survey/SurveyQuestions/SurveyQuestion1";
import SurveyQuestion2 from "./Survey/SurveyQuestions/SurveyQuestion2";
import SurveyQuestion3 from "./Survey/SurveyQuestions/SurveyQuestion3";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Survey />} />
        <Route exact path="/survey-question1" element={<SurveyQuestion1 />} />
        <Route exact path="/survey-question2" element={<SurveyQuestion2 />} />
        <Route exact path="/survey-question3" element={<SurveyQuestion3 />} />
      </Routes>
    </Router>
  );
}

export default App;
