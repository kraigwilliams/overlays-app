import React,{Component} from 'react';
import {Route} from 'react-router';

import Header from './Header'
import Home from './Home';

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
    </main>
    </div>
  )
}
}
export default App;