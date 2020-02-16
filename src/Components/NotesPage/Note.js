import React,{Component} from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'




class Note extends Component{


componentDidMount(){
//const topicId= this.props.match.params.TopicId

    fetch(`${config.API_ENDPOINT}/notes`,{
        headers:{
          authorization:"bearer " + TokenService.getAuthToken()
        }
      })
      .then(res =>res.json()
      .then(data=>this.setState({topics:data}))
      ) 
}

render(){

return(
    <>
        
    </>
)

}
}


export default Note