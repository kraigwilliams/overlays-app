import TokenService from './token-service'
import config from '../config'

const TopicsApiService = {
  /**
  * gets all a users  topics from the database.
   * 
   */
  getTopics (){
    
    return fetch(`${config.API_ENDPOINT}/topics`, {
      headers:{
        authorization:"bearer " + TokenService.getAuthToken()
      }
    })
    
      .then(res => res.json())
      
    
  },

  /**
   * Gets all the notes attached to a topic 
   *
   * @param {number} topicId the id of the topic used to get all the notes attached to it.
   */
  getTopic(topicId) {
    return fetch(`${config.API_ENDPOINT}/topics/${topicId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
  
  
}

export default TopicsApiService