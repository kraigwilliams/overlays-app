import React, {Component } from 'react';


class CreateGroup extends Component{
render(){

    return(
        <>
        <form>
         <h2>Add a Group</h2>
        <label htmlFor="group-name">Enter Group Name</label><br/><br/>
        <input id="group-name" type="text" placeholder="Group Name" /><br/><br/>
         <input type="submit"/>
         </form>
        </>
    )
}
}


export default CreateGroup