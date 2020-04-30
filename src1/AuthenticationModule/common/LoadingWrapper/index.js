import React,{Component} from 'react'
import { observer } from 'mobx-react'
import { API_FETCHING, API_INITIAL,API_SUCCESS } from '@ib/api-constants'
import {withRouter} from 'react-router-dom'

// import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'

import Loader from 'react-loader-spinner'

import {Login,Loaderbg,Wrapper,ForgorPassword} from './style.js'

@observer
class LoadingWrapper extends Component{  

    
    render(){
      const {
        apiStatus,
        history
    } = this.props
  
      switch (apiStatus) {
        case API_FETCHING:
          return <Loaderbg >
          <Loader type="TailSpin" color="white" height={30} width={30} timeout='infinity'/>
           </Loaderbg>
          case API_SUCCESS:{
              history.push('/grid-game')
              break
          }          
          case API_INITIAL:
          return <Wrapper>
                  <Login type='submit' onSubmit={this.props.click}>LogIn</Login>
                  <ForgorPassword href='/E-commerse/SignIn'>Forgot Password?</ForgorPassword>  
                </Wrapper>
          default:
          return null
    }
      
    

    }

}

export default withRouter(LoadingWrapper)