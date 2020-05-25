import React,{Component} from 'react'
import {observer} from 'mobx-react'

import { ToastContainer, toast } from 'react-toastify'

import {
    ProductContainer,
    ProductImage,
    FreeShippingTag,
    ProductTitle,
    ProductDivision,
    ProductPrice,
    Rupees,
    Digits,
    Decimals,
    Installments,
    AddToCart
} from './style.js'


@observer
class Product extends Component{

    onClickAddToCart=()=>{
        toast('Added to the Cart', {
            position: toast.POSITION.BOTTOM_CENTER,
            dragabble:true,
            autoClose:2000,
            type:'error',
            hideProgressBar:true
          })
        this.props.onClickAddToCart(this.props.productDetails.id)

    }

    freeShipping=(shipping)=>{
        if(shipping){
            return <FreeShippingTag>Free shipping</FreeShippingTag>
        }
        else{
            return null
        }
    }

    calculatedPrice=()=>{
        const{
            price,
            installments
        }=this.props.productDetails

        if(installments===0){
            return null
        }
        else{
            return (price/installments).toFixed(2)
        }

    }

    
    render(){
        const{
            image,
            title,
            price,
            installments,
            isFreeShipping
            
        }=this.props.productDetails
        const notes=price.toString().split('.')[0]
        const coins=price.toString().split('.')[1]
        return(
        <ProductContainer>
                        {this.freeShipping(isFreeShipping)}
            <ProductImage src={image} alt='product'/>
            <ProductTitle>{title}</ProductTitle>
            <ProductDivision></ProductDivision>
            <ProductPrice>
                <Rupees>&#8377;</Rupees>
                <Digits>{notes}.</Digits>
                <Decimals>{coins}</Decimals>
                <Installments>or {installments} &#10005; &#8377; {this.calculatedPrice()}</Installments>
            </ProductPrice>
            <AddToCart onClick={this.onClickAddToCart}>Add to cart</AddToCart>
            <ToastContainer/>

        </ProductContainer>
)

    }
}

// // {"availableSizes":["S","XS"],
// "currencyFormat":"₹",
// "currencyId":"USD",
// "description":"4 MSL",
// "id":12,
// "installments":9,
// "isFreeShipping":true,
// "price":845.24,
// "sku":12064273040195392,
// "style":"Black with custom print",
// "title":"Cat Tee Black T-Shir"}


export default Product