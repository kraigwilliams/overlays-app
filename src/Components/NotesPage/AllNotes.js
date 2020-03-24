import React, { Component } from "react";
import config from "../../config";
import TokenService from "../../services/token-service";
//import Note from './Note'
import { Link } from "react-router-dom";
import "./notes.css";

class AllNotes extends Component {
  state = {
    notes: [],
    heading:null
  };

  componentDidMount() {
    document.title = "Topic Notes - Overlays";
    this.getNotes();
  }
  getNotes = () => {
    const topicName = this.props.match.params.topicName;
    //const topicId = this.props.match.params.topicId;
    console.log("newest", this.props.match.params.topicName)
    fetch(`${config.API_ENDPOINT}/notes/bytopic/${topicName}`, {
      headers: {
        authorization: "bearer " + TokenService.getAuthToken()
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("all data", data);
        this.setState({ notes: data });
        this.setState({ heading: this.props.match.params.topicName});
      });
  };
  deleteNote = event => {
    event.preventDefault();
    console.log(event.currentTarget);
    fetch(`${config.API_ENDPOINT}/notes/${event.currentTarget.value}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken()
      }
    }).then(this.getNotes);
  };

  render() {
    //   <Note key={this.state.notes.id} note={this.state.notes} />

    return (
      <>
      
          <h2>{this.state.heading}</h2>  
        <p>
          <Link to="/new-note">Add New Note</Link>
        </p>

        {this.state.notes.map(note => {
          return (
            <div key={note.note_title} className="all-notes">
              
              <Link to="#">
                <h3>
                  <button
                    name="delete-btn"
                    value={note.id}
                    onClick={this.deleteNote}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                  {note.note_title}
                </h3>
              </Link>
              <p>{note.note_contents}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default AllNotes;
