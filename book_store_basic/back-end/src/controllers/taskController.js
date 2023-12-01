const taskModel = require('../models/taskModel')


exports.Create = async (req, res) => {
    let reqBody = req.body
    try {
        const data = await taskModel.create(reqBody)
        res.status(200).json({status: 'successfully created', data: data})
    } catch (error) {
        res.status(404).json({status: 'something went wrong', data: error})
    }
}


// =============================================


exports.ReadAll = async (req, res) => {
    try {
        const data = await taskModel.find()
        res.status(200).json({status: 'your all datas are here', data: data})
    } catch (error) {
        res.status(404).json({status: 'something went wrong', data: error})
    }
}

exports.ReadOne = async (req, res) => {
    let id = req.params.id
    let Querry = {_id: id}

    try {

        const data = await taskModel.findOne(Querry)

        res.status(200).json({status: 'your single data is here', data: data})

    } catch (error) {

        res.status(404).json({status: 'something went wrong', data: error})

    }
}

// =============================================

// delete section
exports.DeleteOne = async (req, res) => {
    let id = req.params.id
    let Querry = {_id: id}

    try {
        const data = await taskModel.deleteOne(Querry)
        res.status(200).json({status: 'this data is removed', data: data})
    } catch (error) {
        res.status(404).json({status: 'something went wrong', data: error})
    }
}

exports.DeleteAll = async (req, res) => {

    try {

        await taskModel.deleteMany({})

        res.status(200).json({status: 'deleted all'})

    } catch (error) {
        res.status(404).json({status: 'something went wrong'})
    }
}

// =============================================

// update controller

exports.UpdateTask = async (req, res) => {

    let id = req.params.id
    let Querry = {_id: id}
    let reqBody = req.body

    try {

        const data = await taskModel.updateOne(Querry, reqBody)

        res.status(200).json({status: 'successfully updated', data: data})

    } catch (error) {
        res.status(404).json({status: 'something went wrong'})

    }
}