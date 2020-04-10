// EVENT USER INPUT 

import React from 'react';
import {observable} from 'mobx';
import EventStoreInstance from '../../stores/eventsPage/index.js';
class AddEvent extends React.Component{
    @observable eventName;
    @observable eventLocation;

    onChangeEventName=(event)=>{
        this.eventName=event.target.value;
    }

    onChangeEventLocation=(event)=>{
        this.eventLocation=event.target.value;
    }
    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.eventName,this.eventLocation);
        const eventDetails=[this.eventName,this.eventLocation];
        EventStoreInstance.onAddEvent(eventDetails);
        // this.eventName='';
        // this.eventLocation='';

    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input style={{background:'red',color:'white'}} type='text' value={this.eventName} onChange={this.onChangeEventName}/>
                <input style={{background:'blue',color:'white'}} type='text' value={this.eventLocation} onChange={this.onChangeEventLocation}/>
                <button onSubmit={this.onSubmit}>submit</button>
            </form>
        );
    }
}

export default(AddEvent);