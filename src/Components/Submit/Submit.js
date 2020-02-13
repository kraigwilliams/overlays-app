import React, { Component } from "react";
import config from '../../config'
import topicsApiService from '../../services/topics-api-service';
class Submit extends Component {
  onSubmit = event => {
    event.preventDefault();
    const { topic_name, topic_url } = event.target;
    fetch(`${config.API_ENDPOINT}/topics`,{
    //fetch("http://localhost:8000/api/topics", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        topic_url: topic_url.value,
        topic_name: topic_name.value
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="topic_url" placeholder="Url to Add" />
          <br />
          <br />
          <input type="text" name="topic_name" placeholder="Topic Name " />
          <br />
          <br />
          <label htmlFor="Add to Topic"></label>
          <select>
          <option>
                   Chose a Topic
            </option>
            <option>
                   React
            </option>
            <option>
                   Shopping
            </option>
          </select>
          <br />
          <br />
          <label htmlFor="select-group">Share to Group</label><br/><br/>
          <select id="select-group">
            <option></option>
          </select>
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default Submit;
