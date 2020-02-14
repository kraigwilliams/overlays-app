import React,{Component} from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'

class newNote extends Component{

    state={
       topics:[]
    }

    componentDidMount(){
         fetch(`${config.API_ENDPOINT}/topics`,{
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
        <form>
            <input type="text" placeholder="Note Title"/><br/><br/>
            <textarea placeholder="Enter Note Text"></textarea><br/><br/>
            <select>
                {this.state.topics.map(topic=>{
                    return <option>{topic.topic_name}</option>
                })}
            </select>
            <input type="submit"/>


        </form>
        </>
    )
}


}


export default newNote