import {observable, action} from 'mobx'
import TodoModel from '../models/TodoModelMobxandNetworkCalls'

class TodoApp {
    @observable todos
    @observable selectedFilter
    constructor(){
        this.todos=[]
        this.selectedFilter='ALL'
    }

    @action.bound
    async fetchTodos(url){
        alert(123)
        const todos=await fetch(url)
        this.todos= await todos.json()    
    }

    @action
    getTodos=()=>{
        this.fetchTodos('https://jsonplaceholder.typicode.com/todos')
    }
    @action.bound
    onAddTodo=(event)=>{
        const Todo=new TodoModel()
        Todo.title=event
        this.todos=[...this.todos,Todo]
    }
}

const todoApp=new TodoApp()
export default todoApp