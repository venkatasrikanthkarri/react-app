import React,{Component} from 'react'
import TodoFilter from '../TodoFilter'
import {observer,inject} from 'mobx-react'

@inject('todoStore')
@observer
class TodoFooter extends Component{
    render(){
        return(
            <TodoFilter/>
        )
    }
}
export default TodoFooter