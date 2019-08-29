import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProjectList from './Components/ProjectList';
import axios from 'axios';

import './App.css';
// import Footer from "./Components/Footer";

function App() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    axios
      .get('https://vr-overlord-server.herokuapp.com/projects/')
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.log('Error on axios call', err);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Route path="/projects" render={(props) => {
        return projects && <ProjectList {...props} projects={projects} />;
      }} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* <footer>
        <Footer/>
      </footer> */}
    </div>
  );
}

export default App;
