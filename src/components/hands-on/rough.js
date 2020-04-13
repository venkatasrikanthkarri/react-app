import {observable,action} from 'mobx'
class Ticker{
    @observable tick=0;

    @action
    increment(){
        this.tick++;
    }
}

const Rough=new Ticker();
Rough.increment();

export default Rough