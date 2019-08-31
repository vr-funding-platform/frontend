import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useMedia } from 'react-use';
import NavBar from './Components/NavBar';
import NavBarUser from './Components/NavBarUser';
import NavBarMobile from './Components/NavBar-mobile';
import NavBarUserMobile from './Components/NavBarUser-mobile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProjectList from './Components/ProjectList';
import Footer from './Components/Footer';
import DonorList from './Components/DonorList';
import axios from 'axios';

import BGImg from './Components/BG-Img';
import './App.css';

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
      setTimeout(cb, 50); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setNavUser(false);
      setTimeout(cb, 50); // fake async
    }
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} projects={projects} />
        ) : (
          <Redirect to="/" />
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
      <BGImg />
      {match800
        ? [navUser ? <NavBarUserMobile /> : <NavBarMobile />]
        : [navUser ? <NavBarUser /> : <NavBar />]}
      <Route
        exact
        path="/"
        render={props => <Login {...props} auth={fakeAuth} />}
      />
      <Route
        path="/signup"
        render={props => <Signup {...props} auth={fakeAuth} />}
      />
      <Route
        path="/projects"
        render={props => {
          return projects && <ProjectList {...props} projects={projects} />;
        }}
      />
      <PrivateRoute
        path="/user/1"
        component={DonorList}
      />
      <Footer />
    </div>
  );
}

export default App;
