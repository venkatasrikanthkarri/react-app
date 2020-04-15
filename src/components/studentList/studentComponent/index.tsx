import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

import Student from '../../../stores/models/student'

type StudentComponentProps={
student:Student
}

@observer
class StudentComponent extends React.Component<StudentComponentProps>{

    @observable gender:string='';
    @observable studentName:string='';  


    render(){

const{student}=this.props
const{name,gender}=student
console.log(student)
        return(
            <div>
            <input
                style={{background:'green'}}
                defaultValue={name}
            />
            gender:{gender}
            </div>
            )
    }

}

export default StudentComponent