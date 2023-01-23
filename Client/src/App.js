import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <NavBar className="navbar" />
      <SignIn className="signin" />
    </div>
  );
}

export default App;
