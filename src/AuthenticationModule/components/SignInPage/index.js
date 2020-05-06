import React,{Component} from 'react'
import {observer} from 'mobx-react'
import LoadingWrapper from '../../common/LoadingWrapper'

import {Container,SignInFormWrapper,Title,SignInForm,UserName,Password,LoginWrapper,ErrorMessage} from './style.js'

@observer
class SignInPage extends Component{
    
    
    render(){
        const {getUserSignInAPIStatus,
            getUserSignInAPIError,
            onClickSignIn,
            username,
            onChangeUsername,
            userNameErrorMessage,
            password,
            onChangePassword,
            passwordErrorMessage,
            renderSuccessUI

        }=this.props
        return(
            <Container>
                <SignInFormWrapper>
                    <SignInForm onSubmit={onClickSignIn}>
                        <Title>SignIn</Title>
                        <UserName type='text' value={username} onChange={onChangeUsername} placeholder='Username' />
                        <ErrorMessage>{userNameErrorMessage}</ErrorMessage>
                        <Password type='password' value={password} onChange={onChangePassword}  placeholder='Password' />
                        <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
                        <LoginWrapper>
                            <LoadingWrapper apiStatus={getUserSignInAPIStatus} apiError={getUserSignInAPIError} click={onClickSignIn} renderSuccessUI={renderSuccessUI}/>
                        </LoginWrapper>
                    </SignInForm>
                    </SignInFormWrapper>
            </Container>

    )
    }
}

export default SignInPage