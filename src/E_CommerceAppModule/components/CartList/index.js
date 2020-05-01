import React,{Component} from 'react'
import {observer} from 'mobx-react'
import Cart from '../Cart'
import ItemContainer from './style.js'

@observer
class CartList extends Component{

    render(){
        const {cartList,onRemoveCartItem}=this.props
        return(
            
            <ItemContainer>
            {cartList.map(cartItem=><Cart key={Math.random()} cartItem={cartItem} onRemoveCartItem={onRemoveCartItem}/>)}
            </ItemContainer>    
                
                
        )
    }
}


export default CartList