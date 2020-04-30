import React from 'react';
import './todoListIndex.css';
let userGivenData={
    checkedStatus:false,
    value:'',
    id:''
};
let listOfTodos=[];
class TodoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            userdata:this.props.data,
            deleteTodo:this.props.deleteList,
            strikeTodo:this.props.completedTodo,
            checkedStatus:this.props.check,
            editTodo:this.props.updateTodos
        };
    }


    render(){
        return(
            <div className="todo">
            <input className="todoCheckBox" type="checkbox" id={this.state.id} onClick={this.state.strikeTodo} defaultChecked={this.state.checkedStatus} />
            <input className="todoDisplayScreen" id={this.state.id} type="text" defaultValue={this.state.userdata} onChange={this.state.editTodo}/>
            <button className="todoDeleteBtn Btn" id={this.state.id} onClick={this.state.deleteTodo} ><span role="img" aria-label="cross">❌</span></button>

            </div>
            );
    }
}



class FooterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:this.props.activeBtn,
            all:this.props.allBtn,
            completed:this.props.completedBtn,
            clear:this.props.clearBtn

        };
    }

    activeCount=()=>{
        let activeCount=0;
        listOfTodos.forEach(item=>{
            if(!item.checkedStatus)
            activeCount++;
        });
        return `${activeCount} Items left`;

    };

    footerTemplate=()=>{

            return (
        <div className="bottomTemplate" >
          <div className="template_1"></div>
          <div className="template_2"></div>
          <div className="template_3"></div>
        </div>);
    }

    render(){

            if(listOfTodos.length!==0){

            return(
            <div className="footerPart">
            <div className="footerControl">
            <span className="activeListDisplayScreen" >{this.activeCount()}</span>
            <button className="displayAll-btn Btn" onClick={this.state.all}>All</button>
            <button className="active-btn Btn" onClick={this.state.active}>Active</button>
            <button className="completed-btn Btn"  onClick={this.state.completed}>Completed</button>
            <button className="clearCompleted-btn Btn" onClick={this.state.clear}>Clear Completed</button>
            </div>
            {this.footerTemplate()}
            </div>
            );
            }
            return '';
        

    }
}

class UserMainComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todolistsData:listOfTodos
        };
    }


    enterDataToTodos=(event)=>{
        if (event.keyCode===13){
            if(event.target.value.match(/^(?!\s*$)./)){
                userGivenData.id=Math.random();
                userGivenData.checkedStatus=false;
                userGivenData.value=event.target.value;
                listOfTodos.push(userGivenData);
                event.target.value='';
                this.setState({todolistsData:listOfTodos});
                userGivenData={};
            }
            else
            {
                alert('Empty Todo');
            }
        }
    };


    cloneTodo=()=>{

    let todos='';
    todos=this.state.todolistsData.map((each)=>

    <TodoComponent
          key={each.id}
          id={each.id}
          data={each.value}
          check={each.checkedStatus}
          deleteList={this.deleteTodo}
          completedTodo={this.strikeTodo}
          updateTodos={this.updateTodo}
          />

      );
      return todos;

    };


    strikeTodo=(event)=>{
        const checkBox = event.target;
        const userTodo = event.target.nextSibling;
              if(checkBox.checked){

                  listOfTodos.forEach((item)=>{
                      if(item.id===parseFloat(checkBox.id)){
                      item.checkedStatus=true;
                      let str=item.value.strike();
                      alert(str);
                      item.value=str;
                      userTodo.disabled=true;
                      checkBox.checked=true;
                      }
                  });
                  this.setState({todolistsData:listOfTodos});
              }
              else{
                  listOfTodos.forEach((item)=>{
                      if(item.id===parseFloat(checkBox.id)){
                      item.checkedStatus=false;
                      item.value=item.value.strike();
                        userTodo.disabled=false;
                        checkBox.checked=false;
                      }
                  });
                  this.setState({todolistsData:listOfTodos});
              }

    };


    deleteTodo=(event)=>{

        let filteredData=listOfTodos.filter(item=>item.id!==event.target.id);
        this.setState({todolistsData:filteredData});
        listOfTodos=filteredData;
        this.setState({activeCount:`${listOfTodos.length} Items left`});

    };


    updateTodo=(event)=>{
        console.log(event.target.value);
        listOfTodos.forEach(item=>{
            if(item.id===parseFloat(event.target.id)){
                item.value=event.target.value;
            }
        });


        this.setState({todolistsData:listOfTodos});
    }


    displayActive=()=>{
        this.setState({todolistsData:listOfTodos});
        let activeList=listOfTodos.filter(item=>item.checkedStatus===false);
        this.setState({todolistsData:activeList});
    };
    displayAll=()=>{
        this.setState({todolistsData:listOfTodos});
    };
    displayCompleted=()=>{
        this.setState({todolistsData:listOfTodos});
        let completedList=listOfTodos.filter(item=>item.checkedStatus===true);
        this.setState({todolistsData:completedList});
    };

    clearCompleted=()=>{
        let filteredData=listOfTodos.filter(item=>item.checkedStatus===false);
        this.setState({todolistsData:filteredData});
        listOfTodos=filteredData;
    };

    render(){
        return(
            <div className="template">
            <div className="template1">
            <h1 className="title">todos</h1>
            <input className="userInput" placeholder="Next Todos" type="text" onKeyDown={this.enterDataToTodos} />
            {this.cloneTodo()}

            <FooterComponent
            activeBtn={this.displayActive}
            allBtn={this.displayAll}
            completedBtn={this.displayCompleted}
            clearBtn={this.clearCompleted}
            />
</div>
            </div>
            );
    }
}
export{UserMainComponent};
// ReactDOM.render(<UserMainComponent />,document.getElementById('root'));