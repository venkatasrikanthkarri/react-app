import React from 'react';
import "./disableBtnComponent.css";
class DisableComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            displayMsg:'',
            isChecked:false
        };
        this.handleClick=this.handleClick.bind(this);
}
        
        handleClick=(event)=>{
            if(event.target.className==="checkBoxEl" && event.target.checked){
            this.setState({isChecked:event.target.checked});    
            this.setState({value:"I am disabled."});    
            }
            else if(event.target.className==="checkBoxEl" && !event.target.checked){
            this.setState({isChecked:event.target.checked});    
            this.setState({value:""});    
            }
            
            else if(event.target.className==="clickMeBtn"){
                this.setState({value:"Hi, I am an enabled."});
            }
            
        }

        render(){
            return(
                    <div className="disableState">
                    <div className="partOne">
                    <input className="checkBoxEl" type="checkBox" value="Disabled" onClick={this.handleClick} />
                    <label for value="Disabled">Disabled</label>
                    </div>
                    <div className="partTwo">
                    <button className="clickMeBtn" onClick={this.handleClick} disabled={this.state.isChecked} >Click me</button>
                    <span className="statusDispaly" >{this.state.value}</span>
                    </div>
                    </div>
                );
        }
}
export{DisableComponent};