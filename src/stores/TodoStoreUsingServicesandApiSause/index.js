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
    }

    @action.bound
    onAddTodo=(event)=>{
        const Todo=new TodoModel()
        Todo.title=event
        this.todos=[...this.todos,Todo]
    }


    onCompleteTodo=(Todo)=>{
        Todo.completed=!Todo.completed
    }
    
    onRemoveTodo=(Todo)=>{
        this.todos=this.todos.filter(each=>
            parseFloat(each.id)!==parseFloat(Todo.id))
    }

    onUpdateTodoTitle=(Todo,value)=>{
        Todo.title=value
    }

    @computed
    get activeTodosCount(){
        this.activeTodoCount=0
        this.todos.forEach(each=>{
        if(!each.completed)
        {this.activeTodoCount++}}
    )
    console.log(123123,this.activeTodoCount)
    return this.activeTodoCount
    }














}

export default TodoApp