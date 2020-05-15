import React, { Component } from "react";
import config from "../../config";
//import topicsApiService from '../../services/topics-api-service';
import TokenService from "../../Services/token-service";
import "./Submit.css";
import { Button, Input } from "../Utils/Utils";

/*
Submit renders a form for a user to submit a new topic.S
*/
class Submit extends Component {
  //  state={
  //   topics:[]
  // }

  componentDidMount() {
    document.title = "Submit New Url Topic - Overlays";
  }

  /**
   *
   *  @param {event}
   * */

  onSubmit = (event) => {
    event.preventDefault();

    const { topic_name, topic_url } = event.target;
    fetch(`${config.API_ENDPOINT}/topics`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken(),
      },
      body: JSON.stringify({
        topic_url: topic_url.value,
        topic_name: topic_name.value,
      }),
    })
      //.then(res => res.json())
      .then(this.props.history.push("/topics"));
  };

  goBack = ()=>{
    
    this.props.history.goBack();
  }

  render() {
    return (
      <>
      <span className="go-back" onClick={this.goBack}><i class="fas fa-arrow-circle-left fa-3x"></i>

</span >
        <h2>Submit New Topic</h2>
        <form className="submit-form" onSubmit={this.onSubmit}>
          <h3>
            <label htmlFor="submit-name">New Topic Name </label>
          </h3>
          <Input
            id="submit-name"
            aria-required="true"
            required
            type="text"
            name="topic_name"
            placeholder="New Topic"
          />

          <h3>
            <label htmlFor="submit-url">New Topic URL</label>
          </h3>
          <Input
            id="submit-url"
            aria-required="true"
            required
            type="text"
            name="topic_url"
            placeholder="Url to Add"
          />

          <Button className="submit-topic-btn" type="submit">
            {" "}
            Submit
          </Button>
        </form>
      </>
    );
  }
}

export default Submit;
