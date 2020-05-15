import React, { Component } from "react";
//import config from "../../config";
//import TokenService from "../../Services/token-service";
import NotesApiService from '../../Services/notes-api.service';
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
    heading:"",
    deleted:false,
    topicUrl:''
  };

  
  componentDidMount = ()=> {
    const topicName = this.props.match.params.topicName.replace("-"," ") || {};
  
    document.title = `${topicName} notes - Overlays`;
    
  NotesApiService.getNotes(topicName)
  .then(data=>this.setState({ notes: data, heading: topicName}))};
  
  
 handleDeleteNote = async (event)=>{
  
   await NotesApiService.deleteNote(event)
   this.componentDidMount()
  
  };

  goBack = ()=>{
    
    this.props.history.goBack();
  }

  render() {
    

    return (
      <>
      <span className="go-back" onClick={this.goBack}><i class="fas fa-arrow-circle-left fa-2x"></i>

</span >
          <h2>{this.state.heading}</h2>  
        <p>
          <Link to="/new-note">Add New Note</Link>
        </p>

        {this.state.notes.map(note => {
          return (
            <div key={note.note_title} className='all-notes'>
              
              
                <h3>
                  <span
                    
                    aria-label="delete-note"
                    className="delete-btn"
                    value={note.id}
                    onClick={(event)=>this.handleDeleteNote(event)}
                  >
                    <i className="far fa-trash-alt "></i>
                  </span>
                  
                  


                  {note.note_title}
                </h3>
              
              <p className= 'note_contents'>{note.note_contents}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default AllNotes;
