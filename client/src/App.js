import React from 'react';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Signup /> */}
      <Login />
    </div>
  );
}

export default App;
