import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('todoStore')
@observer
class TodoFilter extends Component{
    onChangeSelectedFilter=()=>{

    }
    render(){
        return(
            <div style={{padding:`100px`}}>
                <div>Active Count:{this.props.todoStore.activeTodosCount}</div>
                <button onClick={this.props.todoStore.displayTodos}>All</button>
                <button onClick={this.props.todoStore.displayActiveTodos}>Active</button>
                <button onClick={this.props.todoStore.displayCompletedTodos}>Completed</button>
                <button onClick={this.props.todoStore.clearCompletedTodos}>Clear completed</button>
            </div>
        )
    }
}
export default TodoFilter