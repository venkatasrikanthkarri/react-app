import React, { Component } from 'react';
import  {observable, action } from 'mobx'
import  {observer, inject } from 'mobx-react'
import productsPagePath from '../../../E_CommerceAppModule/constants'
import {withRouter} from 'react-router-dom'
import SignInPage from '../../components/SignInPage'


@inject('authStore')
@observer
class SignInPageRoute extends Component{
    @observable username
    @observable password
    @observable userNameErrorMessage
    @observable passwordErrorMessage
    
    constructor(props){
        super(props);
        this.init()
    }

    @action.bound
    init(){
        this.username=''
        this.password=''
        this.errorMessage=''
    }

    @action.bound
    onChangeUsername(event){
        this.username=event.target.value
        this.userNameErrorMessage=''
    }

    @action.bound
    onChangePassword(event){
        this.password=event.target.value
        this.passwordErrorMessage=''        
    }

    @action.bound
    async onClickSignIn(event){

        event.preventDefault()
        if(this.username!=='' && this.password!==''){        
        await this.props.authStore.userSignIn(this.username,this.password)
        this.username=''
        this.password=''
        }
        this.username ===''?this.userNameErrorMessage='Please enter username':this.userNameErrorMessage=''
        this.password ===''?this.passwordErrorMessage='Please enter password':this.passwordErrorMessage=''
        this.renderSuccessUI()

    }

    @action.bound
    renderSuccessUI(){
        
        const{history}=this.props
        if(this.props.authStore.accessToken !== '')
        {
            history.replace(productsPagePath)
        }
    }

    @action.bound
    clearStore(){
        this.init()
    }

    render(){
        const {getUserSignInAPIStatus,getUserSignInAPIError}=this.props.authStore
        return(
                <SignInPage
                getUserSignInAPIStatus={getUserSignInAPIStatus}
                getUserSignInAPIError={getUserSignInAPIError}
                onClickSignIn={this.onClickSignIn}
                username={this.username}
                onChangeUsername={this.onChangeUsername}
                userNameErrorMessage={this.userNameErrorMessage}
                password={this.password}
                onChangePassword={this.onChangePassword}
                passwordErrorMessage={this.passwordErrorMessage}
                renderSuccessUI={this.renderSuccessUI}
                />
        )
    }
}


export default withRouter(SignInPageRoute)