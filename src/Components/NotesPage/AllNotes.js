import React, { Component } from "react";
//import config from "../../config";
//import TokenService from "../../Services/token-service";
import NotesApiService from '../../Services/notes-api.service'
//import Note from './Note'
import { Link } from "react-router-dom";
import "./notes.css";

/*
AllNotes is passed into a map function and is used to show all of the notes within a topic
*/
class AllNotes extends Component {
//  static defaultProps = {
//      match: {params:{topicName:{}}}
//    }


  state = {
    notes: [],
    heading:null
  };

  componentDidMount() {
    const topicName = this.props.match.params.topicName.replace("-"," ") || {}
    document.title = `${topicName} notes - Overlays`
    
  NotesApiService.getNotes(topicName)
  .then(data=>this.setState({ notes: data, heading: topicName}))}
  
  
 async handleDeleteNote(event){
  
   await NotesApiService.deleteNote(event)
    await NotesApiService.getNotes();
  };

  render() {
    

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
                    className="delete-btn"
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
