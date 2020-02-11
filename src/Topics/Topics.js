import React,{Component} from 'react'


class Topics extends Component{
state={
topics:[]
}


componentDidMount(){
    fetch('http://localhost:8000/api/topics')
    .then(res=>res.json())
    .then(data=>
        this.setState({topics:data})
        )
}

    render(){
        return(
        <>
       {this.state.topics.map(topic=>{
        return (
        <div><h2>{topic.topic_name}</h2>
              <p>{topic.topic_url}</p></div>
              )
            
            })
        }
           
            

        </>

        )
    }
}

export default Topics