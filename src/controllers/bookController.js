const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let a_id = req.body.author
    let p_id = req.body.publisher
    let isValidauthor= await authorModel.find({_id : a_id}).select({_id:1})
    let isValidPublisher= await publisherModel.find({_id:p_id}).select({_id:1})
    if (isValidauthor.length>0){
        if(isValidPublisher.length>0){
            let bookCreated = await bookModel.create(book)
            res.send({bookCreated})
        }
        else{ res.send("Invalid Publisher")}
    }
    else {res.send("Invalid Author")}
    
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})

}





module.exports.createBook= createBook
module.exports.getBooksData= getBooksData

