// importation 
import axios from 'axios';
import { FAIL_PRODUCTS, GET_PRODUCT, GET_PRODUCTS, LOAD_PRODUCTS } from "../ActionTypes/product"


// get all Products
export const getProducts = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCTS })
    try {
        let result = await axios.get('/api/product/getallcontact');
        dispatch({type: GET_PRODUCTS , payload: result.data})
    } catch (error) {
        dispatch({type: FAIL_PRODUCTS, payload: error.respanse })
    }
}

// add Product
export const addProduct = (newProduct) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization : localStorage.getItem("token")
            }
        }
        await axios.post('/api/product/', newProduct, config);
        dispatch(getProducts())
    } catch (error) {
        dispatch({type: FAIL_PRODUCTS, payload: error.respanse })
    }
}

// delete Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/product/${id}`)
        dispatch(getProducts())
    } catch (error) {
        dispatch({type: FAIL_PRODUCTS, payload: error.respanse })
    }
}

// edit Product
export const editProduct = (id, newProduct) => async (dispatch) => {
    try {
        await axios.put(`/api/product/${id}`, newProduct)
        dispatch(getProducts())
    } catch (error) {
        dispatch({type: FAIL_PRODUCTS, payload: error.respanse })
    }
}

// get one Product
export const getProduct = (id) => async (dispatch) => {
    dispatch({type: LOAD_PRODUCTS})
    try {
        let result = await axios.get(`/api/product/${id}`)
        dispatch({ type: GET_PRODUCT, payload : result.data})
    } catch (error) {
        dispatch({type: FAIL_PRODUCTS, payload: error.respanse })
    }
}