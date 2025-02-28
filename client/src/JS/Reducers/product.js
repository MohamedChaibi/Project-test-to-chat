// importation

import { FAIL_PRODUCTS, GET_PRODUCT, GET_PRODUCTS, LOAD_PRODUCTS } from "../ActionTypes/product";

// initialState
const initialState = {
    listProducts:[],
    errors: null,
    load: false,
    productToGet:{}
}

// pure function
const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_PRODUCTS: return { ...state, load: true}
        case GET_PRODUCTS: return { ...state, load: false, listContacts: payload.listProducts}
        case GET_PRODUCT: return {...state, ProductToGet: payload.ProductToGet, load: false};
        case FAIL_PRODUCTS: return { ...state, load: false, errors:payload}
        default:
            return state;
    }
}

export default productReducer;