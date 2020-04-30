import React,{Component} from 'react'
import {observer} from 'mobx-react'
import todoApp from '../../../stores/TodoAppStore'
import TodoList from '../TodoList'
@observer
class TodoApp extends Component{
    componentDidMount(){
        todoApp.getTodos()
    }
    addTodo=(event)=>{
        if(event.keyCode===13){
            alert(event.target.value)
            todoApp.onAddTodo(event.target.value)
            event.preventDefault()
            event.target.value=''
        }
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addTodo}>
                    <input onKeyDown={this.addTodo} type='text' placeholder='Next Todos...'/>
                </form>
                <TodoList/>
            </div>
        )
    }
}

export default TodoApp