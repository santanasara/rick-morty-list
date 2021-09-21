import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharDetail from "./pages/CharDetail";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <CharDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
