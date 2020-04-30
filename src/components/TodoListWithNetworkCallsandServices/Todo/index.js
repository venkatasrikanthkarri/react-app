import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import {Checkbox,Text,Close} from './style'
@inject('todoStore')
@observer
class Todo extends Component{
    
    

    onCompleteTodo=(event)=>{
        this.props.todoStore.onCompleteTodo(this.props.each)
    }

    onRemoveTodo=(event)=>{
        this.props.todoStore.onRemoveTodo(this.props.each)
    }

    onUpdateTodoTitle=(event)=>{
        this.props.todoStore.onUpdateTodoTitle(this.props.each,event.target.value)
    }

    render(){
        const {title,completed}=this.props.each
        const strike=completed? 'line-through':'none'
        return(
            <div>
                <Checkbox type='checkbox' defaultChecked={completed} onClick={this.onCompleteTodo}/>
                <Text type='text' value={title} onChange={this.onUpdateTodoTitle} strike={strike} disabled={completed}/>
                <Close onClick={this.onRemoveTodo}>close</Close>
            </div>
        )
    }
}
export default Todo