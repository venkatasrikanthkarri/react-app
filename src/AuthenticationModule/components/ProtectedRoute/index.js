import React from 'react';
import {Route} from 'react-router'
import {getAccessToken} from '../../../utils/StorageUtils'
import SignInPageRoute from '../../components/SignInPage'
import SIGN_IN_PATH from '../../constants'
const PRotectedRoute=(props)=>{
    const{component:Component,...others}=props
    if(getAccessToken()!==undefined){
        return(
            <Route {...others} component={Component}/>
            )        
    }
    else{
        return(
            <Route key={Math.random()} to={{pathname:{SIGN_IN_PATH}}} component={SignInPageRoute}/>
        )
    }
}

export {PRotectedRoute}