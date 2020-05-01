import React,{Component} from 'react'
import {observer} from 'mobx-react'
import {ItemContainer,Line,ItemWrapper,Image,Details,Title,Description,Quantitiy,CloseAndPrice,Price,Close} from './style.js'
import { action } from 'mobx'

@observer
class Cart extends Component{

@action.bound
    onRemoveCartItem(){
        this.props.onRemoveCartItem(this.props.cartItem.details.id)
    }

    render(){
        const {cartItem}=this.props
        const {image,title,style,price}=cartItem.details
        const {quantity}=cartItem.cartModel
        return(
                <ItemContainer type='cartItem'>
                    <Line></Line>
                    <ItemWrapper>
                        <Image src={image} alt='image'/>
                        <Details>
                            <Title>{title}</Title>
                            <Description>{style}</Description>
                            <Quantitiy>quantity: {quantity}</Quantitiy>
                        </Details>
                        <CloseAndPrice>
                            <Close onClick={this.onRemoveCartItem}>&#10005;</Close>
                            <Price>{price}</Price>
                        </CloseAndPrice>
                    </ItemWrapper>

                </ItemContainer>
               
        )
    }
}
export default Cart