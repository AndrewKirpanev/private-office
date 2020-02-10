import React from "react";
import { Router } from "@reach/router";
import Profile from "components/pages/profile/profile";
import Login from "components/pages/login/login-form";

const App = () => (
  <Router>
    <Profile path="/app/profile" />
    <Login path="/app/login" />
  </Router>
);

export default App;
