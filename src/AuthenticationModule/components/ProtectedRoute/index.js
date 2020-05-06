import React from 'react';
import {Route} from 'react-router'
import {getAccessToken} from '../../../utils/StorageUtils'
import SignInPageRoute from '../../routes/SignInPageRoute'
import SIGN_IN_PATH from '../../constants'
const ProtectedRoute=(props)=>{
    const{component:Component,...others}=props
    if(getAccessToken()!==undefined){
        return(
            <Route {...others} component={Component}/>
            )        
    }
    else{
        return(
            <Route key={Math.random()} to={{pathname:{SIGN_IN_PATH}}} component={SignInPageRoute}/>
            // <SignInPageRoute/>
        )
    }
}

export {ProtectedRoute}