import React, { Component } from 'react'
import { observer} from 'mobx-react'
import {observable,reaction} from 'mobx';
import stores from '../../stores'


@observer
class CounterPage extends Component {

  @observable counterStore = stores.counterStore
  constructor(){
    super()
    console.log(this.counterStore);
    this.counterReaction=reaction(()=>{return this.counterStore>5},(value)=>console.log(typeof value));
 };
  handleIncrement = () => {
    this.counterStore.incrementCounter()
  }

  handleDecrement = () => {
    if (this.counterStore.count !== 0) {
      this.counterStore.decrementCounter()
    }
  }
  
  render() {
    
    return (
      <div>
        <h1>{this.counterStore.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default CounterPage
