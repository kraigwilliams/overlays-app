import React,{Component} from 'react'
import Note from './Note';
import {Link} from 'react-router-dom';



class NoteListPage extends Component{
    componentDidMount(){
        console.log("this.props.topic",this.props.topic)
    }
    
render(){
    //const topicId= this.props.match.params.TopicId
return (
    <>
    

     <Link  to={`/topics/${this.props.topic.id}`}><h4>{this.props.topic.topic_name}</h4></Link>
      <p>
        <a href={this.props.topic.topic_url}>{this.props.topic.topic_url}</a>
        {/* <label htmlFor="select-group">Share to Group:</label> */}
        {/* <select id="select-group" value={this.state.groups}>
          {this.state.groups.map(group=>{
            return <option>{group.user_groups}</option>
          })}
          
        </select> */}
       <Link to={`/topic/${this.props.topic.id}`}>View Notes</Link>
       <Link to="/new-note">Add Note to Topic</Link>
        <button>Share</button>
      </p>
    </>
  )
}

}

export default NoteListPage
