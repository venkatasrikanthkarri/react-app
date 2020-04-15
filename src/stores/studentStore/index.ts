
import {observable,action} from 'mobx';
import Student,{StudentObjectType} from '../models/student'

class StudentsStore{
    @observable students:Array<Student>
    constructor(){
this.students=[]
    }

    @action
    addStudent(name:string,gender?:string){
const studentObject:StudentObjectType={
    name:name,
    gender:gender,
    id:Math.random().toString()
}
const studentModel:Student=new Student(studentObject)
this.students.push(studentModel)
}
}

const studentsStore=new StudentsStore()

export {studentsStore as default}