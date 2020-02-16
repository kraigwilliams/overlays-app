import React, { Component,useState } from "react";
import config from '../../config'
//import topicsApiService from '../../services/topics-api-service';
import TokenService from '../../services/token-service';

class Submit extends Component {

  //  state={
  //   topics:[]
  // }

  
  onSubmit = event => {
    event.preventDefault();
    const { topic_name, topic_url } = event.target;
    fetch(`${config.API_ENDPOINT}/topics`,{
    
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization:"bearer " + TokenService.getAuthToken()
      },
      body: JSON.stringify({
        topic_url: topic_url.value,
        topic_name: topic_name.value
      })
    })
      .then(res => res.json())
      .then( 
        // this.componentDidMount()
        this.props.history.push('/topics')
        //console.log(data);
      );
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="topic_url" placeholder="Url to Add" />
          <br />
          <br />
          <input type="text" name="topic_name" placeholder="Submit New Topic" />
          <br />
          <br />
          {/* <label htmlFor="Add to Topic"></label> */}
         
          <br />
          <br />
          {/* <label htmlFor="select-group">Share to Group</label><br/><br/>
          <select id="select-group">
            <option></option>
          </select> */}
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default Submit;
