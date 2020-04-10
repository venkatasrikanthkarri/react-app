// EVENT APP


import React from 'react';
import AddEvent from './AddEvent.js'
import EventList from './EventList.js';
class EventsApp extends React.Component{
    render(){
        return(
            <div>
                <AddEvent/>
                <EventList/>
            </div>
        );
    }
}

export default(EventsApp);