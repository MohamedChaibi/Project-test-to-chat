import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useNavigate} from 'react-router-dom';
import { editProduct, getProduct } from '../../JS/Actions/product';
import './Edit.css';

const Edit = () => {
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({name:"", price:"", size:""});
    const productToGet = useSelector(state => state.productReducer.productToGet)
    const match = useMatch("/edit/:id");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value});
    }
    useEffect(() => {
        dispatch(getProduct(match.params.id))
    })
    const handleEdit = () => {
        dispatch(editProduct(match.params.id, newProduct));
        navigate(-1);
    }
    return (
        <div className='edit'>
            <h1>Edit product</h1>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={`${productToGet.name}`} name="name" value={newProduct.name} onChange={handleChange} />
            <Form.Label>price</Form.Label>
            <Form.Control type="price" placeholder={`${productToGet.email}`} name="price" value={newProduct.price} onChange={handleChange} />
            <Form.Label>size</Form.Label>
            <Form.Control type="text" placeholder={`${productToGet.size}`} name="size" value={newProduct.size} onChange={handleChange} />
            <Link to='/'><Button className='btn-edit' variant="primary" type="submit" onClick={handleEdit}>Edit Product</Button></Link>
        </div>
    )
}

export default Edit