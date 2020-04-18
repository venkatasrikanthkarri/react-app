// INDIVIDUAL EVENT
import {observer} from 'mobx-react';

import React from 'react';
type Props ={
    eventObject:{
        'name':string;
        'location':string;
    }
}
@observer
class Event extends React.Component<Props>{
    render(){
        const{eventObject}=this.props;
            return(
                <div key={Math.random()}>
                         <input key={Math.random()} type='text' defaultValue={eventObject.name}/>
                         <input key={Math.random()} type='text' defaultValue={eventObject.location}/>
                         <button key={Math.random()} >EDIT</button>
                         <button key={Math.random()}>DELETE</button>   
                 </div>
                     
             )
        }
}
export default(Event);