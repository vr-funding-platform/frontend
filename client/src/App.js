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
      <NavBar />
  

      
      {/* <Route path="/projects" component={Projects} /> */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}


export default App;

