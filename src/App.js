import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
