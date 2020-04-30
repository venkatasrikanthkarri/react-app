class ParentCounter extends React.Component{
    state={
        parentCounter:0
    };
    onParentCounterIncrement=()=>{
        this.setState({parentCounter:this.state.parentCounter+1});
    }
    render(){
        console.log('parentCounter Render Called');
        return(
            <ChildCounter
            onParentCounterIncrement={this.onParentCounterIncrement}
            parentCounter={this.state.parentCounter}
            />
            )
    }
}


class ChildCounter extends React.Compont{
    state={
        childCounter1:0,
        chilfCounter2:0
    };


onIncrement=()=>{
    this.props.onParentCounterIncrement();
    this.setState({childCounter1:this.state.childCounter1+1});
}

render(){
    return(
        <div>
      <button onClick={this.onIncrement}>ClickMe</button>
      <h2>{this.state.childCounter1}
            {this.state.chilfCounter2}
      </h2>
    </div>
        )}
}