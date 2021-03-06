import {observable, action} from 'mobx'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {API_INITIAL} from '@ib/api-constants'

import {getAccessToken}   from '../../../utils/StorageUtils'
import {setAccessToken}   from '../../../utils/StorageUtils'
import {clearUserSession} from '../../../utils/StorageUtils'



class AuthStore{

    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable accessToken
    @observable authAPIService

    constructor(authService){
        this.authAPIService=authService
        this.init()
    }

    @action.bound
    init(){
        this.getUserSignInAPIError=null
        this.getUserSignInAPIStatus=API_INITIAL
        this.accessToken=''
    }

    @action.bound
    clearStore(){
        this.init()
    }

    @action.bound
    userSignIn(){

        const authPromise=this.authAPIService.signInAPI()
        return bindPromiseWithOnSuccess(authPromise)
        .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
        .catch(this.setGetUserSignInAPIError)
        
    }

    @action.bound
    setUserSignInAPIResponse(accessToken){
        setAccessToken(accessToken)
        this.accessToken=getAccessToken()
        
    }

    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error
    }

    @action.bound
    setGetUserSignInAPIStatus(status){
        this.getUserSignInAPIStatus=status
    }

    @action.bound
    userSignOut(){
        
        this.clearStore()
        clearUserSession()
    }

}

export default AuthStore
