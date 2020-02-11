import React, { Component } from "react";

class Submit extends Component {
  onSubmit = event => {
      event.preventDefault()
      const {
          topic_name,
          topic_url,

      }= event.target
      fetch('http://localhost:8000/api/topics',{
        'method':'POST',
        headers:{
            'content-type': 'application/json'
        },
          body:JSON.stringify({
            topic_url:topic_url.value,
            topic_name:topic_name.value
          })
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
      })
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="topic_url" placeholder="Url to Add" />
          <br />
          <br />
          <input type="text" name="topic_name"placeholder="Topic Name " />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default Submit;
