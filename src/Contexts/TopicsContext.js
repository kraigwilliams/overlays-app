import React, { Component } from 'react'

export const nullTopic = {
  author: {},
  //tags: [],
}

const TopicsContext = React.createContext({
  topic: nullTopic,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setTopic: () => {},
  clearTopic: () => {},
//   setComments: () => {},
//   addComment: () => {},
})

export default TopicsContext

export class TopicProvider extends Component {
  state = {
    topic: nullTopic,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setTopic = topic => {
    this.setState({ topic })
  }

//   setComments = comments => {
//     this.setState({ comments })
//   }

  clearTopic = () => {
    this.setTopic(nullTopic)
    //this.setComments([])
  }

//   addComment = comment => {
//     this.setComments([
//       ...this.state.comments,
//       comment
//     ])
//   }

  render() {
    const value = {
      topic: this.state.topic,
     // comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTopic: this.setTopic,
     // setComments: this.setComments,
      clearTopic: this.clearTopic,
      //addComment: this.addComment,
    }
    return (
      <TopicContext.Provider value={value}>
        {this.props.children}
      </TopicContext.Provider>
    )
  }
}