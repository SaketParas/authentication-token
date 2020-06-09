import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Login from './component/Login';
import Admin from './component/Admin';
import Logout from './component/Logout';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Admin" component={Admin} />
      <Route path="/Logout" component={Logout} />
    </BrowserRouter>
  );
}

export default App;
