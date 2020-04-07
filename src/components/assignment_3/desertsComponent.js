import React from 'react';
import "./desertsComponent.css";
class SelectYourDesertComponent extends React.Component{
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
            this.setState({displayMsg:this.state.value});
            event.preventDefault();
        }
        handleClick=(event)=>{
            let msg=`My favourite desert is ${(event.target.value).toUpperCase()}`;
            this.setState({value:msg});
        }

        render(){
            return(

                <div className="FavDesert">
                <p>What is your favourite desert?</p>
                    <form className="form-fields" onSubmit={this.handleSubmit}>
                    <div className="radioBtn">
                    <span>
                    <input className="selectDesert" type="radio" value="Vannila" name="deserts" onClick={this.handleClick} />
                    <label for="Vannila">Vannila</label>
                    </span>

                    <span>
                    <input className="selectDesert" type="radio" value="Butterscotch" name="deserts" onClick={this.handleClick} />
                    <label for="Butterscotch">Butterscotch</label>
                    </span>

                    <span>
                    <input className="selectDesert" type="radio" value="Gulab Jamum" name="deserts" onClick={this.handleClick} />
                    <label for="Gulab Jamum">Gulab Jamun</label>
                    </span>

                    <span>
                    <input className="selectDesert" type="radio" value="Yoghurt Pots" name="deserts" onClick={this.handleClick} />
                    <label for="Yoghurt Pots">Yoghurt Pots</label>
                    </span>

                    <span>
                    <input className="selectDesert" type="radio" value="Baked Banana" name="deserts" onClick={this.handleClick} />
                    <label for="Baked Banana">Baked Banana</label>
                    </span>

                    <span>
                    <input className="selectDesert" type="radio" value="Chocolate" name="deserts" onClick={this.handleClick} />
                    <label for="Chocolate">Chocolate</label>
                    </span>
                    </div>

                    <button className="selectDesertBtn" type="button" onClick={this.handleSubmit}>Make Your Choice</button>
                    <span>{this.state.displayMsg}</span>
                    </form>
                </div>
                );
        }
}

export{SelectYourDesertComponent};