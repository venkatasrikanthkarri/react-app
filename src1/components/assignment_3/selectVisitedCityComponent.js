import React from 'react';
import "./selectVisitedCityComponent.css";
let city=[];
class SelectVisitedCityComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            displayMsg:'',
            isChecked:''
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
}

        handleSubmit=(event)=>{
            if(this.state.value!==''){
                
            
            let str=this.state.value;
            let msg=`I have visited these cities ${str.join(', ')}.`;
            this.setState({value:msg});
            this.setState({displayMsg:msg});
            event.preventDefault();
            }
        }
        handleClick=(event)=>{
            if(event.target.checked){
            city.push(event.target.value);
            this.setState({value:city});
            }
            else{
                city=city.filter(item=>
                    item!==event.target.value
                );
                this.setState({value:city});
            }


        }

        render(){
            return(

                <div className="FavCity">
                <p>Which of the following cities you have?</p>
                    <form className="form-fields" onSubmit={this.handleSubmit}>
                    <div className="checkBoxes">
                    <span>
                    <input className="selectCity" type="checkBox" value="Hyderabad"  onClick={this.handleClick} />
                    <label for="Hyderabad">Hyderabad</label>
                    </span>

                    <span>
                    <input className="selectCity" type="checkBox" value="Mumbai"  onClick={this.handleClick} />
                    <label for="Mumbai">Mumbai</label>
                    </span>

                    <span>
                    <input className="selectCity" type="checkBox" value="Chennai"  onClick={this.handleClick} />
                    <label for="Chennai">Chennai</label>
                    </span>

                    <span>
                    <input className="selectCity" type="checkBox" value="Bangalore"  onClick={this.handleClick} />
                    <label for="Bangalore">Bangalore</label>
                    </span>

                    <span>
                    <input className="selectCity" type="checkBox" value="Pune"  onClick={this.handleClick} />
                    <label for="Pune">Pune</label>
                    </span>

                    <span>
                    <input className="selectCity" type="checkBox" value="Delhi"  onClick={this.handleClick} />
                    <label for="Delhi">Delhi</label>
                    </span>
                    </div>

                    <button className="selectCityBtn" type="button" onClick={this.handleSubmit}>Make Your Choice</button>
                    </form>
                    <span className="statusDispaly">{this.state.displayMsg}</span>
                </div>
                );
        }
}
export{SelectVisitedCityComponent};