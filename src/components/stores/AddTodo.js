import React from 'react';
import {observer} from 'mobx-react';
import {observable,action} from 'mobx';

import TodoStoreInstance from '../../stores/mobxModelTodoList/TodoStore.js';

@observer class AddTodo extends React.Component{
    
    @observable todoTitle=null;
    
    
    @action onAddTodo=(event)=>{
        if(event.keyCode===13){
            TodoStoreInstance.onAddTodo(this.todoTitle);
            event.target.value='';
        }
    }
   
    @action onChangeInput=(event)=>{
        this.todoTitle=event.target.value;
    }

    render(){
        return(
            <div>
                <h1>todos</h1>
                <input type='text' placeholder='Next todos' onKeyDown={this.onAddTodo} onChange={this.onChangeInput}/>
            </div>
        );
    }
}

export default(AddTodo);