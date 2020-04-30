import {observable, action} from 'mobx'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {API_INITIAL} from '@ib/api-constants'

import {getAccessToken} from '../../../utils/StorageUtils'
import {setAccessToken} from '../../../utils/StorageUtils'
import {clearUserSession} from '../../../utils/StorageUtils'



class AuthStore{
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable accessToken
    authAPIService

    constructor(authAPIService){
        this.authAPIService=authAPIService
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
    userSignIn(username,password){
        if(username!=='' && password!==''){
            alert(123123123)
        const authPromise=this.authAPIService.signInAPI()
        return bindPromiseWithOnSuccess(authPromise)
        .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
        .catch(this.setGetUserSignInAPIError)
        }
    }

    @action.bound
    setUserSignInAPIResponse(accessToken){
        alert('response')
        setAccessToken(accessToken)
        this.accessToken=getAccessToken()
        alert(this.accessToken)
    }

    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error
    }

    @action.bound
    setGetUserSignInAPIStatus(status){
        alert('status')
        this.getUserSignInAPIStatus=status
    }

    @action.bound
    userSignOut(){
        clearUserSession()
    }

}

export default AuthStore