import React,{Component} from 'react';
//import config from '../../config'
//import TokenService from '../../services/token-service'
import {Link} from 'react-router-dom';




class Note extends Component{
componentDidMount(){
  console.log("props", this.props.note)
}

// componentDidMount(){
// //const topicId= this.props.match.params.TopicId

//     fetch(`${config.API_ENDPOINT}/notes`,{
//         headers:{
//           authorization:"bearer " + TokenService.getAuthToken()
//         }
//       })
//       .then(res =>res.json()
//       .then(data=>this.setState({topics:data}))
//       ) 
// }

render(){

return(
    <>
      <h3 className="note-title">{this.props.note.note_title}</h3>
<p className="note-contents">{this.props.note.note_contents}</p>
<p><Link to="/new-note">Add Note</Link></p>
</>  
  
)

}
}


export default Note