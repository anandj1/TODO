import { useState } from "react";

export function CreateTodo(){
    const[title,setTitle] = useState('')
    const[description,setdescription]= useState('')

    return (<div>
        <input type="text" style={{padding:10, margin:10}} onChange={(e)=>{return setTitle(e.target.value)}
            
        } placeholder="Enter Title"></input>  <br/> <br/>
        <input type="text" style={{padding:10, margin:10}} onChange={(e)=>
            setdescription(e.target.value)} placeholder="Enter Description"></input>   <br/> <br/>
        <button style={{padding:10}} onClick={()=>{
            fetch('http://localhost:7000/todo',{
                method:"POST",
                body:JSON.stringify({
                    title: title,
                    description : description,
                   
                }),
                headers:{
                    "Content-type":"application/json"
                }

            }).then(async (res)=>{
                const json = await res.json();
                alert('Todo Added!')
            })
            
        }}>Add a Todo</button>
    </div>)
}
