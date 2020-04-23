import {observable,action} from 'mobx'
import {API_INITIAL} from '@ib/api-constants'


class UserStore{
    @observable getUsersApiSatus
    @observable getUsersApiError
    @observable users

    constructor(){
        this.init()
    }

    @action
    init(){
        this.getUsersApiSatus=API_INITIAL
        this.getUsersApiError=null
        this.users=[]
    }

    @action
    clearStore(){
        this.init()
    }

    @action.bound
    getUsersAPI(){
        this.getUsersApiSatus=API_FETCHING
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((users)=>users.json())
        .then(this.setUsersResponse)
        .catch(this.setUsersAPIError)
    }

    setUsersResponse(users){
        this.users=users.map((user)=>user.name)
                this.getUsersApiSatus=API_SUCCESS
    }

    setUsersAPIResponse(){


    }

    setUsersAPIError(){
                this.getUsersApiSatus=API_FAILED
        this.getUsersApiError=error
    }



}

const userStore=new UserStore()
userStore.getUsers()
export default userStore
