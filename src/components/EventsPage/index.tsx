// EVENT APP

import React from 'react';
import { observer } from 'mobx-react';
import AddEvent from './AddEvent'
import EventList from './EventList';


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