// EVENT USER INPUT 

import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import EventStoreInstance from '../../stores/eventsPage/index';
@observer class AddEvent extends React.Component{
    @observable eventName;
    @observable eventLocation;
    constructor(props){
        super(props);
        this.eventName='';
        this.eventLocation='';
    }

    @action.bound onChangeEventName=(event)=>{
        this.eventName=event.target.value;
    }

    @action.bound onChangeEventLocation=(event)=>{
        this.eventLocation=event.target.value;
    }
    @action.bound onSubmit=(event)=>{
        const eventDetails=[this.eventName,this.eventLocation];
        event.preventDefault();
        EventStoreInstance.onAddEvent(eventDetails);
        this.eventName='';
        this.eventLocation='';

    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input style={{background:'red',color:'white'}} type='text' value={this.eventName} onChange={this.onChangeEventName} placeholder="Enter Name"/>
                <input style={{background:'blue',color:'white'}} type='text' value={this.eventLocation} onChange={this.onChangeEventLocation} placeholder="Enter LOcation" />
                <button>submit</button>
            </form>
        );
    }
}

export default(AddEvent);