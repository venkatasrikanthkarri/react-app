import React,{Component} from 'react'
import {observer} from 'mobx-react'
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure'
import userStore from '../../stores/UserStore'


class UsersPage extends Component{
    
    componentDidMount(){
        this.doNetworkCalls()
    }
    
    doNetworkCalls(){
        userStore.getUsersAPI()
    }
    renderUsersList(){
        const {users} =userStore
        return users.map((userName)=>{<div>{usersName}</div>})
    }
    render(){
        const {getUsersApiError,getUsersApiSatus}=this.props
        return(
            <LoadingWrapperWithFailure
            apiStatus={getUsersApiSatus}
            apiError={getUsersApiError}
            />)
    }
}