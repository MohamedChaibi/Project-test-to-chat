const Product = require("../models/product");



exports.addProduct = async (req, res) => {
    try {
        const {name, price, size} = req.body;
        const newProduct = new Product({name, price, size});
        await newProduct.save()
        res.status(200).send({msg: 'product add successfully ...', newProduct})
    } catch (error) {
        res.status(400).send({msg:'Can not add product !!!', error})
    }
}

exports.getProduct = async (req, res) => {
    try {
        const listProduct = await Product.find();
        res.status(200).send({msg:'This is the list of all product ..', listProduct})
    } catch (error) {
        res.status(400).send({msg: 'Can not get all product !!!', error})
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const productToGet = await Contact.findOne({ _id: req.params.id});
        res.status(200).send({msg: 'I get the Product ...', productToGet})
    } catch (error) {
        res.status(400).send({msg: 'Can not get product with this Id !!!', error})
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const {_id} = req.params;
        await Product.findByIdAndDelete({_id});
        res.status(200).send({msg: 'Product deleted ...'})
    } catch (error) {
        res.status(400).send({msg: 'Con not delete Product with this Id !!!', error})
    }
}

exports.editProduct = async (req, res) => {
    try {
        const {_id} = req.params;
        const result = await Product.updateOne({_id}, {$set : { ...req.body }});
        res.status(200).send({msg: 'Product updated ...'})
    } catch (error) {
        res.status(400).send({msg: 'Can not update Product with this Id !!!', error})
    }
}