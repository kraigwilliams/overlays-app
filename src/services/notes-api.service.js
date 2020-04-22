import TokenService from './token-service'
import config from '../config'

const NotesApiService = {
  getNotes(topicName){
    
   
   return fetch(`${config.API_ENDPOINT}/notes/bytopic/${topicName}`, {
      headers: {
        authorization: "bearer " + TokenService.getAuthToken()
      }
    })
    
      .then(res => res.json())
       
        
        
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

  deleteNote(event){
    event.preventDefault();
    
    fetch(`${config.API_ENDPOINT}/notes/${event.currentTarget.value}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + TokenService.getAuthToken()
      }
    })
.then(this.getNotes())

}

}

export default NotesApiService