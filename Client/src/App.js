import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SigninPage from "./components/Pages/SigninPage/SigninPage";
import Homepage from "./components/Pages/Homepage/Homepage";
import RegistrationPage from "./components/Pages/RegistrationPage/RegistrationPage";
import UserPage from "./components/Pages/UserPage/UserPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
