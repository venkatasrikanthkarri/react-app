import {create} from 'apisauce'

import {networkCallWithApisauce} from '../../../utils/APIUtils'
import {apiMethods} from '../../../constants/APIConstants'

import paginationConst from '../../stores/Pagination'




class ProductService {
    api
    constructor(){
        this.api=create({baseURL:'https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/'})
    }

    getProductsAPI(offset){
        alert(paginationConst.limit)
        return networkCallWithApisauce(
            this.api,
            // 'v1/products/',
            `products?limit=2&offset=${offset}`,
            {},
            apiMethods.get)
    }
}

export default ProductService 