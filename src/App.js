import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import ErrorNotification from "components/Notification/ErrorNotification";

function App() {
  const routing = useRoutes(routes);
  return (
    <div className="App">
      {routing}
      <ErrorNotification />
    </div>
  );
}

export default App;
