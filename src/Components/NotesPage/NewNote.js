import React, { Component } from "react";
import config from "../../config";
import TokenService from "../../Services/token-service";
import { Input, Textarea, Button,Select} from "../Utils/Utils";

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
    //console.log("latest", event.target)
    console.log("trying to get article id", from_topic.value);
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken()
      },
      body: JSON.stringify({
        note_title: note_title.value,
        note_contents: note_contents.value,
        topic_name: from_topic.value,
      
        
      })
    })
      .then(res => res.json())
      .then(
        
         this.props.history.push("/topics")
        
        
      );
  };

  render() {
    return (
      <>
        <h3>Make a new Note</h3>
        <form className="note-form" onSubmit={this.onSubmit}>
          <label id="note-label" htmlFor="note_title">
            Enter Note Title
          </label>
         
          <Input
          required
            type="text"
            id="note_title"
            name="note_title"
            placeholder="Note Title"
          />
        
          <br />
          <br />
          <label id="note-label" htmlFor="note_contents">
            Enter Note Content
          </label>
          <Textarea
            id="note_contents"
            name="note_contents"
            placeholder="Enter Note Text"
          ></Textarea>
          <br />
          <br />
          
          <Select name="from_topic" className="note-select">
            {this.state.topics.map(topic => {
              return (
                <option name={topic.id} value={topic.topic_name} key={topic.id}>
                  {topic.topic_name}
                </option>
              );
            })}
          </Select>
          <Button className="submit-topic-btn" type="submit">Submit</Button>
        </form>
      </>
    );
  }
}

export default newNote;
