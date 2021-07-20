import React, { useState, useEffect } from 'react';
import AuthLogin from './components/auth/AuthLogin';
import AuthCreate from './components/auth/AuthCreate';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import CharacterIndex from './components/character/CharacterIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (
      sessionToken === localStorage.getItem('token') ? <CharacterIndex token={sessionToken} /> : <AuthLogin updateToken={updateToken} />
    )
  }

  return (
      <div className="App" >
        <ul>
          <li >
            <Link to="/" />
          </li>
          <li>
            <Link to="/SignUp" />
          </li>
          <li>
            {protectedViews()}
          </li>
        </ul>
        

      <Switch>
        <Route path="/Login">
          <AuthLogin />
        </Route>
        <Route path="/SignUp">
          <AuthCreate />
        </Route>
      </Switch>
      </div>
  );
}

export default App;
