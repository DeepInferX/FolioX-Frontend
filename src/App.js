import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import EmailVerifySuccess from "./components/EmailVerifySuccess";
import Landing from "pages/Landing/Landing";
import GetStarted from "pages/GetStarted/GetStarted";
import AdminOption from "pages/AdminOption/AdminOption";
import AdminRegister from "pages/AdminRegister/AdminRegister";
import AdminLogin from "pages/AdminLogin/AdminLogin";
import AdminRegistrationConfirmationOverlay from "pages/AdminRegister/RegistrationOverlay";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/get-started" component={GetStarted} />
          <Route path="/admin-option" component={AdminOption} />
          <Route path="/admin-register" component={AdminRegister} />
          <Route path="/admin-login" component={AdminLogin} />

          <Route
            path="/admin-registration-confirmation-overlay"
            component={AdminRegistrationConfirmationOverlay}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
