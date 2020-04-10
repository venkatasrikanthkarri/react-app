// EVENT LISTS

import React from 'react';
import EventStoreInstance from '../../stores/eventsPage/index.js';
import {observer} from 'mobx-react';
import Event from './Event.js';
@observer class EventList extends React.Component{
    render(){
    console.log('EventList from Stores',EventStoreInstance.EventArray);
        if(EventStoreInstance.EventArray!==undefined){
        return(
            <div>nothing
                {EventStoreInstance.map(each=><Event EventObject={each} />)}
            </div>
            );
        }
        else{
            return null;
        }
    }
}

export default(EventList);