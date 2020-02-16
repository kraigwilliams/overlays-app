import React,{Component} from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'

class AllNotes extends Component{
    
    state={
        notes:[{
            id:"4",
            note_title:"stuff",
            note_contents:"this is really great"
        }]
    }

    componentDidMount(){
        const topicId= this.props.match.params.topicId
        console.log("match object",this.props.match, "state",this.state.notes)

        fetch(`${config.API_ENDPOINT}/notes/${topicId}`,{
            headers:{
                authorization:"bearer " + TokenService.getAuthToken()
              }
        })
        .then(res=> res.json())
        .then(data=>{
            console.log("this is data", data)
            this.setState({notes:data})
                      
        }
            )

    }
render(){

    return(

<>
{this.state.notes.map(note=>{
  return  <>
<h3 >{note.note_title}</h3>
<p>{note.note_contents}</p>
</>
})}



</>

    )
}




}

export default AllNotes