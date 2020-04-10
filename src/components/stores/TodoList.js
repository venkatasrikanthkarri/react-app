import React from 'react';
import TodoStoreInstance from '../../stores/mobxModelTodoList/TodoStore.js';
import Todo from './Todo.js';
import {observer} from 'mobx-react';
@observer class TodoList extends React.Component{

    render(){
        console.log('todolist',(TodoStoreInstance.todos));
        return(
            <div>
                {TodoStoreInstance.todos.map(each=><Todo todoArray={each} />)}
            </div>)
    }
}
export default(TodoList);