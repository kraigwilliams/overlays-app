import React,{Component} from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'

class newNote extends Component{

    state={
       topics:[]
    }

    componentDidMount(){
         fetch(`${config.API_ENDPOINT}/topics`,{
        headers:{
          authorization:"bearer " + TokenService.getAuthToken()
        }
      })
      .then(res =>res.json()
      .then(data=>this.setState({topics:data}))
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
        <form onSubmit={this.onSubmit}>
            <input type="text" name="note_title"placeholder="Note Title"/><br/><br/>
            <textarea name="note_contents" placeholder="Enter Note Text"></textarea><br/><br/>
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