import React from 'react'

export const GetTodos = ({todos}) => {
  return (
    <div>
        {todos.map(function(todo){
            return (
                <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed==true?"Completed":"Mark as done"}</button>
                    

                </div>
            )

           
            
            

        })}
    </div>
  )
}
