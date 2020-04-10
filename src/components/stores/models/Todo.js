// Todo Model template stores in model...

import {observable,action} from 'mobx';
class Todo{
    @observable title;
    @observable isCompleted;
    constructor(props){
        this.id=Math.random();
        this.title=null;
        this.isCompleted=false;
    }
@action onCompleteTodo=()=>{
    this.isCompleted=true;
    }

@action onUpdateTodoTitle=(event)=>{
    this.title=event;

    }
}


export default(Todo);