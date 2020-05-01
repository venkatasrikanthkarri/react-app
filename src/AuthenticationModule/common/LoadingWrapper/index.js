import React,{Component} from 'react'
import { observer } from 'mobx-react'

import Loader from 'react-loader-spinner'
import { API_FETCHING, API_INITIAL, } from '@ib/api-constants'
import {Login,Loaderbg,Wrapper,ForgorPassword} from './style.js'



@observer
class LoadingWrapperWithFailure extends Component {

  render() {
    const {
      apiStatus,
    } = this.props

    switch (apiStatus) {
      case API_FETCHING:
        return  <Loaderbg >
          <Loader type="TailSpin" color="white" height={30} width={30}/>
                </Loaderbg>
      case API_INITIAL:
        return <Wrapper>
                <Login type='submit' onSubmit={this.props.click}>LogIn</Login>
                <ForgorPassword href='/E-commerse/SignIn'>Forgot Password?</ForgorPassword>  
              </Wrapper>
      default: 
      return <Wrapper>
      <Login type='submit' onSubmit={this.props.click}>LogIn</Login>
      <ForgorPassword href='/E-commerse/SignIn'>Forgot Password?</ForgorPassword>  
    </Wrapper>
    }
  }
}

export default LoadingWrapperWithFailure
