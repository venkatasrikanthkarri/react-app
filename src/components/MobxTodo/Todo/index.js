import React from 'react';
import {observer} from 'mobx-react';
import {observable,action} from 'mobx';
import {Heading,Container,UserInput} from './style.js'
// import {toJS} from 'mobx';

import TodoList from '../TodoList/TodoList.js';
@observer class TodoApp extends React.Component {
    @observable todos=[];
    @observable selectedFilter ='ALL';
 
    @action onAddTodo = (event) =>{
        if(event.keyCode===13){
            if(event.target.value.match(/^(?!\s*$)./)){
                this.todos=[...this.todos,{id:Math.random(),title:event.target.value,isCompleted:false}];
                event.target.value='';
            }
            else{
                alert('Empty Todo');
            }
           
        }  
    }
    
    @action onCompleteTodo=(event)=>{
    this.todos=this.todos.map(each=>{
    if(parseFloat(each.id)===parseFloat(event.target.id)){
        each.isCompleted=event.target.checked;
    }
    return each;    
})
    }


    @action onRemoveTodo=(event)=>{
        this.todos=this.todos.filter(each=>each.id!==parseFloat(event.target.id));
    }

    @action onUpdateTodoTitle=(event)=>{
        this.todos=this.todos.map(each=>{
            if(parseFloat(each.id)===parseFloat(event.target.id)){
                each.title=event.target.value;
            }
            return each;
        })
    }

    render(){
        return(
            <Container>
                <Heading>todos</Heading>
                <UserInput type="text" onKeyDown={this.onAddTodo} placeholder='Enter next todos'/>
                <TodoList todos={this.todos} onCompleteTodo={this.onCompleteTodo} onRemoveTodo={this.onRemoveTodo} onUpdateTodoTitle={this.onUpdateTodoTitle}/>
            </Container>
        );
    }

}

export default (TodoApp);
