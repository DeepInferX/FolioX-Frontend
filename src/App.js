import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import EmailVerifySuccess from "./components/EmailVerifySuccess";
import Landing from "pages/Landing/Landing";
import GetStarted from "pages/GetStarted/GetStarted";
import Admin from "pages/Admin/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/admin"  */}
          <Route exact path="/" component={Landing} />
          <Route path="/get-started" component={GetStarted} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
