import React,{Component} from 'react';
import {Route} from 'react-router';

import Header from './Header/Header'
import Home from './Home/Home';
import Login from './Login/Login';
import Submit from './Submit/Submit';
import Topics from './Topics/Topics';
import CreateAccount from './Create/CreateAccount'


class App extends Component{
  render() {


    return (
    <div>

    <Header />
    <main className='App'>
    <Route
    exact path="/"
    component={Home}
    />

    <Route
    path="/login"
    component={Login}
    />

    <Route
    path="/submit"
    component={Submit}
    
    />
    <Route
    path="/topics"
    component={Topics}
    />

    <Route
    path="/create-account"
    component={CreateAccount}
    />
    
    </main>
    </div>
  )
}
}
export default App;