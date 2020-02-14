import React,{Component} from 'react';
import {Route} from 'react-router';

import Header from '../Header/Header'
import Home from '../Home/Home';
//import Login from '../Login/Login';
import LoginForm from '../../Routes/Login/Login'
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import Submit from '../Submit/Submit';
import Topics from '../TopicsList/TopicsList';
import CreateGroup from '../Groups/CreateGroups'
import Register from '../Register/Register';
import NewNote from '../NotesPage/NewNote'

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
    component={LoginForm}

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

    <PrivateRoute
    path="/new-note"
    component={NewNote}
    />
    </main>
    </div>
  )
}
}
export default App;