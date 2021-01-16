import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import EmailVerifySuccess from "./components/EmailVerifySuccess";
import Landing from "pages/Landing/Landing";
import GetStarted from "pages/GetStarted/GetStarted";
import AdminOption from "pages/AdminOption/AdminOption";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/get-started" component={GetStarted} />
          <Route path="/admin-option" component={AdminOption} />

          {/* <Route path="/email-verify-success" component={EmailVerifySuccess} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
