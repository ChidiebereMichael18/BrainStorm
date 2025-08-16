import React from "react";
import RouterPath from "./routing/RouterPath";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouterPath />
      </Router>
    </ThemeProvider>
  );
}

export default App;
