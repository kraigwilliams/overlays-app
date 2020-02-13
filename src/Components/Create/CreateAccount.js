import React,{Component} from 'react'

class CreateAccount extends Component{

Submit=event=>{
event.preventDefault()
}  


render(){
    return(
        <>
<form>
    <input type="text" placeholder="enter unique username" /><br/><br/>
    <input type="password" placeholder="enter strong password"/><br/><br/>
    <input type="submit"/>
</form>

        </>
    )
}

}

export default CreateAccount
