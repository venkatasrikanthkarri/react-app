import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
class TodoAPPMobx extends React.Component{
    render(){
        return(
            <div>
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}
export default(TodoAPPMobx);