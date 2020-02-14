import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import config from '../../config'
import TokenService from '../../services/token-service'
import NoteListPage from '../NotesPage/NotesListPage';


class Topics extends Component {
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
        <p>
        <Link to="/submit">Submit New Topic</Link>
          <Link to="/create-group">Create a Group</Link>
          <Link to="/groups">View Groups</Link>
        </p>
        <h2>YOUR TOPICS</h2>
        {this.state.topics.map(topic => {
        //key={topic.id}
          return (
            <div>
            

             <Link  to={`/topics/${topic.id}`}><h4>{topic.topic_name}</h4></Link>
              <p>
                <a href={topic.topic_url}>{topic.topic_url}</a>
                {/* <label htmlFor="select-group">Share to Group:</label> */}
                {/* <select id="select-group" value={this.state.groups}>
                  {this.state.groups.map(group=>{
                    return <option>{group.user_groups}</option>
                  })}
                  
                </select> */}
               <Link to={`/topic/${topic.id}`}>View Notes</Link>
               <Link to="/new-note">Add Note to Topic</Link>
                <button>Share</button>
              </p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Topics;
