import {observable} from 'mobx'
class TodoModel{
    @observable completed
    @observable title
    constructor(){
        this.id=Math.random()
        this.completed=false
        this.title=''
    }
}
export default TodoModel