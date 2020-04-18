// EVENT STORE

import {observable,toJS,action} from 'mobx';
import Event from '../models/eventsPage/index';

class EventStore{
    @observable eventsArray;
    constructor(){
        this.eventsArray=[];
    }
    @action.bound onAddEvent(eventDetails){
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
const eventStoreInstance=new EventStore();
export default(eventStoreInstance);
