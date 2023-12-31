const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ProductSchema = new mongoose.Schema({
    
    productName : String,
    price : Number,
    qty : Number,
    categoryId :{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"Category"
      } 

})

module.exports = mongoose.model('Product',ProductSchema)