import {observable, action, computed} from 'mobx'
import CartModel from '../model/CartModel'

class CartStore{
    @observable productStore
    @observable cartProductList

    constructor(productStore){
        this.amount=0
        this.productStore=productStore
        this.init()
    }

    @action.bound
    init(){
        this.cartProductList=[] 
    }

    @action.bound
    onClickAddToCart(id){
        let cartModel=new CartModel()
        if(this.cartProductList.length===0){
            this.cartProductList=[...this.cartProductList,{cartModel,details:this.getProductDetailsById(id)}]
        }
        else{
        let cartList=this.cartProductList.find(product=>
                parseInt(id)===product.details.id
                )
    if(cartList){
        cartList.cartModel.incrementQuantity()
    }   
    else{

       this.cartProductList= [...this.cartProductList,{cartModel,details:this.getProductDetailsById(id)}]
    }
    }
}

    @action.bound
    onRemoveCartItem(id){
        let filteredItems=this.cartProductList.filter(item=>item.details.id!==parseInt(id))
        this.cartProductList=filteredItems

    }

    @action.bound
    clearCart(){
        if(this.cartProductList.length!==0){
            alert('Thank you for shopping with us.\n Your products will be delivered in 3 days to the address mentioned in your profile.')
        }
        
        this.cartProductList=[]
    }

    @action.bound
    getProductDetailsById(id){
        return this.productStore.productList.find(product=>product.id===parseInt(id))

    }

    @action.bound
    @computed
    get totalCartAmount(){
        this.amount=0
        this.cartProductList.forEach(product=>{
            this.amount+=product.details.price*product.cartModel.quantity
        })
        return this.amount

    }

    @computed
    get noOfProductsInCart(){
        return this.cartProductList.length
        
    }
    
}
export default CartStore