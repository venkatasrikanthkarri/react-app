import React from 'react';
import {Todo,TodoContainer,Checkbox} from '../Todo/style.js'
class TodoList extends React.Component{
render(){
    const{todos,onCompleteTodo,onRemoveTodo,onUpdateTodoTitle}=this.props;
    return(
        <div>
            {todos.map(each=>{
            return <TodoContainer key={each.id} id={each.id} >
                <Checkbox id={each.id} type='checkbox' onClick={onCompleteTodo} />
                {/* <Todo ${props=>({textDecoration:props.strike})} id={each.id} defaultValue={each.title} type='text' onChange={onUpdateTodoTitle}/> */}
                <Todo strike={each.isCompleted}  id={each.id} defaultValue={each.title} type='text' onChange={onUpdateTodoTitle}/>

                
                <button id={each.id} onClick={onRemoveTodo}>CLOSE</button>
            </TodoContainer>})}            
        </div>
    )
}

}

export default(TodoList);