import React,{Component} from 'react'
import {observable,action} from 'mobx'
import {observer,inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import LoadingWrapper from '../../common/LoadingWrapper'
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
    onClickSignIn(event){
        // const{history}=this.props
        this.props.authStore.userSignIn(this.username,this.password)
        this.username=''
        this.password=''
        // alert('signin')
        // if(this.props.authStore.accessToken!=='')
        // {
        //     alert(getAccessToken())
        //     history.replace('/grid-game')
        // }
        this.checkTocken()
        event.preventDefault()
    }
    @action.bound
    checkTocken(){
        const{history}=this.props
        alert('token')
        if(this.props.authStore.accessToken!=='')
        {
            history.push('/grid-game')
        }
    }

    @action.bound
    clearStore(){
        this.init()
    }
    
    render(){
        const {getUserSignInAPIStatus,getUserSignInAPIError}=this.props.authStore
        console.log(getUserSignInAPIStatus)
        return(
            <Container>
                <SignInFormWrapper>
                    <SignInForm onSubmit={this.onClickSignIn}>
                        <Title>SignIn</Title>
                        <UserName type='text' value={this.username} onChange={this.onChangeUsername} placeholder='username' required/>
                        <Password type='password' value={this.password} onChange={this.onChangePassword}  placeholder='password' required/>
                        <LoginWrapper>
                            <LoadingWrapper apiStatus={getUserSignInAPIStatus} apiError={getUserSignInAPIError} click={this.onClickSignIn} checkTocken={this.checkTocken}/>
                            {/* <ForgorPassword href='#'>Forgot Password?</ForgorPassword> */}
                        </LoginWrapper>
                    </SignInForm>
                    </SignInFormWrapper>
            </Container>

    )
    }
}

export default withRouter(SignInPageRoute)