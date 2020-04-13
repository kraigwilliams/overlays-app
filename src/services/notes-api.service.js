import TokenService from './token-service'
import config from '../config'

const NotesApiService = {
  getNotes(topicName){
    
   // const topicName = this.props.match.params.topicName;
    //const topicId = this.props.match.params.topicId;
 //   console.log("newest", this.props.match.params.topicName)
   return fetch(`${config.API_ENDPOINT}/notes/bytopic/${topicName}`, {
      headers: {
        authorization: "bearer " + TokenService.getAuthToken()
      }
    })
    
      .then(res => res.json())
        //console.log(res.body,topicName, "service rest")
        
        
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

  deleteNote(event){
    event.preventDefault();
    console.log("WOWWW")
    console.log(event.currentTarget,"current target");
    fetch(`${config.API_ENDPOINT}/notes/${event.currentTarget.value}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken()
      }
    })


}

}

export default NotesApiService