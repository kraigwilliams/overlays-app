import React, { Component} from "react";
import { Link } from "react-router-dom";
import config from '../../config'
import TokenService from '../../services/token-service'
import NoteListPage from '../NotesPage/NotesListPage';
//import Nav from '../Nav/Nav'

class TopicsList extends Component {
  state = {
    topics: [],
    groups:[]
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/topics`,{
      headers:{
        authorization:"bearer " + TokenService.getAuthToken()
      }
    })
    
      .then(res => res.json())
      .then(data => this.setState({ topics: data }));

      // fetch(`${config.API_ENDPOINT}/groups`,{
      //   headers:{
      //     authorization:"bearer " + TokenService.getAuthToken()
      //   }
      // })
      // .then(res =>res.json()
      // .then(data=>this.setState({groups:data}))
      // )
  }

  render() {
    return (
      <>
        
        
        <Link to="/submit">Submit New Topic</Link>
              <h2>YOUR TOPICS</h2>

        {this.state.topics.map( topic => {

        return <NoteListPage key={topic.id} topic={topic}/> })}
      
        </> ) 



        
}
}

export default TopicsList;
