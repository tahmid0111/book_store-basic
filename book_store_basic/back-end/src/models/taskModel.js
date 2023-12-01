const mongoose=require('mongoose')

const taskSchema = mongoose.Schema({
    title: String,
    desc: String,
    price: Number,
    image: String,
})

const taskModel = mongoose.model('books', taskSchema)

module.exports = taskModel