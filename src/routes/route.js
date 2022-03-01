const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", BookController.createAuthor )

router.get("/getBooksData", BookController.getBooksData)

router.get("/updateBooks", BookController.updateBooks)

router.get("/priceRange", BookController.priceRange)


    
  

module.exports = router;