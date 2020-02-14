import React,{useState} from 'react'
import Note from './Note';



function NotePage(){
//const [notes,setNotes]= useState(props.notes)
return(
    <>

    {this.props.notes.map(note=>{
     return   <Note></Note>
    })}


    </>
)

}

export default NotePage
