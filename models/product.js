// 1 require mongoose
const mongoose = require("mongoose");

// create Schema
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    size: Number,
    // id_user: { type: Schema.Types.ObjectId, ref: 'user',required:true }
})

// export
module.exports = Product = mongoose.model('product', productSchema)