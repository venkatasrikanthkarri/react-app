// EVENT MODEL
import {observable} from 'mobx';
type StateValues={
    name:string
    location:string
}
class Event<StateVariable>{
    @observable name;
    @observable location;
    id:any
    consructor(){
        this.id='';
        this.name='';
        this.location='';
    }
    onUpdateEventDetails=(eventDetails)=>{
        console.log('model',eventDetails);
        this.name=eventDetails[0];
        this.location=eventDetails[1];
        this.id=Math.random();
    }
}

export default(Event);