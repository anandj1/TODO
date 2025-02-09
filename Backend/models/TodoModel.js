const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://anand060403:Radhey9922@cluster1.vmle1vv.mongodb.net/Todo")

const todoSchema = new mongoose.Schema({
    title : {type:String, required : true},
    description : String,
    completed : Boolean
})

const Todo = mongoose.model('Todo',todoSchema)
module.exports = {Todo}