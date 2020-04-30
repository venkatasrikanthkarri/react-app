import React,{Component} from 'react'
import {observer, inject} from 'mobx-react'

import NoDataView from './../common/NoDataView'
import LoadingWrapperWithFailure from './../common/LoadingWrapperWithFailure/index.js'

@inject('usersStore')
@observer
class UsersPage extends Component{

    componentDidMount(){
        this.doNetworkCalls()
    }

    getStore=()=>{
        return this.props.usersStore
    }

    doNetworkCalls=()=>{
        this.getStore().getUsersAPI()
    }

    renderUsersList=()=>{
        const {users} =this.getStore()
        if(users.length===0){
            return <NoDataView/>
        }
        return users.map((userName)=><div key={Math.random()}>{userName}</div>)
    }

    render(){
        const {getUsersApiError,getUsersApiStatus}=this.getStore()
        return(
            <LoadingWrapperWithFailure
            apiStatus={getUsersApiStatus}
            apiError={getUsersApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList} />
        )
    }
}

export default UsersPage