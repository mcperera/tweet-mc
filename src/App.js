import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import { Login, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <ProtectedRoute path={"/"} exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
