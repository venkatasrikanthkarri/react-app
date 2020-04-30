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
                
                // <ItemContainer>
                //     {/* <hr></hr> */}
                //     <itemWrapper>
                //         <Image src={img} alt='image'/>
                //         <Details>
                //             <Title>{title}</Title>
                //             <Description>{style}</Description>
                //             <Quantitiy>{quantity}</Quantitiy>
                //         </Details>
                //         <CloseAndPrice>
                //             <Close></Close>
                //             <Price>{price}</Price>
                //         </CloseAndPrice>
                //     </itemWrapper>

                // </ItemContainer>
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


export default CartList