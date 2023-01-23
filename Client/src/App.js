import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SigninPage from "./components/Pages/SigninPage/SigninPage";
import Homepage from "./components/Pages/Homepage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
