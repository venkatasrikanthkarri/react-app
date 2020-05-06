import React, { Component } from 'react';
// import connect from mqtt
import { observable, action } from "mobx";
import {observer} from 'mobx-react'

@observer
class MqttBrocker extends Component{
  @observable message
    // constructor(props){
    //     super(props);
    //     this.message=''
    // this.init()
    //     }

//     @action.bound
//     async init(){
//     var mqtt = require('mqtt')
//     var client =await mqtt.connect({ port: 1883, host: 'test.mosquitto.org', keepalive: 10000})

//     // client.subscribe('ibib')
//     // client.on('message', function (topic, message) {
//     //   alert(message)
//     //   this.message=message
//     // })

// client.publish('presence', 'hello!')
// client.end()


//     }

    pubMsg=()=>{
      var mqtt = require('mqtt')
    var client = mqtt.connect({ port: 3001, host: 'test.mosquitto.org', keepalive: 10000})

    // client.subscribe('ibib')
    // client.on('message', function (topic, message) {
    //   alert(message)
    //   this.message=message
    // })

client.publish('presence', 'hello!')
client.end()
    }
    
    
 

    
    
    
    render(){
        return(
<input type="text" defaultValue={this.message} onChange={this.pubMsg} placeholder="enter msg" />
        )
    }
}

export {MqttBrocker}
