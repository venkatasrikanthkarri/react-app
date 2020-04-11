// EVENT APP

import React from 'react';
import AddEvent from './AddEvent.js'
import EventList from './EventList.js';
import { observer } from 'mobx-react';

@observer
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