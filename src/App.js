import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/login";

import ProtectedRoute from "./component/ProtectedRoute";

import Home from "./component/Home";
import About from "./component/About";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <ProtectedRoute exact path="/home" component={Home}></ProtectedRoute>
        <ProtectedRoute exact path="/about" component={About}></ProtectedRoute>
      </Switch>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
