const express = require("express");

const UserController = require('../controller/users')

const router = express.Router();

// CREATE - POST
router.post("/", UserController.createNewUsers);

// READ - GET
router.get("/", UserController.getAllUsers);

// UPDATE - PATCH
router.patch('/:idUser', UserController.updateUser);

// DELETE - DELETE
router.delete('/:idUser', UserController.deleteUser)

module.exports = router;