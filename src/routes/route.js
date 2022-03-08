const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const { tokenCheck } = require('../midlleware/auth');



router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", tokenCheck, userController.getUserData)

router.put("/users/:userId", tokenCheck, userController.updateUser)

router.delete("/users/:userId", tokenCheck, userController.deleteData)

module.exports = router;