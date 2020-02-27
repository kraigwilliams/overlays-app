import React,{Component} from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'

class newNote extends Component{

    state={
       topics:[]
    }

    componentDidMount(){
      document.title ="Enter New Note - Overlays"
         fetch(`${config.API_ENDPOINT}/topics`,{
        headers:{
          authorization:"bearer " + TokenService.getAuthToken()
        }
      })
      .then(res =>res.json()
      .then(data=>{
        
        this.setState({topics:data})})
      ) 



    }
onSubmit=event=>{
    event.preventDefault()
    const {note_title,note_contents,from_topic}= event.target
    console.log("trying to get article id",from_topic.value)
    fetch(`${config.API_ENDPOINT}/notes`,{
    
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization:"bearer " + TokenService.getAuthToken()
        },
        body: JSON.stringify({
          note_title: note_title.value,
          note_contents: note_contents.value,
          from_topic:from_topic.value
          
          
        })
      })
        .then(res => res.json())
        .then( 
          // this.componentDidMount()
          this.props.history.push('/topics')
          //console.log(data);
        );
}


render(){

    return(
        <>
        <h3>Make a new Note</h3>
        <form className="note-form" onSubmit={this.onSubmit}>
          <label id="note-label" htmlFor="note_title">Enter Note Title</label>
            <input type="text" id="note_title" name="note_title"placeholder="Note Title"/><br/><br/>
            <label id="note-label" htmlFor="note_contents">Enter Note Content</label>
            <textarea id="note_contents" name="note_contents" placeholder="Enter Note Text"></textarea><br/><br/>
            <select name="from_topic">
                {this.state.topics.map(topic=>{
                    return <option name={topic.id} value={topic.id}key={topic.id}>{topic.topic_name}</option>
                })}
            </select>
            <input type="submit"/>


        </form>
        </>
    )
}


}


export default newNote