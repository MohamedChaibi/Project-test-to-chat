// 1 require express
const express = require("express");
const { addProduct, getProduct, getOneProduct, deleteProduct, editProduct } = require("../Controllers/product");
const Contact = require("../models/product");
const isAuth = require("../middleware/isAuth")

// express Router
const router = express.Router();

/// Routes

router.get('/test', (req, res) => {
    res.send('Hello World')
})

/**
 * @desc : add product
 * @path : http://localhost:7800/api/product/
 * @method : POST
 * @data : req.body
 */
router.post('/',  addProduct)

/**
 * @desc : get all contacts
 * @path : http://localhost:7800/api/Product/
 * @method : GET
 * @data : no data
 */
router.get('/getallproduct', getProduct)

/**
 * @desc : get one Product
 * @path : http://localhost:7800/api/Product/:id
 * @method : GET
 * @data : req.params._id
 */
router.get('/:id', getOneProduct)

/**
 * @desc : delete contact
 * @path : http://localhost:7800/api/Product/:id
 * @method : DELETE
 * @data : req.params._id
 */
router.delete('/:_id', deleteProduct)

/**
 * @desc : update Product
 * @path : http://localhost:7800/api/Product/:_id
 * @method : PUT
 * @data : req.params._id & req.body
 */
router.put('/:_id', editProduct)


// export
module.exports = router;