import React,{Component} from 'react';
import {Route} from 'react-router';

import Header from './Header'
import Home from './Home';
import Login from './Login';
class App extends Component{
  render() {


    return (
    <div>

    <Header />
    <main className='App'>
    <Route
    path="/"
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