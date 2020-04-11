import React,{Component} from 'react';
import {Provider,inject,observer} from 'mobx-react';
import {observable} from 'mobx';



@inject('temp')
class C extends Component{
    render(){
        const{temp,name}=this.props;
        console.log('c',temp,name);
        return(
            <div>c {temp}{name}</div>
        );
    }
}


@inject('temp')
@observer
class B extends Component{

    @observable name;
    change=(event)=>{
        this.name=event.target.value
    }

    render(){
        const{temp}=this.props;
        console.log('b', temp)
        return(
            <div>
            <input style={{background:'red'}} defaultValue={this.name} onChange={this.change} />
        <C name={this.name}/>
        </div>
        );
    }
}



class ProviderExample extends Component{
    @observable name;
    change=(event)=>{
        this.name=event.target.value
    }
    render(){
        return(
            <Provider temp={'value'}>
                <input style={{background:'red'}} defaultValue={this.name} onChange={this.change} />
            <B temp={'from a'} />
            </Provider>

        );
    }
}

export default ProviderExample;