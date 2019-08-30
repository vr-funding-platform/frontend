import React, { useEffect, useState } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { useMedia } from 'react-use';
import NavBar from './Components/NavBar';
import NavBarUser from './Components/NavBarUser';
import NavBarMobile from './Components/NavBar-mobile';
import NavBarUserMobile from './Components/NavBarUser-mobile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProjectList from './Components/ProjectList';
import axios from 'axios';

import Protected from './Components/Protected';

import './App.css';
// import Footer from "./Components/Footer";

function App() {
  //this determines whether the navbar shows the user info or not
  const [navUser, setNavUser] = useState(false);
  const match800 = useMedia('(max-width: 800px)');

  //Fake authorization
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setNavUser(true);
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setNavUser(false);
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
      {match800
        ? [navUser ? <NavBarUserMobile /> : <NavBarMobile />]
        : [navUser ? <NavBarUser /> : <NavBar />]}
      <Link to="/protected">Protected</Link>

      <Route
        path="/projects"
        render={props => {
          return projects && <ProjectList {...props} projects={projects} />;
        }}
      />
      <Route
        exact path="/"
        render={props => <Login {...props} auth={fakeAuth} />}
      />
      <Route
        path="/signup"
        render={props => <Signup {...props} auth={fakeAuth} />}
      />
      <PrivateRoute path="/protected" component={Protected} />
      {/* <footer>
        <Footer/>
      </footer> */}
    </div>
  );
}

export default App;
