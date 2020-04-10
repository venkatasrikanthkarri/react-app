// INDIVIDUAL EVENT

import React from 'react';
class Event extends React.Component{
    render(){
        const {eventObject}=this.props;
        if(eventObject.length!==0){
            return(
                <div>{eventObject.map(each=> <div key={Math.random()}>
                         <input type='text' value={each.name}/>
                         <input type='text' value={each.location}/>
                         <button>EDIT</button>
                         <button>DELETE</button>
                     </div>
                     )}
                 </div>
                     
             )
        }
        else{
            return null;
        }
        
    }
}
export default(Event);