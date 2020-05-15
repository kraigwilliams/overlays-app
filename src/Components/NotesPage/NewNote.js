import React, { Component } from "react";
import config from "../../config";
import TokenService from "../../Services/token-service";
import { Input, Textarea, Button,Select} from "../Utils/Utils";

/*
New Note renders a form for users to submit a new note to add to a topic
*/ 
class newNote extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    document.title = "Add New Note - Overlays";
    fetch(`${config.API_ENDPOINT}/topics`, {
      headers: {
        authorization: "bearer " + TokenService.getAuthToken()
      }
    }).then(res =>
      res.json().then(data => {
        this.setState({ topics: data });
      })
    );
  }
  onSubmit = event => {
    event.preventDefault();
    const { note_title, note_contents, from_topic} = event.target;
    
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken()
      },
      body: JSON.stringify({
        note_title: note_title.value,
        note_contents: note_contents.value,
        from_topic: from_topic.value
      
        
      })
    })
      .then(res => res.json())
      .then(
        
         this.props.history.push("/topics")
        
        
      );
  };


  goBack = ()=>{
    
    this.props.history.goBack();
  }

  render() {
    return (
      <>
      <span className="go-back" onClick={this.goBack}><i class="fas fa-arrow-circle-left fa-2x"></i>

</span >
        <h3>Make a new Note</h3>
        <form className="note-form" onSubmit={this.onSubmit}>
          <label id="note-label" htmlFor="note_title">
            Enter Note Title
          </label>
         
          <Input
          aria-label="enter note title"
          aria-required="true"
          required
            type="text"
            id="note_title"
            name="note_title"
            placeholder="Note Title"
          />
        
          
          <label id="note-label" htmlFor="note_contents">
            Enter Note Content
          </label>
          <Textarea
          aria-label="write note contents here"
          aria-required="true"
          required
            // id="note_contents"
            name="note_contents"
            placeholder="Enter Note Text"
          ></Textarea>
          
          
          <Select name="from_topic" aria-label='select a topic' className="note-select">
            {this.state.topics.map(topic => {
              return (
                <option name={topic.id} value={topic.id} key={topic.id}>
                  {topic.topic_name}
                </option>
              );
            })}
          </Select>
          <Button aria-label="submit new note" className="submit-topic-btn" type="submit">Submit</Button>
        </form>
      </>
    );
  }
}

export default newNote;
