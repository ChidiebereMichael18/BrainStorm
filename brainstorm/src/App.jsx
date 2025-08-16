import React from "react";
import RouterPath from "./routing/RouterPath";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <RouterPath />
    </Router>
  );
}

export default App;
