import TokenService from '../services/token-service'
import config from '../config'

const TopicsApiService = {
  getTopics() {
    return fetch(`${config.API_ENDPOINT}/groups`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getTopic(topicId) {
    return fetch(`${config.API_ENDPOINT}/groups/${groupId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // getArticleComments(articleId) {
  //   return fetch(`${config.API_ENDPOINT}/articles/${articleId}/comments`, {
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  postComment(articleId, text) {
    return fetch(`${config.API_ENDPOINT}/groups`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        article_id: group_name,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default GroupsApiService