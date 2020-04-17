import TokenService from './token-service'
import config from '../config'

const TopicsApiService = {
  getTopics (){
    
    return fetch(`${config.API_ENDPOINT}/topics`, {
      headers:{
        authorization:"bearer " + TokenService.getAuthToken()
      }
    })
    
      .then(res => res.json())
      
    
  },
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