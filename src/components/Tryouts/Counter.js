import React from 'react';
import {observer} from 'mobx-react';
import{reaction} from 'mobx';
import{Button,Div,Container,Input,H1} from './style.js';

import CounterState from './state.js';

@observer class CounterApp extends React.Component {
    constructor(){
        super();
        this.counterReaction=reaction(()=>{return CounterState.count>5},(value)=>{console.log('reaction',value)});
    }
    render(){
        return(
    <Container>
        <H1>COUNTER</H1>
        <Div>
            <Button onClick={CounterState.onIncrement}>+</Button>
            <Input value={CounterState.count} type="number" onChange={CounterState.onChangeCount} />
            <Button onClick={CounterState.onDecrement}>-</Button>
        </Div>
    </Container>
        )
    }
}

export default(CounterApp);