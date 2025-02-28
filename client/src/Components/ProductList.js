import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../JS/Actions/product'
import ProductCard from './ProductsCard'

const ProductList = () => {
    const dispatch = useDispatch()
    const listProducts = useSelector(state => state.productReducer.listProduct)
    const load = useSelector(state => state.productReducer.load)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    return (
        <div style={{ display: "flex", justifyContent: "space-around", margin: "2%",flexWrap: "wrap",
            padding: "2%"}}>
            {load ? <h2>Loading ...</h2> : listProducts.map((el) => <ProductCard product={el} key={el._id} />)}
        </div>
    )
}

export default ProductList;