import React, { Component } from "react";
//import Note from './Note';
import { Link } from "react-router-dom";
import "./notes.css";
import config from "../../config";
import TokenService from "../../Services/token-service";
import { Button } from "../Utils/Utils";


/*
NotesListPage is placed into a map function and is used to diplay a list of all a user's topics
*/ 
class TopicsListPage extends Component {
  static defaultProps = {
    topic: {}
  }
  
  /**
   * 
   * @param {}
   */


handleDelete = event => {
    event.preventDefault();

    const topicId = this.props.topic.id;
    
    fetch(`${config.API_ENDPOINT}/topics/${topicId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken()
      }
    }).then(this.props.history.push("/"));
  };

  render() {
  
    return (
      <div className="all-topics">
        <Link to={`/topics/${this.props.topic.slug}`}>
          <h2 className="topics-heading">{this.props.topic.topic_name} </h2>
        </Link>
        <p className="list-contents">
          <a className="visit-url" href={this.props.topic.topic_url}>
            {this.props.topic.topic_url}
          </a>

          <Link to={`/topics/${this.props.topic.topic_name}`} >View Notes</Link>

          <Link to="/new-note">
            <i className="fas fa-plus-square"></i> Add Note to Topic
            
          </Link>

          <Button
            className="delete"
            onClick={event => this.handleDelete(event)}
          >
            Delete
          </Button>
        </p>
      </div>
    );
  }
}


export default TopicsListPage;
