

import React,{Component} from 'react'
import {observer, inject} from 'mobx-react'
import { FiShoppingCart } from 'react-icons/fi';
import {observable} from 'mobx'

import CartList from '../CartList'
import {CartContainer,Cart,Close,CheckOut,CartCount,CartWrapper,
  CartTopBar,CartTitle,ProductsLists,CheckOutWrapper,AmountScreen,Subtotal,Amount} from './style.js'

@inject('cartStore')
@observer
class CartItem extends Component{
  @observable width
  constructor(props){
    super(props);
    this.width=0;
  }
  openNavBar=()=>{
    this.width=380    
  }

  closeNavBar=()=>{
    this.width=0
  }

  renderCartList=()=>{
    const{
      cartProductList,
      onRemoveCartItem
    }=this.props.cartStore
    if(cartProductList.length===0){
      return <ProductsLists>Add some products to the cart</ProductsLists>  
    }
    else{
      return <CartList cartList={cartProductList} onRemoveCartItem={onRemoveCartItem}/>
    }
    
  }

  render(){
    const{
      noOfProductsInCart,
      totalCartAmount,
      clearCart,
      
    }=this.props.cartStore

    return(
<CartContainer>
<FiShoppingCart color={'white'} size={50} onClick={this.openNavBar} cursor={'pointer'}/>
<CartCount onClick={this.openNavBar}>{noOfProductsInCart}</CartCount>

<Cart width={this.width}>
<Close onClick={this.closeNavBar}>&#10006;</Close>

<CartWrapper>
  <CartTopBar><FiShoppingCart color={'white'} size={30}/><CartTitle>Cart</CartTitle></CartTopBar>
  {this.renderCartList()}
  <CheckOutWrapper>
  <AmountScreen><Subtotal>SUBTOTAL</Subtotal><Amount>&#8377; {totalCartAmount.toFixed(2)}</Amount></AmountScreen>
  <CheckOut onClick={clearCart}>CheckOut</CheckOut>    
  </CheckOutWrapper>
</CartWrapper>

</Cart>
</CartContainer>

    )
  }
    
}
export default CartItem