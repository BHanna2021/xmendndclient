import React, {useState, useEffect} from 'react';
import Auth from './components/auth/Auth';
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

  // const protectedViews = () => {
  //   return (
  //     // sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>
  //     )
  // }

  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
