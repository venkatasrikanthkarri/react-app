import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import Todo from '../Todo'

@inject('todoStore')
@observer

class TodoList extends Component{
render(){
    const {todoStore}=this.props    
        return(
            todoStore.todos.map(value=><Todo key={Math.random()} each={value}/>)
        )
    }
    
}
export default TodoList