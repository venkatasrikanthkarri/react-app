import React,{Component} from 'react'
import {observer} from 'mobx-react'
import todoApp from '../../../stores/TodoAppStore'
import Todo from '../Todo'
import Loader from '../Loader'

@observer
class TodoList extends Component{
render(){
    console.log('todolist',todoApp.todos)
    if(todoApp.todos.length!==0){
        return(
            todoApp.todos.map(value=><Todo key={Math.random()} each={value}/>)
        )
    
    }
    else{
        return(<Loader/>)
    }
    
}
}
export default TodoList