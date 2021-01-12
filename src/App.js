import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import EmailVerifySuccess from "./components/EmailVerifySuccess";
import Landing from "pages/Landing";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/email-verify-success" component={EmailVerifySuccess} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
