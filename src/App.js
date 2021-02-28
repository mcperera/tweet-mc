import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import { Login, Profile, Users, Feed } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Layout>
          <ProtectedRoute path={"/feed"} exact component={Feed} />
          <ProtectedRoute path={"/users"} exact component={Users} />
          <ProtectedRoute path={"/profile"} exact component={Profile} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
