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
                <div>Active Count:{this.props.todoStore.activeTodoCount}</div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                <button>Clear completed</button>
            </div>
        )
    }
}
export default TodoFilter