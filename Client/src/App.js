import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
<<<<<<< Updated upstream
=======
import SignIn from "./components/SignIn";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <NavBar />
=======
      <NavBar className="navbar" />
      <SignIn className="signin" />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
