import Todo from '../../components/stores/models/Todo.js';
import {observable,action} from 'mobx'
// import {observer} from 'mobx-react';
class TodoStore{
    @observable todos=[];
    @observable selectedFilter='ALL';


    
    @action onAddTodo=(event)=>{
            const TodoModel = new Todo();
            TodoModel.onUpdateTodoTitle(event);
            this.todos.push(TodoModel);
        }  
    onRemoveTodo=()=>{

    }
    onChangeSelectedFilter=()=>{

    }
    onClearCompleted=()=>{

    }
}   
let TodoStoreInstance=new TodoStore();
export default (TodoStoreInstance);