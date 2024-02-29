import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import NavBar from './components/NavBar';


function App() {

  return (
    <div>
    <Router>
  
      <NavBar>

        </NavBar>
     
    </Router>
    </div>
  );
}

export default App;


