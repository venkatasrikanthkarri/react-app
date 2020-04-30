import {observable, action} from 'mobx'

class ProductModel{
    
    productId
    @observable availableSizes
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installmentsCount
    @observable isFreeShipping
    @observable price
    @observable printStyle
    @observable title
    @observable imageURL
    constructor(){
        this.init()
    }

    @action.bound
    init(){
        this.productId=Math.random()
        this.availableSizes=[]
        this.currencyFormat=null
        this.currencyId=null
        this.description=''
        this.installmentsCount=null
        this.isFreeShipping=null
        this.price=null
        this.printStyle=''
        this.title=''
        this.imageURL=''
    }

    @action.bound
    clearModel(){
        this.init()
    }
}

export default ProductModel



// {"availableSizes":["S","XS"],
// "currencyFormat":"₹",
// "currencyId":"USD",
// "description":"4 MSL",
// "id":12,
// "installments":9,
// "isFreeShipping":true,
// "price":845.24,
// "sku":12064273040195392,
// "style":"Black with custom print",
// "title":"Cat Tee Black T-Shirt",
// "image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"}