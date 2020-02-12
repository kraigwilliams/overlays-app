import React,{Component} from 'react';
import {Route} from 'react-router';

import Header from './Header/Header'
import Home from './Home/Home';
import Login from './Login/Login';
import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import Submit from './Submit/Submit';
import Topics from './Topics/Topics';
import CreateGroup from './Components/Groups/CreateGroups'
import Register from './Register/Register';

class App extends Component{
  render() {


    return (
    <div>

    <Header />
    <main className='App'>
    <PublicOnlyRoute
    exact path="/"
    component={Home}
    />

    <PublicOnlyRoute
    path="/login"
    component={Login}
    />

    <PrivateRoute
    path="/submit"
    component={Submit}
    
    />
    <PrivateRoute
    path="/topics"
    component={Topics}
    />

    <PublicOnlyRoute
    path="/register"
    component={Register}
    />
    <PrivateRoute
    path="/create-group"
    component={CreateGroup}
    />
    </main>
    </div>
  )
}
}
export default App;