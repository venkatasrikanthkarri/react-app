import React,{Component} from 'react'
import {observer} from 'mobx-react'
import LoadingWrapper from '../../common/LoadingWrapper'

import {Container,SignInFormWrapper,Title,SignInForm,UserName,Password,LoginWrapper,ErrorMessage} from './style.js'


const DisplayMessage=()=>{
    return <div>hi</div>
}

@observer
class SignInPage extends Component{
    userNameRef=React.createRef()
    // passwordRef=React.createRef()

    componentDidMount(){
        this.userNameRef.current.focus();
        // this.passwordRef.current.focous()
    }

    
    
    render(){
        const {getUserSignInAPIStatus,
            getUserSignInAPIError,
            onClickSignIn,
            username,
            onChangeUsername,
            password,
            onChangePassword,
            errorMessage,
            renderSuccessUI

        }=this.props
        return(
            <Container>
                <SignInFormWrapper>
                    <SignInForm onSubmit={onClickSignIn}>
                        <Title>SignIn</Title>
                        <UserName ref={this.userNameRef} type='text' value={username} onChange={onChangeUsername} placeholder='Username' />
                        {/* <ErrorMessage>{userNameErrorMessage}</ErrorMessage> */}
                        <Password type='password' value={password} onChange={onChangePassword}  placeholder='Password' />
                        <LoginWrapper>
                            <LoadingWrapper apiStatus={getUserSignInAPIStatus} apiError={getUserSignInAPIError} click={onClickSignIn} renderSuccessUI={renderSuccessUI}/>
                        </LoginWrapper>
                    </SignInForm>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    </SignInFormWrapper>
                    <DisplayMessage>Hello</DisplayMessage>
            </Container>

    )
    }
}

export default SignInPage