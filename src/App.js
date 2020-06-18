import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './component/Login';
import Admin from './component/Admin';
import Logout from './component/Logout';
import SignIn from './component/SignIn';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      xSelected : {
        username :'',
        password : '',
      }
    }
  }
  xSeletctedFunc = (xSelected) => {
    console.log(xSelected)
    this.setState({
      xSelected: xSelected
    })
  }
  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <Route path="/Admin" component={Admin} />
        <Route path="/Logout" component={Logout} />
        <Route exact path="/" render={(props) => { return (<SignIn option_data={(xSelected) => { this.xSeletctedFunc(xSelected) }} {...props} />) }} />
        <Route path="/Login" render={(props) => { return (<Login xSelected={this.state.xSelected} {...props} />) }} />
      </BrowserRouter>
    );
  }
}

export default App;
