
const express = require('express')
const app = express()
const {createTodo} = require('./models/todo')
const {updateTodo} = require('./models/todo')
const cors = require('cors')

app.use(express.json())
app.use(cors({}))
const {Todo} = require('./models/TodoModel')



const PORT = 7000
app.get('/',(req,res)=>{
    console.log('Reqest recied')
    res.send("Hi it is working")
})

// Adding Todo
app.post("/todo",async(req,res)=>{
    const validation = createTodo.safeParse(req.body)
    console.log(validation)
    if(!validation.success){
        return res.json({msg:validation.error.erros})
    }
    const data = await Todo.create({
        title: req.body.title,
        description:req.body.description,
        completed: false
    })
    if(!data){
        return res.json({msg:"Error wjile addig data"})
    }
    return res.json({msg:"Data added successfully!!!"})

   
})

// getiing all todos
app.get("/todos",async(req,res)=>{
    const data = await Todo.find({})
    if(!data){
        return res.json({msg:"Error while addig data"})
    }
    return res.json({data:data})

})

// Completing Todo
app.post("/completed",async(req,res)=>{
    const valid = updateTodo.safeParse(req.body)
    console.log(valid)
    if(!valid){
        return res.json({msg:validation.error.errors})

    }
    const data = await Todo.findOneAndUpdate(
        {_id: req.body._id},
        {completed:true},
        {new:true}
    )
    if(!data){
        return res.json({msg:valid.error.errors})
    }
    return res.json({msg:"Data upddated successfully!!"})

})
app.listen(PORT,()=>{
    console.log('Backend is working')
})