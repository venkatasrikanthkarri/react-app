import { observable, action } from 'mobx';

class CounterState{
    
    @observable count=0;
    @action.bound onIncrement=()=>{
        this.count++;
    }
    @action.bound onDecrement=()=>{
        this.count--;
   }
   @action.bound onChangeCount=(event)=>{
       return this.count=event.target.value;
   }
}

const CounterStates=new CounterState();
export default(CounterStates);