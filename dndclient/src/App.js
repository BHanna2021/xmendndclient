import React, {useState, useEffect} from 'react';
import AuthLogin from './components/auth/AuthLogin';
import AuthCreate from './components/auth/AuthCreate';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterIndex from './components/character/CharacterIndex';
import './App.css';

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

  const protectedViews = () => {
    return (
      sessionToken === localStorage.getItem('token') ? <CharacterIndex token={sessionToken}/> : <AuthLogin updateToken={updateToken}/>
      )
  }

  return (
    <div>
      <AuthLogin />
      {protectedViews()}
    </div>
  );
}

export default App;
