
import {observable} from 'mobx';

export type StudentObjectType={
    id:string,
    name:string,
    gender?:string
}

class Student{
    id:string
    gender?:string
    @observable name:string

    constructor(studentObject){
        this.id=studentObject.id
        this.name=studentObject.name
this.gender=studentObject.gender?studentObject.gender:"others"
    }

}

export default Student;

