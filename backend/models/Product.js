const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title: {
        type:String,
        required: true,
        min: 4,
    },
    desc: {
        type:String,
        required: true,
        min: 8,
    },
    price: {
        type:Number,
        required: true,
    },
    img: {
        type:String,
        required: true,
    },
    category: {
        type: String,
        required:true,
    }
})

module.exports = mongoose.model("Product",ProductSchema);