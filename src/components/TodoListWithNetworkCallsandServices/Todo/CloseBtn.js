import React, { Component } from 'react';
import {Close} from './style.js'
export default class CloseBtn extends Component{
    
    
    render(){
        return(
        <Close onClick={this.props.onRemoveTodo} color={this.props.color} bg={this.props.bg}>Closee{this.props.close}</Close>
        )
    }
}

