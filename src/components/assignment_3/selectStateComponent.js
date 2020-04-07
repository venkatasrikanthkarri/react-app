import React from 'react';
import "./selectStateComponent.css";
class StateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            displayMsg:'',
            isChecked:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
}

        handleSubmit=(event)=>{
            if(this.state.value!=='')
            {
            let msg=`I am from "${this.state.value}" state.`;
            this.setState({displayMsg:msg});
            event.preventDefault();    
            }
            else{
                this.setState({displayMsg:''});
            }
        }
        
        handleChange=(event)=>{
            this.setState({value:event.target.value});
        }

        render(){
            return(
                    <div className="selectState">
                    <form className="form-fields" onSubmit={this.handleSubmit}>
                    <select className="selectStateTag" onChange={this.handleChange}>
                    <option value="">Select Your State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Telangana">Telangana</option>
                    <option Value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Haryana">Haryana</option>
                    
                    </select>
                    <button className="selectStateBtn" type="button" onClick={this.handleSubmit}>Submit</button>
                    </form>
                    <span className="statusDispaly">{this.state.displayMsg}</span>
                    </div>
                );
        }
}
export{StateComponent};