import React,{Component} from 'react'
import {observable,action} from 'mobx'
import {observer,inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import LoadingWrapper from '../../common/LoadingWrapper'
import productsPagePath from '../../../E_CommerceAppModule/constants'
// import {getAccessToken} from '../../../utils/StorageUtils'

import {Container,SignInFormWrapper,Title,SignInForm,UserName,Password,LoginWrapper} from './style.js'
// import authStore from '../../stores'


@inject('authStore')
@observer
class SignInPageRoute extends Component{
    @observable username
    @observable password
    @observable errorMessage
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
    }

    @action.bound
    onChangePassword(event){
        this.password=event.target.value        
    }

    @action.bound
    async onClickSignIn(event){
        event.preventDefault()
        await this.props.authStore.userSignIn(this.username,this.password)
        this.username=''
        this.password=''
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
                        <UserName type='text' value={this.username} onChange={this.onChangeUsername} placeholder='Username' required/>
                        <Password type='password' value={this.password} onChange={this.onChangePassword}  placeholder='Password' required/>
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