import React, {Component } from 'react';
import config from '../../config'

class CreateGroup extends Component{

onSubmit= event=>{
    event.preventDefault();
    const{ group_name}= event.target;
    fetch(`${config.API_ENDPOINT}/groups`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },

        body:JSON.stringify({
          user_groups:group_name.value  
        })
    })
    .then(res => res.json())
    .then(data => {
  return    this.props.history.push('/topics');
    });

}

    render(){

    return(
        <>
        <form onSubmit={this.onSubmit} >
         <h2>Add a Group</h2>
        <label htmlFor="group-name">Enter Group Name</label><br/><br/>
        <input id="group-name" type="text" name="group_name"placeholder="Group Name" /><br/><br/>
         <input type="submit"/>
         </form>
        </>
    )
}
}


export default CreateGroup