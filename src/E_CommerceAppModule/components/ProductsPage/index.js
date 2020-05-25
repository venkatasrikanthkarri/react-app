import React,{Component} from 'react'
import {observer, inject} from 'mobx-react'

import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
import SizeFilter from '../SizeFilter'
import Header from '../Header'
import ProductList from '../ProductList'
import CartItem from '../CartItem/index'

import Pagination from '../Pagination'

import {SignOut,ProductPageContainer,HeaderProducts,ProductsPageWrapper} from './style.js'



@inject('productStore','authStore')
@observer
class ProductsPage extends Component{
    
    
    componentDidMount(){
        this.props.productStore.getProductList()
    }

    onClickSignOut=()=>{

        const {history,authStore}=this.props
        authStore.userSignOut()
        history.push('/E-commerse/SignIn')
    }

    renderUsersList=()=>{
        return <ProductList/>
    }

    render(){
        const {getProductListAPIError,getProductListAPIStatus,onChangeSortBy,onSelectSize,totalNoOfProductsDisplayed}=this.props.productStore
        return(
        <ProductsPageWrapper>
            <SignOut onClick={this.onClickSignOut}>Sign Out</SignOut>
            <CartItem/>
            
            <ProductPageContainer>
                <SizeFilter onSelectSize={onSelectSize}/>
                <HeaderProducts>
                    <Header onChangeSortBy={onChangeSortBy} productCount={totalNoOfProductsDisplayed}/>
                    <LoadingWrapperWithFailure
                        apiStatus={getProductListAPIStatus}
                        apiError={getProductListAPIError}
                        onRetryClick={this.doNetworkCalls}
                        renderSuccessUI={this.renderUsersList}
                    />
                </HeaderProducts>
            </ProductPageContainer>
            <Pagination/>
        </ProductsPageWrapper>
)
    }
}

export default ProductsPage