import Login from './components/login'
import Home from './components/home'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from "react";
function App() {
  const [loggedIn, setLogin] = useState()
  const history = useHistory();
  const count = 1;
  const UserLogin = () => {
    setLogin(1)
  }
  useEffect(() => {
    if(loggedIn){
      history.push("/home");
    }
  }, [loggedIn])
  return (
      <main>
          <Switch>
            <Route path='/home' component={() => (<Home loggedIn={loggedIn}/>)} />
            <Route path='/' component={() => (<Login UserLogin={UserLogin}/>)}  />
          </Switch>
      </main>
  )
}

export default App;
