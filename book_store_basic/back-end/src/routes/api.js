const express=require('express')
const router=express.Router()


// all function are imported from taskController
const { Create, ReadAll, DeleteOne, ReadOne, DeleteAll, UpdateTask } = require('../controllers/taskController')

router.post('/create', Create)

router.get('/read', ReadAll)

router.get('/readbyid/:id', ReadOne)

router.post('/deleteone/:id', DeleteOne)

router.post('/deleteall', DeleteAll)

router.post('/update/:id', UpdateTask)


module.exports = router