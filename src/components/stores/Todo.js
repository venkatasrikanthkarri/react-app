import React from 'react';
// import {observer} from 'mobx-react';
class Todo extends React.Component{
    
render(){
    const {todoObject}=this.props;
    console.log('todo',todoObject);
    return(
        todoObject.map(each=><div key={Math.random()}>
            <input checked={each.isCompleted} type='checkBox'/>
                <input value={each.title} type='text' />
                <button>close</button>
                </div>
            )
        );
    }
}

export default(Todo);