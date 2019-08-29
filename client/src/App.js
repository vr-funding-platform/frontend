import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';
import Footer from "./Components/Footer";
import UserCard from "./Components/Donor";

function App() {
  return (
    <div className="App">
     <NavBar />
     <UserCard/>
      {/* <Route path="/projects" component={Projects} /> */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
        <Footer/>
    </div>
  );
}


export default App;

