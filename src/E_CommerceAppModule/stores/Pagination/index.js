import {observable} from 'mobx'

class PaginationStore{
    @observable limit
    constructor(props){
        this.limit=1
    }
    increaseLimit=()=>{
            this.limit++
    }
    
    decreaseLimit=()=>{
        this.limit--
        
    }
    
}

const paginationStore=new PaginationStore()

export default paginationStore