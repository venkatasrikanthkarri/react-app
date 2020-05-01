import React,{Component} from 'react'
import {observable,action} from 'mobx'
import {observer,inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import LoadingWrapper from '../../common/LoadingWrapper'
import productsPagePath from '../../../E_CommerceAppModule/constants'
// import {getAccessToken} from '../../../utils/StorageUtils'

import {Container,SignInFormWrapper,Title,SignInForm,UserName,Password,LoginWrapper,ErrorMessage} from './style.js'
// import authStore from '../../stores'


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
        this.username===''?this.userNameErrorMessage='Please enter username':this.userNameErrorMessage=''
        this.password===''?this.passwordErrorMessage='Please enter password':this.passwordErrorMessage=''
        this.renderSuccessUI()

    }
    @action.bound
    renderSuccessUI(){
        
        const{history}=this.props
        if(this.props.authStore.accessToken!=='')
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
            <Container>
                <SignInFormWrapper>
                    <SignInForm onSubmit={this.onClickSignIn}>
                        <Title>SignIn</Title>
                        <UserName type='text' value={this.username} onChange={this.onChangeUsername} placeholder='Username' />
                        <ErrorMessage>{this.userNameErrorMessage}</ErrorMessage>
                        <Password type='password' value={this.password} onChange={this.onChangePassword}  placeholder='Password' />
                        <ErrorMessage>{this.passwordErrorMessage}</ErrorMessage>
                        <LoginWrapper>
                            <LoadingWrapper apiStatus={getUserSignInAPIStatus} apiError={getUserSignInAPIError} click={this.onClickSignIn} renderSuccessUI={this.renderSuccessUI}/>
                            {/* <ForgorPassword href='#'>Forgot Password?</ForgorPassword> */}
                        </LoginWrapper>
                    </SignInForm>
                    </SignInFormWrapper>
            </Container>

    )
    }
}

export default withRouter(SignInPageRoute)