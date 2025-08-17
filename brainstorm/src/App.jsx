import React from "react";
import RouterPath from "./routing/RouterPath";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouterPath />
        <ToastContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
