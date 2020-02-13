import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import config from '../../config'
class Topics extends Component {
  state = {
    topics: [],
    groups:'Share to:'
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/users/topics`)
    //fetch("http://localhost:8000/api/users/topics")
      .then(res => res.json())
      .then(data => this.setState({ topics: data }));
      //fetch("http://localhost:8000/api/users/groups")
  }

  render() {
    return (
      <>
        <p>
          <Link to="/create-group">Create a Group</Link>
          <Link to="/groups">View Groups</Link>
        </p>
        <h2>YOUR TOPICS</h2>
        {this.state.topics.map(topic => {
          return (
            <div>
            

              <h4>{topic.topic_name}</h4>
              <p>
                <a href={topic.topic_url}>{topic.topic_url}</a>
                <label htmlFor="select-group">Share to Group:</label>
                <select id="select-group" value={this.state.groups}>
                  <option>Family</option>
                  <option>Friends</option>
                  <option>Co-Workers</option>
                  <option>React Enthusiasts</option>
                </select>
                <textarea placeholder="Enter a Special Note"></textarea>{" "}
                <button>Share</button>
              </p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Topics;
