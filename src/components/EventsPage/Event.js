// INDIVIDUAL EVENT

import React from 'react';
import {observer} from 'mobx-react';
@observer class Event extends React.Component{
    render(){
        const {eventObject}=this.props;
        const key=Math.random();
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