import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import TodoList from '../TodoList'
import NoDataView from '../../common/NoDataView'
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure'
import TodoFilter from '../TodoFilter'

@inject('todoStore')
@observer
class TodoAppWithServicesandAPISause extends Component{

    componentDidMount(){
        this.getStore().getTodoList()
    }
    
    getStore=()=>{
        return this.props.todoStore
    }

    addTodo=(event)=>{
        if(event.keyCode===13){
            this.todo=event.target.value
            this.getStore().onAddTodo(event.target.value)
            event.preventDefault()
            event.target.value=''
        }
    }

    renderUsersList=()=>{
        const{users}=this.getStore()
        if(users===0){
            return <NoDataView/>
        }
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input onKeyDown={this.addTodo} type='text' placeholder='Next Todos...'/>                    
                </form>
            </div>
        )
    }

    render(){
        const{getTodoListAPIError,getTodoListAPIStatus}=this.getStore()
        return(
            <div>
                <LoadingWrapperWithFailure
                    apiStatus={getTodoListAPIStatus}
                    apiError={getTodoListAPIError}
                    onRetryClick={this.doNetworkCalls}
                    renderSuccessUI={this.renderUsersList}
                />
                <TodoList/>
                <TodoFilter/>
            </div>
        )
    }
}

export default TodoAppWithServicesandAPISause