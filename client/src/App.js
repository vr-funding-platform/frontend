import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
        
      </p>
      <footer>
        <Footer/>
      </footer>
      <NavBar />

      
      {/* <Route path="/projects" component={Projects} /> */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}


export default App;

