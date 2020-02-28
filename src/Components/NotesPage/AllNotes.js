import React,{Component} from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'
//import Note from './Note'
import {Link } from 'react-router-dom'
import './notes.css'


class AllNotes extends Component{
    
    state={
        notes:[]
    }

    componentDidMount(){
        document.title="Topic Notes - Overlays"
        const topicId= this.props.match.params.topicId
        

        fetch(`${config.API_ENDPOINT}/notes/${topicId}`,{
            headers:{
                authorization:"bearer " + TokenService.getAuthToken()
              }
        })
        .then(res=> res.json())
        .then(data=>{
            
            this.setState({notes:data})
                      
        }
            )

    }

    deleteNote= event=>{
        event.preventDefault();
        
        
        fetch(`${config.API_ENDPOINT}/notes/${event.target.value}`,{
          method:"DELETE",
          headers: {
            "content-type": "application/json",
            authorization: "bearer " + TokenService.getAuthToken()
          }
        
        })
        .then(this.props.history.push('/'))
        }

render(){
//   <Note key={this.state.notes.id} note={this.state.notes} />
  
return(
    <>

    <p><Link to="/new-note">Add New Note</Link></p>


    {this.state.notes.map(note=>{
    
   return(
    
   <div key={note.note_title} className="all-notes">
        
   <Link to="#"><h3><button name="delete-btn" value={note.id} onClick={this.deleteNote}><i className="far fa-trash-alt"></i>

</button>{note.note_title}</h3></Link>
   <p  >{note.note_contents}</p></div>)
   }
        )



    }
    </>
    )


}


  }
  
export default AllNotes