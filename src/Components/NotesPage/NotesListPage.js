import React, { Component } from "react";
//import Note from './Note';
import { Link } from "react-router-dom";
import "./notes.css";
import config from "../../config";
import TokenService from "../../Services/token-service";
import { Button } from "../Utils/Utils";


class NoteListPage extends Component {
  
  // when delete button is clicked the topic is deleted

handleDelete = event => {
    event.preventDefault();

    const topicId = this.props.topic.id;
    console.log(topicId, "topicId")
    fetch(`${config.API_ENDPOINT}/topics/${topicId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken()
      }
    }).then(this.props.history.push("/"));
  };

  render() {
    //const topicId= this.props.match.params.TopicId
    
    //console.log(slug, "slug")
    return (
      <div className="all-topics">
        <Link to={`/topics/${this.props.topic.slug}`}>
          <h2 className="topics-heading">{this.props.topic.topic_name} </h2>
        </Link>
        <p className="list-contents">
          <a className="visit-url" href={this.props.topic.topic_url}>
            {this.props.topic.topic_url}
          </a>
"
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

export default NoteListPage;
