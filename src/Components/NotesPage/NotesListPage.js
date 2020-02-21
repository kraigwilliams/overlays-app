import React, { Component } from "react";
//import Note from './Note';
import { Link } from "react-router-dom";
import "./notes.css";
import config from "../../config";
import TokenService from "../../services/token-service";

class NoteListPage extends Component {
  componentDidMount() {
    console.log("this.props.topic", this.props.topic);
  }

  // when delete button is clicked the topic is deleted
  handleDelete = event => {
    event.preventDefault();
    const topicId = this.props.topic.id;
    fetch(`${config.API_ENDPOINT}/topics/${topicId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken()
      }
    }).then(() => this.componentDidMount());
  };

  render() {
    //const topicId= this.props.match.params.TopicId
    return (
      <div className="all-topics">
        <Link to={`/topics/${this.props.topic.id}`}>
          <h2 className="topics-heading">{this.props.topic.topic_name}</h2>
        </Link>
        <p className="list-contents">
          <a href={this.props.topic.topic_url}>{this.props.topic.topic_url}</a>
          <br />
          {/* <label htmlFor="select-group">Share to Group:</label> */}
          {/* <select id="select-group" value={this.state.groups}>
          {this.state.groups.map(group=>{
            return <option>{group.user_groups}</option>
          })}
          
        </select> */}
          <Link to={`/topics/${this.props.topic.id}`}>View Notes</Link>
          <br />
          <Link to="/new-note">Add Note to Topic</Link>
          <br />

          <button onClick={this.handleDelete}>Delete</button>
        </p>
      </div>
    );
  }
}

export default NoteListPage;
