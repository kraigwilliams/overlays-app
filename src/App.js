import React,{Component} from 'react';
import {Route} from 'react-router';

import Header from './Header/Header'
import Home from './Home/Home';
import Login from './Login/Login';
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
    </main>
    </div>
  )
}
}
export default App;