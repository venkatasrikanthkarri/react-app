import React,{Component} from 'react'

class Todo extends Component{
    render(){
        console.log(this.props.each.title)
        return(
            <div>{this.props.each.title}</div>
        )
    }
}
export default Todo