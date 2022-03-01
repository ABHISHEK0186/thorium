const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let details= await AuthorModel.find( {authorname : "Chetan Bhagat" } ).select({author_id:1, _id:0})
    let value= details[0].author_id
    let result= await BookModel.find({author_id: value}).select({name:1, _id:0})
    res.send({books: result})
    
}


const updateBooks= async function (req, res) {
    let updatedPrice= await BookModel.findOneAndUpdate({name: "Two states"}, {$set :{price: 100}}, {new: true}).select({price: 1, _id:0})
    let b= await BookModel.find().select({author_id:1, _id:0})
    let id = b[2].author_id
    let writtenBy= await AuthorModel.find({author_id: id}).select({authorname:1, _id:0})
    console.log(id)
    res.send({updatedPrice,writtenBy})
}

const priceRange= async function (req, res) {
    
    let data= await BookModel.find({price : {$gte:200, $lte:500}} ).select({author_id:1, _id:0})
    const id= data.map(x=> x.author_id)
    let arr=[]
    for(let i=0; i<id.length; i++){
    let a= id[i]
    const result= await AuthorModel.find({author_id:a}).select({authorname:1, _id:0})
    arr.push(result)
    }
    const output= arr.flat()

     res.send({output})
}








module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.priceRange= priceRange
