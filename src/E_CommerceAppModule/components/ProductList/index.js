import React,{Component} from 'react'
import {observer, inject} from 'mobx-react'
import Product from '../Product'
import ProductListContainer from './style.js'
// import cartStore from '../../stores/CartStore'
@inject('productStore','cartStore')
@observer
class ProductList extends Component{
    render(){
        const{productList}=this.props.productStore
        return(
            <ProductListContainer>
                {productList.map(each=>
                    <Product key={Math.random()} productDetails={each} onClickAddToCart={this.props.cartStore.onClickAddToCart}/>
                    )}
                
            </ProductListContainer>
        )
    }
}
export default ProductList