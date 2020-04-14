// EVENT LISTS

import React from 'react';
import eventStoreInstance from '../../stores/eventsPage/index';
import {observer} from 'mobx-react';
import Event from './Event';
@observer 
class EventList extends React.Component{
    render(){
    console.log('EventList from Stores',eventStoreInstance.eventsArray);
        if(eventStoreInstance.eventsArray!==undefined){
        return(
            <div key={Math.random()}>
                {eventStoreInstance.eventsArray.map(each=><Event eventObject={each} />)}
            </div>
            );
        }
        else{
            return null;
        }
    }
}

export default(EventList);