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
render(){
//   <Note key={this.state.notes.id} note={this.state.notes} />
  
return(
    <>

    <Link to="/new-note">Add New Note</Link>


    {this.state.notes.map(note=>{
    
   return(
    
   <div key={note.note_title} className="all-notes">
        <h2 >{note.topic_name}</h2> 
   <Link to="#"><h3>{note.note_title}</h3></Link>
   <p  >{note.note_contents}</p></div>)
   }
        )



    }
    </>
    )


}


  }
  
export default AllNotes