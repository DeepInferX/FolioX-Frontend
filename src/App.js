import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import Notification from "components/Notification/Notification";
import axios from "axios";
import { useSelector } from "react-redux";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

function App() {
  axios.defaults.baseURL = "http://foliox.deepinferx.in/web/api";
  const isLoading = useSelector((store) => store.loading.isLoading);
  const routing = useRoutes(routes);
  return (
    <div className="App">
      {routing}
      <LoadingSpinner open={isLoading} />
      <Notification />
    </div>
  );
}

export default App;
