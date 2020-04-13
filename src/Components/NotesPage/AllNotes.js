import React, { Component } from "react";
//import config from "../../config";
//import TokenService from "../../Services/token-service";
import NotesApiService from '../../Services/notes-api.service'
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
    const topicName = this.props.match.params.topicName
  NotesApiService.getNotes(topicName)
  .then(data=>this.setState({ notes: data, heading: topicName}))}
  
  // getNotes = () => {
  //   const topicName = this.props.match.params.topicName;
  //   //const topicId = this.props.match.params.topicId;
  //   console.log("newest", this.props.match.params.topicName)
  //   fetch(`${config.API_ENDPOINT}/notes/bytopic/${topicName}`, {
  //     headers: {
  //       authorization: "bearer " + TokenService.getAuthToken()
  //     }
  //   })
  //     .then(res => res.json())
   

 async handleDeleteNote(event){
  console.log("WOWWW")
   await NotesApiService.deleteNote(event)
    await NotesApiService.getNotes();
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
              
              
                <h3>
                  <button
                    name="delete-btn"
                    value={note.id}
                    onClick={this.handleDeleteNote}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                  {note.note_title}
                </h3>
              
              <p>{note.note_contents}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default AllNotes;
