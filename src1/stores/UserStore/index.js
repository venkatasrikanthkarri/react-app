import {observable,action} from 'mobx'

import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'

class UserStore{
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService
    constructor(userService){
        this.userService=userService
        this.init()
    }

    @action
    init(){
        this.getUsersApiError=null
        this.users=[]
    }

    @action
    clearStore(){
        this.init()
    }

    @action.bound
    getUsersAPI(){

        const usersPromise=this.userService.getUsersAPI()
            return bindPromiseWithOnSuccess(usersPromise).to(this.setUsersAPIStatus,this.setUsersAPIResponse)
            .catch(this.setUsersAPIError)

    }

    @action.bound
    setUsersAPIResponse(users){
        this.users=users.map((user)=>user.name)

    }

    @action.bound
    setUsersAPIError(error){
        console.log('error',error)
        // this.getUsersApiSatus=API_FAILED
        this.getUsersApiError=error
    }

    @action.bound
    setUsersAPIStatus(apiStatus){
        this.getUsersApiStatus=apiStatus
    }


}

// const userService= new UserService()
// const userStore=new UserStore(userService)
// // userStore.getUsers()
// export default userStore

export default UserStore
