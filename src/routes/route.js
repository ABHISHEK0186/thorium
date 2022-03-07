const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderController")
const headercheckMW= require("../middleware/headercheckMW")


router.post("/createUser",headercheckMW.headerCheck, UserController.createUser  )


router.post("/createProduct", ProductController.createProduct  )

router.post("/createOrder", headercheckMW.headerCheck, OrderController.createOrder )




module.exports = router;