import React, { useEffect, useState } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProjectList from './Components/ProjectList';
import axios from 'axios';

import Protected from './Components/Protected';

import './App.css';
// import Footer from "./Components/Footer";

function App() {
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100); // fake async
    }
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
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
      <Link to="/protected">Protected</Link>

      <Route
        path="/projects"
        render={props => {
          return projects && <ProjectList {...props} projects={projects} />;
        }}
      />
      <Route
        path="/login"
        render={props => <Login {...props} auth={fakeAuth} />}
      />
      <Route path="/signup" render={props => <Signup {...props} />} />
      <PrivateRoute path="/protected" component={Protected} />
      {/* <footer>
        <Footer/>
      </footer> */}
    </div>
  );
}

export default App;
