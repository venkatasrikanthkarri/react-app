import {observable, action,computed} from 'mobx'
import TodoModel from '../models/TodoModelMobxandNetworkCalls'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'

class TodoApp {
    @observable todos
    @observable selectedFilter

    @observable getTodoListAPIStatus
    @observable getTodoListAPIError
    todoService
    activeTodoCount
    constructor(todoService){
        this.todoService=todoService
        this.init()

    }

    init=()=>{
        this.todos=[]
        this.todoBuffer=[]
        this.selectedFilter='ALL'
        this.getTodoListAPIStatus='API_INITIAL'
        this.getTodoListAPIError=null
        this.activeTodoCount=0
    }

    @action
    clearStore(){
        this.init()
    }
    
    @action.bound
    getTodoList(){
        const todoPromise=this.todoService.getTodoList()
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setTodoListAPIStatus,this.setTodoListResponse)
        .catch(this.setTodoListAPIError)
    }

    setTodoListAPIError=(error)=>{
        this.getTodoListAPIError=error
    }

    setTodoListAPIStatus=(todoStatus)=>{
        this.getTodoListAPIStatus=todoStatus
    }

    setTodoListResponse=(todos)=>{
        this.todos=todos
        this.todoBuffer=todos
    }

    @action.bound
    onAddTodo=(event)=>{
        const Todo=new TodoModel()
        Todo.title=event
        this.todos=[...this.todos,Todo]
        this.todoBuffer=this.todos
    }


    onCompleteTodo=(Todo)=>{
        Todo.completed=!Todo.completed
    }
    
    onRemoveTodo=(Todo)=>{
        this.todos=this.todos.filter(each=>
            parseFloat(each.id)!==parseFloat(Todo.id))
        this.todoBuffer=this.todos
    }

    onUpdateTodoTitle=(Todo,value)=>{
        Todo.title=value
    }

    displayTodos=()=>{
        this.todos=this.todoBuffer

    }

    displayActiveTodos=()=>{
        this.todos=this.todoBuffer.filter(todo=>todo.completed===false)
    }

    displayCompletedTodos=()=>{
        this.todos=this.todoBuffer.filter(todo=>todo.completed===true)
    }

    clearCompletedTodos=()=>{
        this.todos=this.todoBuffer.filter(todo=>todo.completed===false)
        this.todoBuffer=this.todos        
    }


    @computed
    get activeTodosCount(){
        this.activeTodoCount=0
        this.todos.forEach(each=>{
        if(!each.completed)
        {this.activeTodoCount++}}
    )
    return this.activeTodoCount
    }


}

export default TodoApp