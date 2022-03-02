const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author:{
        type:ObjectId,
        ref: "Author2",
        required: true
    },
    price: Number,
    ratings: Number,
    publisher:{
        type:ObjectId,
        ref:"Publisher2",
        required:true
    }


}, { timestamps: true });


module.exports = mongoose.model('Book2', bookSchema)
