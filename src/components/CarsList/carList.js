// Write your React Code here
import React from 'react';
import './index.css';
let carId=[1];

class CarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id,
            carGoingToStart:"START",
            carStatus:"STOPPED",
            speed:0,
            delCar:this.props.removeCar

        };
    }

    startCar=()=>{
        if(this.state.carGoingToStart==="START")
        {
            this.setState({carStatus:"RUNNING"});
            this.setState({carGoingToStart:"STOP"});
        }
        else{
            this.setState({carStatus:"STOPPED"});
            this.setState({carGoingToStart:"START"});
            this.setState({speed:0});
        }
    };

    increaseSpeed=()=>{
        this.setState({speed:this.state.speed+10});
    };

    decreaseSpeed=()=>{
        if(this.state.speed>0)
        {
            this.setState({speed:this.state.speed-10});
        }

    };

    displayStatus=()=>{
        if(this.state.carGoingToStart==="START"){
            return `Status: Stopped`;
        }
        else if(this.state.speed===0){
            return "Status: Running";
        }
        else{
            return `Status: Running at ${this.state.speed}kmph`;
        }
    }

    render(){
        return(
            <div className="car">
            <span className="car-id-display">CarId:{this.state.id}</span>
                <div className="id-close-Btn">
                    <button className="start Btn" onClick={this.startCar}>{this.state.carGoingToStart}</button>
                    <button className="close Btn" onClick={this.state.delCar} id={this.state.id}>close</button>
                </div>

                <div className="status">
                    <span className="car-status">{this.displayStatus()}</span>
                </div>

                <div className="car-controls">
                    <button className="acelerate Btn" onClick={this.increaseSpeed} disabled={this.state.carGoingToStart==='START'}>Acelerate</button>
                    <button className="deacelerate Btn" onClick={this.decreaseSpeed} disabled={this.state.speed<=0}>Deacelerate</button>
                </div>
            </div>
        )}

}

class CarGarage extends React.Component{

    constructor(props){

        super(props);
        this.state={
            carid:[1],

        };

    }

    carList=()=>{
        carId=this.state.carid;
        if(carId.length===0)
        {
            carId.push(1);
            this.setState({carid:carId});
        }
        else{
        carId.push(carId[carId.length-1]+1);
        this.setState({carid:carId});

        }

    };

    cloneCar=()=>{

      let data= this.state.carid.map(each=><CarComponent key={each} id={each} removeCar={this.removeCar}/>);
      return data;

    };

    removeCar=(event)=>{
        let id=event.target.id;
        let dummy=this.state.carid.filter(item=>
            item!==parseInt(id,10));
        this.setState({carid:dummy});

    };

    render(){
        return(
            <div className='template'>
                <button className="Add Btn" onClick={this.carList}>Add Car</button>
                {this.cloneCar()}
            </div>
        )}

}

export {CarGarage};

// ReactDOM.render(<CarGarage />,document.getElementById('root'));

