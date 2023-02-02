const express = require('express')
const router = express.Router()
const { AddUser, getAllDataUsers, DeleteDataUser, UpdateDataUser } = require('../Controllers/UserController')



router.post('/', AddUser)


router.get('/', getAllDataUsers )


router.delete('/:idUser',DeleteDataUser )

//update data user
//method : @PUT
router.put('/:id', UpdateDataUser )

module.exports = router