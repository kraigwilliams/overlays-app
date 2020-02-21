import React,{Component} from 'react';
import {Switch} from 'react-router';

import Header from '../Header/Header'
import Home from '../Home/Home';
//import Login from '../Login/Login';
import LoginForm from '../../Routes/Login/Login'
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import Submit from '../Submit/Submit';
import TopicsList from '../TopicsList/TopicsList';
import CreateGroup from '../Groups/CreateGroups'
import Register from '../Register/Register';
import NewNote from '../NotesPage/NewNote'
//import NoteListPage from '../NotesPage/NotesListPage';
import AllNotes from '../NotesPage/AllNotes';
import Logout from '../Logout/Logout'

class App extends Component{



  render() {


    return (
    <>

    <Header />
    <main className='App'>
<Switch>
    <PrivateRoute
    path="/topics/:topicId"
    component={AllNotes}
    /> 



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
    component={TopicsList}
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

    <PrivateRoute
    path="/logout"
    component={Logout}
    />

</Switch>
   
    </main>
    </>
  )
}
}
export default App;