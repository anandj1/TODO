import { useState } from 'react'

import { CreateTodo } from '../component/CreateTodo'
import { GetTodos } from '../component/GetTodos'



function App() {
  const[todo,settodo] = useState([])

  fetch("http://localhost:7000/todos")
  .then(async(res)=>{
    const json = await res.json()
    console.log(json)
    settodo(json.data)


  })


  return (
    <div>
    <CreateTodo/>
    <GetTodos todos={todo}></GetTodos>

    </div>
  
  )
}

export default App
