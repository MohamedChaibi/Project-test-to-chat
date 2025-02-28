import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../../JS/Actions/product'
import './Add.css'

const Add = () => { 
    const [newProduct, setNewProduct] = useState({name:"", price:"", size:"" })
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }
    const add = () => {
        dispatch(addProduct(newProduct))
    }

    return (
        <div className='add'>
            <h1>Add product</h1>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" value={newProduct.name} onChange={handleChange} />
            <Form.Label>price</Form.Label>
            <Form.Control type="price" placeholder="Enter price" name="price" value={newProduct.price} onChange={handleChange} />
            <Form.Label>size</Form.Label>
            <Form.Control type="text" placeholder="Enter size" name="size" value={newProduct.size} onChange={handleChange} />
            <Link to='/users'><Button className='bouton' variant="primary" type="submit" onClick={() => { add()}}>Add Product</Button></Link>
        </div>
    )
}

export default Add