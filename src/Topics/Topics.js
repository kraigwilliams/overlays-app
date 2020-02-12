import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topics extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/topics")
      .then(res => res.json())
      .then(data => this.setState({ topics: data }));
  }

  render() {
    return (
      <>
        <p>
          <Link to="/create-group">Create a Group</Link>{" "}
          <Link to="/groups">View Groups</Link>
        </p>
        {this.state.topics.map(topic => {
          return (
            <div>
              <h2>YOUR TOPICS</h2>

              <h4>{topic.topic_name}</h4>
              <p>
                <a href={topic.topic_url}>{topic.topic_url}</a>
                <select>
                  <option>Share to Group</option>
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
