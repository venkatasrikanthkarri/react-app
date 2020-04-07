import React,{Component} from 'react';
import "./CountryBorders.css";
import { withRouter } from "react-router-dom";

class CountryBorders extends Component{
    
    click=(event)=>{
        let{history}=this.props;
        history.push({pathname:`/Countries-Dashboard-App/${event.target.id}`});
    }
    
    createButtons=()=>{
        let id=1,val=0;
        let{borderCountriesNames,borderCountriesAlphaCodes}=this.props;
        
        return (
            borderCountriesNames.map(each=>
            {
                return(
            <button
            className="boundariesBtn" 
            key={id++} 
            id={borderCountriesAlphaCodes[val++]} 
            onClick={this.click}>{each}
            </button>
            )})
        );
        
    }
    
    render(){
    
        return(
            <div>
            {this.createButtons()}
            </div>
            );
    }
}

export default withRouter(CountryBorders);