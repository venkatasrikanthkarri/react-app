import {observable, action, computed} from 'mobx'
import {API_INITIAL} from '@ib/api-constants'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'

class ProductStore {
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable productsAPIService
    @observable sizeFilter
    @observable sortBy
    @observable limit
    @observable offSet
    constructor(productsAPIService){
        this.productsAPIService=productsAPIService
        this.init()
    }

    @action.bound
    init(){
        this.products=[]
        this.productList=[]
        this.getProductListAPIStatus=API_INITIAL
        this.getProductListAPIError=null
        this.sizeFilter=[]
        this.sortBy='SELECT'
        this.limit=1
        this.offSet=0
        this.boundary=1
    }
    @action.bound
    closeStore(){
        this.init()
    }

    @action.bound
    getProductList(){
        const productPromise=this.productsAPIService.getProductsAPI(this.offSet)
        return bindPromiseWithOnSuccess(productPromise)
        .to(this.setGetProductListAPIStatus,this.setProductListResponse)
        .catch(this.setGetProductListAPIError)
        }    

    @action.bound
    setProductListResponse(products){
        this.productList=products.products
        this.products=products       
    }

    @action.bound
    setGetProductListAPIError(error){
        this.getProductListAPIError=error
    }

    @action.bound
    setGetProductListAPIStatus(status){
        this.getProductListAPIStatus=status
        
    }

    @action.bound
    sortByHighestToLowest(){     
        let sortedArray= this.products.slice().sort((a, b) => (a.price<b.price)?1:-1);
        this.productList=sortedArray
        this.products=sortedArray
    }

    @action.bound
    sortByLowestHighest(){
        let sortedArray=this.products.slice().sort((a, b) => (a.price>b.price)?1:-1);
        this.productList=sortedArray
        this.products=sortedArray
    }

    @action.bound
    onChangeSortBy(sortKey){

        switch(sortKey){
            case 'ASCENDING':
                {
                this.sortByLowestHighest()
                break
            }
            case 'DESCENDING':
                {
                this.sortByHighestToLowest()
                break
            }
            default:
                break
        }
    }

    @action.bound
    filter(sizes){
        let count=0
        sizes.forEach(each=>{
            if(this.sizeFilter.includes(each))
            {
                count++
            }
        })
        if(count>0)
        return true
        else
        return false
    }

    @action.bound
    onSelectSize(size){
        let count=0;
        this.sizeFilter.forEach(each=>{
            if(each===size)
                {
                    count=1;
                }
        })
        if(count===0){
            this.sizeFilter.push(size)
        }
        else{
            count=0;
            this.sizeFilter=this.sizeFilter.filter(each=>each!==size)
        }
        
        let filteredList=[]
        filteredList=this.products.filter(each=>{
            return (this.filter(each.availableSizes))?each:null
        })
        filteredList.length===0?
        this.productList=this.products:
        this.productList=filteredList
    }

    @computed
    get totalNoOfProductsDisplayed(){
        return this.productList.length
    }

    increaseBoundary=()=>{
            this.boundary++
            this.offSet++
            this.getProductList()
    }
    
    decreaseBoundary=()=>{
        this.boundary--
        this.offSet--
        this.getProductList()
        
    }

}

export default ProductStore