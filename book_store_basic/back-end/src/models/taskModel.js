const mongoose=require('mongoose')

const taskSchema = mongoose.Schema({
    userName: String,
    Email: String
})

const taskModel = mongoose.model('books', taskSchema)

module.exports = taskModel