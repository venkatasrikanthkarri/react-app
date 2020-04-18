import React from 'react'
import {observer} from 'mobx-react'

import StudentStore from './../../stores/studentStore'

import StudentComponent from './studentComponent'

import AddStudent from './AddStudent'


@observer
class StudentsPage extends React.Component{

    onStudentAdd=(studentName:string,gender?:string)=>{
        StudentStore.addStudent(studentName,gender)
    }

    renderStudentsList=()=>{
        return StudentStore.students.map(student=>{
            return <StudentComponent key={student.id} student={student} />
        })
    }

    render(){
        return(
            <div>
                <AddStudent key={Math.random()} onStudentAdd={this.onStudentAdd}/>
                {this.renderStudentsList()}
            </div>
            )
    }
}

export default StudentsPage