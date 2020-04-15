import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'



type AddStudentProps={
    onStudentAdd:(name:string,gender:string)=>void
}

@observer
class AddStudent extends React.Component<AddStudentProps>{

        @observable gender:string
    @observable studentName:string
    constructor(props){
        super(props);
        this.studentName=''
        this.gender=''
    }

    onChange=(event)=>{
        this.studentName=event.target.value

    }

    onChangeGender=(event)=>{
        this.gender=event.target.value

    }

    onKeyDown=(event)=>{
        if(event.keyCode===13)
        {
            const{onStudentAdd}=this.props;
            onStudentAdd(this.studentName,this.gender)
        }
    }

    render(){
        return(
            <div>
            <input
                style={{background:'green'}}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                value={this.studentName}
            />

                        <input
                style={{background:'green'}}
                onChange={this.onChangeGender}
                onKeyDown={this.onKeyDown}
                value={this.gender}
            />

            </div>
            )
    }

}

export default AddStudent