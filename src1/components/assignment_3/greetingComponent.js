import React from 'react';
import './greetingComponent.css';
class GreetingComponent extends React.Component{
    
    constructor(props){
        
        super(props);
        this.state={
        value:'',
        displayMsg:''

        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    
    
    handleChange=(event)=>{
        
        this.setState({value:event.target.value});
    
    }
    
    handleSubmit=(event)=>{
    
        event.preventDefault();
    
    }
    
    msg=()=>{
        if(this.state.value.match(/^(?!\s*$)./))
        this.setState({displayMsg:`Hello ${this.state.value}, have a nice day!`});
        this.setState({value:''});
    
    }
    render(){
        return(
                <form className="form-fields" onSubmit={this.handleSubmit}>
                <input className="greetingInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter the Name" />
                <button className="greetButton" type="button" onClick={this.msg}>Greet</button>
                <span>{this.state.displayMsg}</span>
                </form>
            );
    }
}


export{GreetingComponent};