const productController = require("express").Router();
const Product = require("../models/Product");
const {verifyToken, verifyTokenAdmin} = require("../middlerwares/verifyToken");

productController.get('/',verifyToken,async(req,res) => {
    try{
        const products = await Product.find(req.query)
        return res.status(200).json(products)
    }
    catch(error){
        console.log(error);
    }
})

productController.get('/find/:id',verifyToken,async(req,res) => {
    try{
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if(!product){
            return res.status(500).json({msg:"No Product found"});
        }

        return res.status(200).json(product);
    }
    catch(error){
        console.log(error);
    }
})

productController.post('/',verifyTokenAdmin,async(req,res) => {
    try{
        const newProduct = await Product.create({...req.body});
        return res.status(201).json(newProduct);
    }catch(error){
        console.log(error);
    }
})

module.exports = productController;