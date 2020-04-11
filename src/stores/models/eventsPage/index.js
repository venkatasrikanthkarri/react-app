// EVENT MODEL
import {observable} from 'mobx';
class Event{
    @observable name;
    @observable location;
    consructor(){
        this.id=null;
        this.name=null;
        this.location=null;
    }
    onUpdateEventDetails=(eventDetails)=>{
        console.log('model',eventDetails);
        this.name=eventDetails[0];
        this.location=eventDetails[1];
        this.id=Math.random();
    }
}

export default(Event);