import {observable, action} from 'mobx'

class CartModel{
    cartItemId
    @observable productId
    @observable quantity
    constructor(){
        this.init()
    }
    
    @action.bound
    init(){
        this.cartItemId=Math.random()
        this.productId=0
        this.quantity=1
    }

    @action.bound
    incrementQuantity(){
        this.quantity++

    }

}

export default CartModel