// EVENT STORE

import {observable,toJS} from 'mobx';
import Event from '../models/eventsPage/index.js';

class EventStore{
    @observable eventsArray;
    constructor(){
        this.eventsArray=[];
    }
    onAddEvent=(eventDetails)=>{
        const eventModel=new Event();
        // console.log('store',eventDetails);
        eventModel.onUpdateEventDetails(eventDetails);
        console.log('eventModel',eventModel);
        this.eventsArray.push(eventModel);
        console.log('eventArray',toJS(this.eventsArray));
    }
    onDeleteEvent=()=>{

    }
}
const EventStoreInstance=new EventStore();
export default(EventStoreInstance);
